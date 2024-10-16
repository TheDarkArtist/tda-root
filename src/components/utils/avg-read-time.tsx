import React from "react";

interface ReadingTimeProps {
  content: string;
}

const AvgReadingTime: React.FC<ReadingTimeProps> = ({ content }) => {
  if (!content) return;

  const estimateReadingTime = (content: string) => {
    const lines = content.split("\n").filter((line) => !line.startsWith("#"));

    const words = lines.join(" ").trim().split(/\s+/).length;

    const averageWPM = 225;
    const minutes = Math.ceil(words / averageWPM);

    return minutes > 1
      ? `${minutes} minute${minutes > 1 ? "s" : ""}`
      : "Less than a minute";
  };

  const readingTime = estimateReadingTime(content);

  return (
    <div className="text-sm font-medium">
      <div className="font-bold">{readingTime}</div>
    </div>
  );
};

export default AvgReadingTime;
