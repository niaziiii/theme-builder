"use client"
import useCountdown from "./hook/useCountDown";
// Countdown.js
import React from "react";

import CircularProgress from "./CircularProgress";

const CountDownTime = ({endTime}) => {
  console.log(endTime , "endTime")
  const { days, hours, minutes, seconds, total } = useCountdown(endTime);

  return (
    <div className="container text-center py-12 flex justify-center items-center gap-8">
      <div className=" relative">
        <div className=" absolute top-[35%] right-[45%] bottom-[45%] left-[42%] text-4xl">{days}</div>
        <CircularProgress progress={(days / 2) * 100} color="#0000FF" />
        <h1 className=" absolute top-[60%] left-[40%]">Days</h1>
      </div>
      <div className=" relative">
        <div className=" absolute top-[35%] right-[45%] bottom-[45%] left-[42%] text-4xl">{hours}</div>
        <CircularProgress progress={(hours / 24) * 100} color="#0000FF" />
        <h1 className=" absolute top-[60%] left-[35%]">Hours</h1>
      </div>
      <div className=" relative">
        <div className=" absolute top-[35%] right-[45%] bottom-[45%] left-[37%] text-4xl"> {minutes}</div>
        <CircularProgress progress={(minutes / 60) * 100} color="#0000FF" />
        <h1 className=" absolute top-[60%] left-[32%]">Minutes</h1>
      </div>
      <div className=" relative">
      <div className=" absolute top-[35%] right-[45%] bottom-[45%] left-[37%] text-4xl">{seconds}</div>
      
        <CircularProgress progress={(seconds / 60) * 100} color="#0000FF" />
        <h1 className=" absolute top-[60%] left-[32%]">Seconds</h1>
        
      </div>
    </div>
  );
};

export default React.memo(CountDownTime);
