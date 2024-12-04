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
import siteMetadata from "@/utils/siteMetadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: "Kushgra Sharma", url: "https://www.thedarkartist.in" }],
  referrer: "origin-when-cross-origin",
  creator: "Kushagra Sharma | TheDarkArtist",
  publisher: "Kushagra Sharma | TheDarkArtist",
  category: "technology",
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Sharma - Full Stack Developer",
    description:
      "Explore my portfolio, projects, and blog on software development and technology.",
    site: "@TheDarkArtist",
    creator: "@TheDarkArtist",
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
