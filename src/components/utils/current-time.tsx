"use client";

import React, { useState, useEffect } from "react";

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getKolkataTime = (date: Date): Date => {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const kolkataOffset = 5.5;
    return new Date(utc + kolkataOffset * 3600000);
  };

  const zonedTime = getKolkataTime(currentTime);
  const formattedTime = zonedTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <p suppressHydrationWarning className="text-lg text-right">
      {formattedTime}
    </p>
  );
};

export default CurrentTime;
