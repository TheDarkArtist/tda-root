const BlogPosts = () => {
  return (
    <section className="border border-sky-300 dark:border-red-900 bg-white dark:bg-zinc-950 shadow-md rounded-lg p-8 mb-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4">
        Blog Posts
      </h2>
      <ul className="list-none">
        <li>
          <a href="/blog/post1" className="text-blue-500">
            Understanding Rust: A Beginner&apos;s Guide
          </a>
        </li>
        <li>
          <a href="/blog/post2" className="text-blue-500">
            Machine Learning: Basics and Applications
          </a>
        </li>
      </ul>
    </section>
  );
};

export default BlogPosts;
