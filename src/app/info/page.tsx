import React from "react";
import Header from "@/components/info/header";
import ContactInfo from "@/components/info/contact-info";
import PublicKeys from "@/components/info/public-keys";
import TechnicalSkills from "@/components/info/technical-skills";
import Projects from "@/components/info/projects";
import Education from "@/components/info/education";
import Portfolio from "@/components/info/portfolio";
import Languages from "@/components/info/languages";
import Interests from "@/components/info/interests";
import GitHubContributions from "@/components/info/github-contributions";
import BlogPosts from "@/components/info/blog-posts";
import Workshops from "@/components/info/workshops";
import VolunteerExperience from "@/components/info/volunteer-experience";
import Hobbies from "@/components/info/hobbies";
import Certifications from "@/components/info/certificates";
import Testimonials from "@/components/info/testimonial";
import SocialLinks from "@/components/info/links";
import Note from "@/components/utils/note";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kushagra Sharma",
  description:
    "Comprehensive information about Kushagra Sharma, including professional background, skills, interests, and personal insights.",
  keywords: [
    "Kushagra Sharma info",
    "About Kushagra Sharma",
    "Portfolio info",
    "Full Stack Developer",
    "Software engineering",
    "Developer background",
    "Tech enthusiast",
    "Personal insights",
    "Professional profile",
  ],
  authors: [{ name: "Kushagra Sharma", url: "https://www.thedarkartist.in" }],
  robots: "index, follow",
  publisher: "Kushagra Sharma",
  twitter: {
    card: "summary_large_image",
    title: "About Kushagra Sharma",
    description:
      "Discover detailed information about Kushagra Sharma's professional background, expertise, and journey in technology.",
    site: "@TheDarkArtist",
    creator: "@TheDarkArtist",
  },
  openGraph: {
    title: "About Kushagra Sharma",
    type: "website",
    url: "https://thedarkartist.in/info",
    description:
      "Detailed insights into the professional and personal journey of Kushagra Sharma, a passionate full stack developer and technology enthusiast.",
    images: "https://thedarkartist.in/assets/info-preview.png",
  },
};

const InfoPage = () => {
  return (
    <main className="pt-20">
      <div className="max-w-screen-lg mx-4 md:mx-auto">
        <Header />
        <Note description="This page is not ready" />
        <ContactInfo />
        <PublicKeys />
        <TechnicalSkills />
        <Projects />
        <Education />
        <SocialLinks />
        <Portfolio />
        <Certifications />
        <Languages />
        <Interests />
        <GitHubContributions />
        <BlogPosts />
        <Testimonials />
        <Workshops />
        <VolunteerExperience />
        <Hobbies />
      </div>
      <Footer />
    </main>
  );
};

export default InfoPage;
