import React, { useState, useEffect, useRef } from "react";
import { RiDeleteBin5Line, RiDragMove2Fill } from "react-icons/ri";
function MainContent() {
  const [data, setData] = useState([
    {
      heading: "This is text 1 heading",
      text: "Text 1 To insert non-localized, pseudo-Latin sample text in Word, type =lorem() in the document where you want the text to appear, and then press ENTER. Note: In this function, p is the number of paragraphs, and l is the number of lines that you want to appear in each paragraph.",
      button: "Click me button 1",
      dims: { w: 200},
    },
    {
      heading: "This is text 2 heading",
      text: "Text 2 To insert non-localized, pseudo-Latin sample text in Word, type =lorem() in the document where you want the text to appear, and then press ENTER. Note: In this function, p is the number of paragraphs, and l is the number of lines that you want to appear in each paragraph.",
      button: "Click me button 2",
      dims: { w: 200 },
    },
    {
      heading: "This is text 3 heading",
      text: "Text 3 To insert non-localized, pseudo-Latin sample text in Word, type =lorem() in the document where you want the text to appear, and then press ENTER. Note: In this function, p is the number of paragraphs, and l is the number of lines that you want to appear in each paragraph.",
      button: "Click me button 3",
      dims: { w: 200 },
    },
  ]);

  const [selected, setSelected] = useState(null);
  const dragRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragRef.current) {
        const xDiff = e.clientX - dragRef.current.clientX;
        const yDiff = e.clientY - dragRef.current.clientY;

        console.log(dragRef.current.clientX, "xdiff");

        setData((prevData) =>
          prevData.map((item, index) => {
            if (index === selected) {
              return {
                ...item,
                dims: {
                  w: Math.max(50, item.dims.w + xDiff),
                  h: Math.max(20, item.dims.h + yDiff),
                },
              };
            }
            return item;
          })
        );
        dragRef.current = { clientX: e.clientX, clientY: e.clientY };
      }
    };

    const handleMouseUp = () => {
      dragRef.current = null;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [selected]);

  const resizeText = (index) => {
    setSelected(index);
  };

  const handleContentChange = (index) => {
    setData((prevData) => {
      return prevData.map((item, i) => {
        if (i === index) {
          return {
            ...item,
          };
        }
        return item;
      });
    });
  };

  return (
    <div className="container bg-slate-200">
      {data.map((item, index) => (
        <div
          onDoubleClick={() => resizeText(index)}
          key={index}
          className={`w-max h-max relative ${
            selected === index ? "border-2 border-[#5cbbd2] z-0 m-5" : "none"
          }`}
          
        >
          <RiDeleteBin5Line
            className={`${
              selected === index
                ? "absolute top-[-20px] left-[50%] text-white  bg-red-500 cursor-pointer"
                : "hidden"
            }`}
          />
          <RiDragMove2Fill
            className={`${
              selected === index
                ? "absolute top-[-20px] left-[50%] mx-5 text-white bg-[#595964] cursor-pointer"
                : "hidden"
            }`}
          />
          <p
            id={`text-${index}`}
            contentEditable={selected === index}
            onBlur={() => setSelected(null)}
            onInput={() => handleContentChange(index)}
            style={{ width: item.dims.w}}
            className="px-5 my-2 h-auto"
          >
            {item.text}
          </p>

          <h1
            className="text-red-500 px-5 my-2 h-auto"
            id={`heading-${index}`}
            contentEditable={selected === index}
            onBlur={() => setSelected(null)}
            onInput={() => handleContentChange(index)}
            style={{ width: item.dims.w}}
          >
            {item.heading}
          </h1>

          <button
            className="bg-green-500 px-5 h-auto"
            id={`button-${index}`}
            contentEditable={selected === index}
            onBlur={() => setSelected(null)}
            onInput={() => handleContentChange(index)}
            style={{  width: item.dims.w }}
          >
            {item.button}
          </button>
          {selected === index && (
            <>
              <div
                className="z-10 w-5 h-5 cursor-pointer border-2 rounded-full bg-white border-[#5cbbd2]  hover:border-2 hover:w-4 hover:h-7  hover:border-white hover:rounded-2xl hover:bg-[#5cbbd2]"
                onMouseDown={(e) => {
                  dragRef.current = { clientX: e.clientX, clientY: e.clientY };
                }}
                style={{
                  position: "absolute",
                  top: 150,
                  left: -10,
                
                }}
              />
              <div
                className="z-10 w-5 h-5 cursor-pointer border-2 rounded-full bg-white border-[#5cbbd2]  hover:border-2 hover:w-4 hover:h-7  hover:border-white hover:rounded-2xl hover:bg-[#5cbbd2]"
                onMouseDown={(e) => {
                  dragRef.current = { clientX: e.clientX, clientY: e.clientY };
                }}
                style={{
                  position: "absolute",
                  top: 150,
                  right: -10,
                 
                }}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default MainContent;
