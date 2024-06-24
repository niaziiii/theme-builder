/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function SlideShow() {
  let [images, setImages] = React.useState([
    "/slider/image-1.jpg",
    "/slider/image-2.jpg",
    "/slider/image-3.jpg",
  ]);
  let [idx, setIdx] = React.useState(0);

  function useInterval(callback, delay) {
    let callbackRef = React.useRef();
    callbackRef.current = callback;
    React.useEffect(() => {
      let timer = setInterval(callbackRef.current, delay);
      return () => {
        clearInterval(timer);
      };
    }, [delay]);
  }

  useInterval(() => {
    setIdx((idx) => (idx + 1) % images.length);
  }, 5000);

  function handleClick(props) {
    setIdx(props);
  }

  return (
    <div className="w-full">
      <div className="z-0 relative  w-full bg-gray-100 bg-cover h-[300px] bg-no-repeat bg-center overflow-hidden">
        <img
          src={images[idx]}
          alt="slide-images"
          className="h-full rounded-tl-md w-auto"
        />
        <Button number={images.length} idx={idx} handleClick={handleClick} />
      </div>
    </div>
  );
}

const Button = ({ number, idx, handleClick }) => {
  let arr = [...Array(number).keys()];

  return (
    <div className="absolute bottom-4 left-0 right-0 mx-auto flex justify-center gap-x-4">
      {arr.map((btn, i) => (
        <button
          className={`rounded-full bg-gray-200 w-2 h-2 ${
            i === idx ? "bg-yellow" : ""
          }`}
          key={i}
          onClick={() => handleClick(i)}
        ></button>
      ))}
    </div>
  );
};
