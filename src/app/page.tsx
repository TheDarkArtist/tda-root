import Quote from "@/components/home/quote";
import Hero from "@/components/home/hero";
import Info from "@/components/home/info";
import TdaTechs from "@/components/home/technologies/tda-techs";
import TdaSkills from "@/components/home/skills/tda-skills";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: "https://i.imgur.com/pMWcbsU.png",
  },
};

export default function Home() {
  return (
    <div className="h-full">
      <main className="max-w-screen-lg mx-auto mt-20">
        <Info />
        <Hero />
        <Quote />
        <TdaTechs />
        <TdaSkills />
      </main>
      <Footer />
    </div>
  );
}
