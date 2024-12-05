import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/atom-one-dark.min.css";
import "katex/dist/katex.min.css";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <Markdown
      rehypePlugins={[
        rehypeHighlight,
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        rehypeRaw,
      ]}
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 {...props} className="text-3xl mt-4 mb-2 font-extrabold">
            {props.children}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 {...props} className="text-2xl mt-4 mb-2 font-semibold">
            {props.children}
          </h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="text-xl mt-4 mb-2 font-semibold">
            {props.children}
          </h3>
        ),
        h4: ({ node, ...props }) => (
          <h4 {...props} className="text-lg mt-4 mb-2 font-semibold">
            {props.children}
          </h4>
        ),
        h5: ({ node, ...props }) => (
          <h5 {...props} className="text-md mt-4 mb-2 font-semibold">
            {props.children}
          </h5>
        ),
        h6: ({ node, ...props }) => (
          <h6 {...props} className="text-sm mt-4 mb-2 font-semibold">
            {props.children}
          </h6>
        ),
        p: ({ node, ...props }) => (
          <p {...props} className="text-sm my-2 md:text-base leading-relaxed">
            {props.children}
          </p>
        ),
        ol: ({ node, ...props }) => (
          <ol
            {...props}
            className="list-decimal text-sm md:text-base ml-4 space-y-1 my-2"
          />
        ),
        ul: ({ node, ...props }) => (
          <ul
            {...props}
            className="list-disc text-sm md:text-base ml-4 my-2 space-y-1"
          />
        ),
        a: ({ node, ...props }) => (
          <a
            {...props}
            className="text-sky-500 hover:text-blue-500 underline"
          />
        ),
        pre: ({ node, ...props }) => (
          <code>
            <pre
              {...props}
              className="border-[8px] dark:border-cyan-950/40 dark:bg-zinc-900 bg-white text-xs md:text-sm p-4 my-4 rounded overflow-x-auto dark:bg-dot-cyan-950 bg-dot-gray-400"
            />
          </code>
        ),
        code: ({ node, ...props }) => (
          <code
            {...props}
            className="dark:bg-zinc-900 bg-white text-xs md:text-sm rounded px-2"
          />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-4">
            <table
              {...props}
              className="border-collapse border border-zinc-300 dark:border-zinc-700"
            />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead {...props} className="bg-zinc-200 dark:bg-zinc-800">
            {props.children}
          </thead>
        ),
        tbody: ({ node, ...props }) => (
          <tbody
            {...props}
            className="divide-y divide-zinc-300 dark:divide-zinc-700"
          >
            {props.children}
          </tbody>
        ),
        th: ({ node, ...props }) => (
          <th
            {...props}
            className="border border-dotted border-sky-600 font-bold text-sky-600 dark:text-green-600 px-3 py-2"
          />
        ),
        td: ({ node, ...props }) => (
          <td
            {...props}
            className="border border-dotted border-sky-600 px-3 py-2 text-zinc-700 dark:text-zinc-300"
          />
        ),
        hr: ({ node, ...props }) => (
          <hr
            {...props}
            className="border-zinc-400 dark:border-zinc-600 my-2 text-sky-300"
          />
        ),

        blockquote: ({ node, ...props }) => (
          <blockquote
            {...props}
            className="dark:bg-cyan-950/50 bg-cyan-100 rounded-r-sm mt-4 mb-2 px-4 border-l-[10px] dark:border-cyan-950 py-1.5 dark:text-sky-200"
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownRenderer;
