import Image from "next/image";

import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { edusab, os } from "@/utils/fonts";
import CardWrapper from "@/components/home/card-wrapper";
import { FaQuoteLeft } from "react-icons/fa";

export default async function Home() {
  const session = await auth();
  return (
    <main className="max-w-screen-lg mx-auto">
      <span
        className="absolute filter invert dark:invert-0 blur-sm dark:blur-lg dark:backdrop-invert-0 backdrop-invert left-0 bg-cover bg-center min-h-[25rem] w-full -z-20"
        style={{ backgroundImage: "url('/bg/tda-bg.jpg')" }}
      />
      <section className="min-h-[24rem] space-y-4 md:space-y-0 md:grid md:grid-cols-3 gap-2 p-4 w-full dark:bg-zinc-800 bg-gray-400 backdrop-filter bg-opacity-20 dark:bg-opacity-20">
        <div className={`gap-2 ${os.className}`}>
          <h1 className="md:text-6xl text-4xl md:text-center dark:text-gray-200 text-gray-800 font-black">
            Hacking The Box
          </h1>
          {/** TODO: Write this para **/}
          <p className="md:text-xl text-md dark:text-gray-200 text-gray-800">
            Hey! I&apos;m Kushagra Sharma,
          </p>
        </div>
        <div className="grid col-span-2 items-center justify-center">
          <Image src="/gif/head.gif" alt="video" height={1024} width={1800} />
        </div>
      </section>
      <section className="h-24 dark:bg-zinc-950 bg-white border dark:border-zinc-900 my-4 p-4 rounded-sm">
        {/** TODO: Write this para **/}
        <p>TheDarkArtist</p>
      </section>
      <section className="grid md:grid-cols-3 gap-2 my-4 m-4 lg:m-0">
        <CardWrapper
          className="dark:bg-red-950/50 dark:hover:bg-red-950 bg-red-200"
          headerLabel="Design"
        >
          <p>
            something else Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Amet molestiae expedita, obcaecati natus dolores earum
            doloribus nobis temporibus. Numquam totam tenetur molestiae
            exercitationem aliquid saepe illo vel veritatis obcaecati
            voluptatum, neque itaque.
          </p>
        </CardWrapper>
        <CardWrapper
          className="dark:bg-blue-950/50 dark:hover:bg-blue-950 bg-blue-200"
          headerLabel="Code"
        >
          <p>
            something else Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. A quas perspiciatis odit nesciunt inventore exercitationem
            sint similique minus consectetur fugit delectus facilis repellat
            earum distinctio, neque iusto amet in assumenda animi. Ullam!
          </p>
        </CardWrapper>
        <CardWrapper
          className="dark:bg-green-950/50 dark:hover:bg-green-950 bg-green-200"
          headerLabel="Develope"
        >
          <p>
            something else Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Veniam similique atque omnis eos rerum aut, id totam aliquam
            magni reprehenderit sequi libero error voluptatibus maxime. Rerum
            nobis facilis maiores atque ducimus vel!
          </p>
        </CardWrapper>
      </section>
      <section className="border-4 border-dashed px-4 py-4 pb-2 rounded-md border-zinc-600 relative m-4 lg:m-0 lg:my-4 dark:bg-grid-sm-gray-800">
        <FaQuoteLeft className="absolute h-6 w-6 top-2" />
        <p
          className={cn(
            "pl-8 text-2xl font-bold dark:text-white/80",
            edusab.className
          )}
        >
          Imagination is more important than knowledge. For knowledge is
          limited, whereas imagination embraces the entire world, stimulating
          progress, giving birth to evolution.
        </p>
        <p className="text-end font-bold">~Albert Einstine</p>
      </section>
    </main>
  );
}
