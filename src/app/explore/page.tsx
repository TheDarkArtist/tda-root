import Footer from "@/components/footer/footer";
import React from "react";

const ExplorePage = () => {
  return (
    <main className="h-full flex flex-col justify-between pt-10">
      <div>
        <div className="bg-dot-red-600 text-6xl text-center pt-4 pb-8 mt-10">
          <h1 className="bg-clip-text bg-gradient-to-b text-transparent dark:from-gray-200 dark:via-gray-400 dark:to-gray-600 from-gray-600 via-gray-700 to-gray-800">
            Creativity + Code = Artistry
          </h1>
        </div>
        <div className="max-w-screen-lg w-full mx-auto">
          <p>Stay tuned, Working on some stuff</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ExplorePage;
