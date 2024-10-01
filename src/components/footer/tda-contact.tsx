import Image from "next/image";
import React from "react";

const TDAContact = () => {
  return (
    <section className="bg-white space-y-2 dark:bg-black h-full rounded-lg text-left">
      <h3 className="flex justify-center space-x-2 text-xl">
        💻 🔍 🚀 🧠 📚 🌐 🎮
      </h3>

      <div>
        <div className="flex items-center">
          <Image
            src="https://via.placeholder.com/150"
            alt="Profile"
            height={64}
            width={64}
            className="rounded-full border-2 border-blue-500"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Kushagra Sharma
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-700 dark:text-gray-300 pl-20">
          Passionate about technology and programming, always eager to learn and
          grow. Currently exploring Rust and machine learning.
        </p>
      </div>
    </section>
  );
};

export default TDAContact;
