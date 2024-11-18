import type { Metadata } from "next";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Providers from "@/utils/providers";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavWheel from "@/components/navbar/nav-wheel";

export const metadata: Metadata = {
  title: {
    template: "%s | Kushagra Sharma - Full Stack Developer",
    default: "Kushagra Sharma - Full Stack Developer",
  },
  description:
    "Welcome to the personal portfolio of Kushagra Sharma, showcasing projects, articles, and insights on software development and technology.",
  keywords: [
    "Kushagra Sharma",
    "Full Stack Developer",
    "TheDarkArtist",
    "tda",
    "Portfolio",
    "Projects",
    "Articles",
    "Technology",
    "Programming",
    "Web Development",
    "Software Engineering",
  ],
  authors: [{ name: "Kushgra Sharma", url: "https://www.thedarkartist.in" }],
  robots: "index, follow",
  referrer: "origin-when-cross-origin",
  creator: "Kushagra Sharma | TheDarkArtist",
  publisher: "Kushagra Sharma | TheDarkArtist",
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Sharma - Full Stack Developer",
    description:
      "Explore my portfolio, projects, and blog on software development and technology.",
    site: "@TheDarkArtist",
    creator: "@TheDarkArtist",
  },
  openGraph: {
    title: "Kushagra Sharma - Full Stack Developer",
    type: "website",
    url: "https://thedarkartist.in",
    description:
      "Portfolio showcasing the projects, skills, and writings of Kushagra Sharma, a full stack developer.",
    images: "https://thedarkartist.in/assets/portfolio-preview.png",
  },
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
            <NavWheel />
            {children}
            <Toaster />
          </Providers>
          <Analytics />
          <SpeedInsights />
        </body>
      </SessionProvider>
    </html>
  );
}
