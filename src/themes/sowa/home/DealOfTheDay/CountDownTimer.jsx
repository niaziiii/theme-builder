"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ time }) => {
  const [remainingTime, setRemainingTime] = useState(time * 60); // Convert minutes to seconds
  const [timerActive, setTimerActive] = useState(true);

  // Format time to HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let intervalId;

    if (timerActive) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalId);
            setTimerActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerActive]);

  return (
    <div className="bg-orangeRed py-1 px-4 text-white rounded-md">
      <p className="font-bold whitespace-nowrap">
        Ends in: {formatTime(remainingTime)}
      </p>
    </div>
  );
};

export default CountdownTimer;
