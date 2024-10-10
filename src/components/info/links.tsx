const SocialLinks = () => {
  return (
    <section className="border border-sky-300 dark:border-red-900 bg-white dark:bg-zinc-950 shadow-md rounded-lg p-8 mb-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4">
        Social Links
      </h2>
      <ul className="list-none">
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/IAmKushagraSharma"
            className="text-blue-500"
          >
            IAmKushagraSharma
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/thedarkartist"
            className="text-blue-500"
          >
            thedarkartist
          </a>
        </li>
        <li>
          Twitter:{" "}
          <a href="https://twitter.com/yourhandle" className="text-blue-500">
            Your Twitter
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialLinks;
