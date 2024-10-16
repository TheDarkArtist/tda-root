import NextAuth from "next-auth";
import authConfig from "../../auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";
import { getUserById } from "./actions/utils/user";
import { UserAccess } from "@prisma/client";
import { getTwoFactorConfirmationByUserId } from "./actions/auth/two-factor-confirmation";
import { getAccountByUserId } from "./actions/utils/accounts";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    linkAccount: async ({ user }) => {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (!user.id || !account) return false;

      // FIX: Type errors below

      if (account.provider === "github") {
        // @ts-expect-error
        user.username = profile.login;
      } else if (account.provider === "google") {
        // @ts-expect-error
        user.username = profile.email
          .split("@")[0]
          .replace(/[^a-zA-Z0-9]/g, ""); // username will only contain letter & numbers
      }

      // Allow OAuth signin without verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      // Prevent signin without email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        );

        if (!twoFactorConfirmation) {
          return false;
        }

        // Delete two factor confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.access && session.user) {
        session.user.access = token.access as UserAccess;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.username = token.username as string;
        session.user.image = token.picture;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.username = existingUser.username;
      token.email = existingUser.email;
      token.access = existingUser.access;
      token.picture = existingUser.image;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});
