const Portfolio = () => {
  return (
    <section className="border border-sky-300 dark:border-red-900 bg-white dark:bg-zinc-950 shadow-md rounded-lg p-8 mb-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4">
        Portfolio
      </h2>
      <p>
        Visit my portfolio at{" "}
        <a href="https://portfolio.thedarkartist.in" className="text-blue-500">
          portfolio.thedarkartist.in
        </a>
      </p>
    </section>
  );
};

export default Portfolio;
