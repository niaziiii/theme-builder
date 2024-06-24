import TextOne from "./textOne";
const ImageSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          src="https://naturalcalm.wpenginepowered.com/wp-content/uploads/2021/02/Banff-Linda-abd-Dale-powder.png"
          alt=""
        />
        <div>
          <h1 className="my-2 text-3xl text-blue-500 xs:text-center">
            Bringing Natural Calm to Canadians since 2005
          </h1>
        </div>
      </div>
      <div>
        <TextOne />
      </div>
    </div>
  );
};

export default ImageSection;
