import type { Metadata } from "next";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Providers from "@/utils/providers";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Kushagra Sharma",
  description: "My portfolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={cn(
            "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
            "dark:from-black dark:to-zinc-950 from-white to-gray-100",
            "dark:text-gray-100 text-gray-800",
            os.className
          )}
        >
          <Providers>
            <Navbar />
            {children}
            <Toaster />
          </Providers>
        </body>
      </SessionProvider>
      <Analytics />
    </html>
  );
}
