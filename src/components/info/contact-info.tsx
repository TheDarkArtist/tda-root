const ContactInfo = () => {
  return (
    <section className="border border-sky-300 dark:border-red-900 bg-white dark:bg-zinc-950 shadow-md rounded-lg p-8 mb-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-300">
        Contact Information
      </h2>
      <ul className="mt-4">
        <li>
          Email:{" "}
          <a
            href="mailto:sparrow.kushagra@gmail.com"
            className="text-red-600 dark:text-red-400"
          >
            sparrow.kushagra@gmail.com
          </a>
        </li>
        <li>
          Email:{" "}
          <a
            href="mailto:kushagra.sharma@thedarkartist.in"
            className="text-red-600 dark:text-red-400"
          >
            kushagra.sharma@thedarkartist.in
          </a>
        </li>
        <li>
          Phone:{" "}
          <a
            href="tel:+917426072284"
            className="text-red-600 dark:text-red-400"
          >
            +917426072284
          </a>
        </li>
        <li>
          Website:{" "}
          <a
            href="https://yourwebsite.com"
            className="text-red-600 dark:text-red-400"
          >
            https://thedarkartist.in
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactInfo;
