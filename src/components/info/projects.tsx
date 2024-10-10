const Projects = () => {
  return (
    <section className="border border-sky-300 dark:border-red-900 bg-white dark:bg-zinc-950 shadow-md rounded-lg p-8 mb-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4">
        Projects
      </h2>
      <ul className="list-none">
        <li className="transition-transform hover:scale-105">
          📁 Project A - Description of Project A
        </li>
        <li className="transition-transform hover:scale-105">
          📁 Project B - Description of Project B
        </li>
        <li className="transition-transform hover:scale-105">
          📁 Project C - Description of Project C
        </li>
      </ul>
    </section>
  );
};

export default Projects;
