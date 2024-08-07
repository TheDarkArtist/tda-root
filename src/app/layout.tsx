import type { Metadata } from "next";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";
import Providers from "@/utils/providers";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Kushagra Sharma",
  description: "My portfolio project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={cn(
            "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
            "dark:from-black dark:to-zinc-950 from-white to-gray-100",
            inter.className
          )}
        >
          <Providers>
            <Navbar />
            <main className="pt-12 h-full">{children}</main>
            <Toaster />
          </Providers>
        </body>
      </SessionProvider>
    </html>
  );
}
