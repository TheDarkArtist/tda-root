import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import bcryptjs from "bcryptjs";

import { LoginSchema } from "@/lib/zod";
import { getUserByEmail, getUserByUsername } from "@/lib/actions/utils/user";

export default {
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
      profile(profile) {
        return {
          name: profile.name,
          image: profile.picture,
          email: profile.email,
        };
      },
    }),
    Github({
      allowDangerousEmailAccountLinking: true,
      profile(profile) {
        return {
          name: profile.name,
          image: profile.avatar_url,
          email: profile.email,
        };
      },
    }),
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { identifier, password } = validatedFields.data;

          let user;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const isEmail = emailRegex.test(identifier);

          if (isEmail) {
            user = await getUserByEmail(identifier);
          } else {
            user = await getUserByUsername(identifier);
          }

          if (!user || !user.password) return null;

          const passwordMatch = await bcryptjs.compare(password, user.password);

          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
