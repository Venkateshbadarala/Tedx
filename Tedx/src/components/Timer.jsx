import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="flex justify-center items-center text-white font-bold md:text-[3rem] x-sm:text-[1.5rem] sm:text-[2.5rem]">{time}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
  const stratTime = Date.now() / 1000;
  const endTime = stratTime + 11693223;

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;


  const timerProps = {
    isPlaying: true,
    size: 120, 
    strokeWidth: 6
  };

  return (
    <div className="flex items-center justify-center md:p-4 md:space-x-36 x-sm:space-x-5">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <CountdownCircleTimer
          {...timerProps}
          colors="#FF0000"
          duration={daysDuration}
          initialRemainingTime={remainingTime}
          size={window.innerWidth < 640 ? 80 : 120} 
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <p className="text-red-600">days</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <CountdownCircleTimer
          {...timerProps}
          colors="#FF0000"
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
          })}
          size={window.innerWidth < 640 ? 80 : 120}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <p className="text-red-600">hours</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <CountdownCircleTimer
          {...timerProps}
          colors="#FF0000"
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
          })}
          size={window.innerWidth < 640 ? 80 : 120}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <p className="text-red-600">Minutes</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <CountdownCircleTimer
          {...timerProps}
          colors="#FF0000"
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > 0
          })}
          size={window.innerWidth < 640 ? 80 : 120}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("seconds", getTimeSeconds(elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
        <p className="text-red-600 uppercase">Seconds</p>
      </div>
    </div>
  );
}
