import D2CBoxexWrapper from "@/components/home/d2c-boxex-wrapper";
import Quote from "@/components/home/quote";
import HomeCarousel from "@/components/home/home-carousel";
import Hero from "@/components/home/hero";
import Info from "@/components/home/info";
import TdaTechs from "@/components/home/technologies/tda-techs";
import TdaSkills from "@/components/home/skills/tda-skills";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto mt-10">
      <Info />
      <Hero />
      <D2CBoxexWrapper />
      <Quote />
      <TdaTechs />
      <TdaSkills />
    </main>
  );
}
