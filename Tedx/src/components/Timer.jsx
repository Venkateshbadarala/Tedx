"use client";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

// Function to render the countdown time
const renderTime = (time) => {
  return (
    <div className="flex justify-center items-center text-white font-bold md:text-[3rem] x-sm:text-[1.5rem] sm:text-[2.5rem]">
      {time}
    </div>
  );
};

// Functions to calculate time breakdown
const getTimeSeconds = (time) => (time % 60) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
  const [size, setSize] = useState(120);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setSize(window.innerWidth < 640 ? 80 : 120);
      };
      handleResize(); // Set initial size
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Get the current time in seconds
  const startTime = Math.floor(Date.now() / 1000);

  // Set the target countdown date (March 1, 2025, at 00:00:00 UTC)
  const endTime = Math.floor(new Date("2025-03-01T00:00:00Z").getTime() / 1000);
  
  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const timerProps = {
    isPlaying: true,
    size: size,
    strokeWidth: 6,
  };

  return (
    <div className="flex items-center justify-center md:p-4 md:space-x-36 x-sm:space-x-5">
      {[
        { label: "Days", duration: daysDuration, initial: remainingTime, getTime: getTimeDays },
        { label: "Hours", duration: daySeconds, initial: remainingTime % daySeconds, getTime: getTimeHours },
        { label: "Minutes", duration: hourSeconds, initial: remainingTime % hourSeconds, getTime: getTimeMinutes },
        { label: "Seconds", duration: minuteSeconds, initial: remainingTime % minuteSeconds, getTime: getTimeSeconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-4">
          <CountdownCircleTimer
            {...timerProps}
            colors="#FF0000"
            duration={item.duration}
            initialRemainingTime={item.initial}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>{renderTime(item.getTime(item.duration - elapsedTime))}</span>
            )}
          </CountdownCircleTimer>
          <p className="text-red-600 uppercase">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
