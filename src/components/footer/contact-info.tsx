import { rslab } from "@/utils/fonts";
import React from "react";

const ContactInfo = () => {
  return (
    <section className="space-y-4 h-full text-left">
      <h3 className={`font-black text-2xl text-zinc-800 dark:text-zinc-400 ${rslab.className}`}>
        Contact Information
      </h3>
      <div>
        <p className="text-gray-700 dark:text-gray-300">
          Email:{" "}
          <a
            href="mailto:sparrow.kushagra@gmail.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            sparrow.kushagra@gmail.com
          </a>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Email:{" "}
          <a
            href="mailto:kushagra.sharma@thedarkartist.in"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            kushagra.sharma@thedarkartist.in
          </a>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Phone:{" "}
          <a
            href="tel:+917426072284"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            +91 7426072284
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
