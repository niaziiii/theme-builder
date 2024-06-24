import React from "react";

const TestimonialForm = () => {
  const formContent = [
    {
      asterik: "*",
      title: "Full Name",
      inputBox: <input className="bg-[#d7f0ff] xs:w-[100%] xs:mx-auto md:w-[85%] py-2" type="text" />,
      question: "What is your full name",
      title2: "Email",
      question2: "What is your email address?",
      title3: "Testimonial",
      textarea: (
        <textarea className="bg-[#d7f0ff] xs:w-[100%] xs:mx-auto md:w-[85%]" rows="12"></textarea>
      ),
      question3: "What do you think about us?"
    },
  ];
  return (
    <div className="md:ml-4 xs:ml-0 w-full">
      <div className="asterik my-2">
        <span className="text-red-400 text-2xl">{formContent.asterik}</span>
        &nbsp;
        <p className="inline-block text-[#878787]">Required</p>
      </div>
      {formContent.map((item) => (
        <>
          <div className="my-6">
            <p className="inline-block text-black text-xs font-medium">
              {item.title}
            </p>
            &nbsp;
            <span className="text-red-400 text-2xl">{item.asterik}</span>
            <div>
              {item.inputBox}
              <i className="block text-[#8b8b8b] text-sm">{item.question}</i>
            </div>
          </div>

          <div className="my-6">
            <p className="inline-block text-black text-xs font-medium">
              {item.title3}
            </p>
            &nbsp;
            <span className="text-red-400 text-2xl">{item.asterik}</span>
            <div>
              {item.textarea}
              <i className="block text-[#8b8b8b] text-sm">{item.question3}</i>
            </div>
          </div>

          <div className="my-6">
            <p className="inline-block text-black text-xs font-medium">
              {item.title2}
            </p>
            &nbsp;
            <span className="text-red-400 text-2xl">{item.asterik}</span>
            <div>
              {item.inputBox}
              <i className="block text-[#8b8b8b] text-sm">{item.question2}</i>
            </div>
          </div>
        </>
      ))}
      <button className="bg-blue-500  text-white font-bold rounded-full py-3 px-6 uppercase hover:bg-[#A6CE39]">
        Add Testimonial
      </button>
    </div>
  );
};

export default TestimonialForm;
