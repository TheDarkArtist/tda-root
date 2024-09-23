import React from "react";
import D2CBox from "./d2c-box";
import Seperator from "../utils/seperator";
import { cn } from "@/lib/utils";

const D2CBoxexWrapper = () => {
  return (
    <div className="my-10 border border-white/10 rounded-xl bg-white dark:bg-black">
      <Seperator
        text="We live by a philosoply, Die by a philosoply"
        className="text-sky-400 border-sky-600/80 font-bold"
        classWrapper={cn(
          "hover:bg-sky-600/10 py-4 px-2 rounded-xl",
          " border border-transparent hover:border-sky-600/20",
          "dark:hover:bg-grid-lg-sky-600/5"
        )}
      >
        <section className="grid md:grid-cols-3 gap-2 my-4">
          <D2CBox headerClassName="text-sky-600" headerLabel="Architect">
            <p className="text-center">
              something else Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Amet molestiae expedita, obcaecati natus dolores earum
              doloribus nobis temporibus. Numquam totam tenetur molestiae
              exercitationem aliquid saepe illo vel veritatis obcaecati
              voluptatum, neque itaque.
            </p>
          </D2CBox>
          <D2CBox headerClassName="text-green-600" headerLabel="Implement">
            <p className="text-center">
              something else Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. A quas perspiciatis odit nesciunt inventore exercitationem
              sint similique minus consectetur fugit delectus facilis repellat
              earum distinctio, neque iusto amet in assumenda animi. Ullam!
            </p>
          </D2CBox>
          <D2CBox headerClassName="text-orange-600" headerLabel="Optimize">
            <p className="text-center">
              something else Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Veniam similique atque omnis eos rerum aut, id totam aliquam
              magni reprehenderit sequi libero error voluptatibus maxime. Rerum
              nobis facilis maiores atque ducimus vel!
            </p>
          </D2CBox>
        </section>
      </Seperator>
    </div>
  );
};

export default D2CBoxexWrapper;
