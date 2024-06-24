import React from "react";
import CountDownTime from "./CountDownTime";


const Countdown = () => {
  // Example end time (Unix epoch seconds)
const endTime = 1715824258.681811; // Adjust to your desired end time
return (
  <div className="">
    <CountDownTime endTime={endTime} />
  </div>
  )
};

export default Countdown;
