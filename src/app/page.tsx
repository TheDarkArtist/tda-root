import Quote from "@/components/home/quote";
import HomeCarousel from "@/components/home/home-carousel";
import Hero from "@/components/home/hero";
import Info from "@/components/home/info";
import TdaTechs from "@/components/home/technologies/tda-techs";
import TdaSkills from "@/components/home/skills/tda-skills";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto mt-12">
        <HomeCarousel />
        <Info />
        <Hero />
        <Quote />
        <TdaTechs />
        <TdaSkills />
      </main>
      <Footer />
    </>
  );
}
