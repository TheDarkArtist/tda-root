"use client";
import React from "react";
interface ContentIndexProps {
  content: string;
  navbarHeight: number;
}

const ContentIndex: React.FC<ContentIndexProps> = ({
  content,
  navbarHeight,
}) => {
  const extractHeadings = (content: string) => {
    if (!content) return;

    const headings: { text: string; id: string }[] = [];
    const lines = content.split("\n");
    lines.forEach((line, index) => {
      if (line.startsWith("#")) {
        const headingText = line.replace(/^#+\s*/, "");
        const id = headingText.toLowerCase().replace(/\s+/g, "-");
        headings.push({ text: headingText, id });
      }
    });
    return headings;
  };

  const headings = extractHeadings(content);

  if (!headings) return;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="rounded-md p-4">
      <h1 className="pb-4 text-2xl font-bold dark:text-sky-600 text-blue-600">
        Page Content
      </h1>
      <ul className="space-y-2 overflow-y-scroll">
        {headings.map((heading, index) => (
          <li key={index}>
            <button
              className="leading-5 text-left hover:underline dark:text-cyan-600 text-blue-800"
              onClick={() => scrollToHeading(heading.id)}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentIndex;
