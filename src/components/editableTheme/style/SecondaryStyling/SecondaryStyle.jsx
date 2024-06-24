"use client";

const SecondaryStyle = ({ callback }) => {

  const handleChange = (e) => {
    const params = {
      refComponent: "SecondaryStyle",
        value: {
        SecondaryStyle: e.target.value
        }
    }
    callback(params);

  };

  return (
    <div className="w-full mx-3 flex gap-5 items-center ">
      <div>
        <h1 className="text-white text-xs">Secondary Style</h1>
      </div>
      <div>
        <select
          name="select"
          id="select_fontFamily"
          onChange={handleChange}          
          className="w-36 text-xs text-white bg-gray-500 h-5 rounded outline-0"
        >
          <option value="fill">Fill</option>
          <option value="outline">Outline</option>
          <option value="flat">Flat</option>
        </select>
      </div>
    </div>
  );
};

export default SecondaryStyle;
