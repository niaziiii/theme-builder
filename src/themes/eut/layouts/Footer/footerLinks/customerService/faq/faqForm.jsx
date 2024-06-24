const FaqForm = () => {
  const formContent = [
    {
      heading: "Ask a Question! We're happy to help.",
      title: "Full Name",
      email: "Email",
      textAreaTitle: "Message or Question",
      textarea: <textarea className="bg-[#d7f0ff] w-[85%]" rows="4"></textarea>,
      inputBox: <input className="bg-[#d7f0ff] w-[85%] py-2" type="text" />,
    },
  ];
  return (
    <div className="w-[60%] mx-auto mt-24">
      {formContent.map((item) => (
        <div className="my-12">
          <h1 className="text-[#0072CE] text-3xl font-medium text-left">
            {item.heading}
          </h1>
          <div className="mt-4">
            <div>
              <p className="inline-block text-slate-600 text-xs font-normal">
                {item.title}
              </p>

              <div>{item.inputBox}</div>
            </div>
          </div>
          <div className="">
            <div>
              <p className="inline-block text-slate-600 text-xs font-normal">
                {item.email}
              </p>

              <div>{item.inputBox}</div>
            </div>
          </div>

          <div className="">
            <div>
              <p className="inline-block text-slate-600 text-xs font-normal">
                {item.textAreaTitle}
              </p>

              <div>{item.textarea}</div>
            </div>
          </div>

          <div className="w-[125px]  bg-[#0477BE] rounded-full text-[13px] font-bold text-white h-[51px] flex items-center justify-center cursor-pointer hover:bg-[#A6CE39] transition ease-in-out delay-150 ">
            SUBMIT
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqForm;
