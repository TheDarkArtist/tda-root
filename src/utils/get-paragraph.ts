export const extractFirstParagraph = (content: string): string | null => {
  if (!content) return null;
  const lines = content.split("\n");
  let paragraph = "";
  let foundFirstNonHeadingLine = false;

  for (let line of lines) {
    // Trim leading and trailing spaces from the line
    line = line.trim();

    // Start collecting lines when the first non-heading line is found
    if (!foundFirstNonHeadingLine && line !== "" && !line.startsWith("#")) {
      foundFirstNonHeadingLine = true;
      paragraph += line + " ";
      continue;
    }

    // Continue collecting lines if the first non-heading line has been found
    if (foundFirstNonHeadingLine) {
      if (line !== "" && !line.startsWith("#")) {
        paragraph += line + " ";
      } else if (paragraph !== "") {
        // Stop at the first empty line or heading after starting to collect paragraph
        break;
      }
    }
  }

  // Trim the collected paragraph and return null if it's empty
  paragraph = paragraph.trim();
  return paragraph !== "" ? paragraph : null;
};
