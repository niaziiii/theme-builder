export const FixedBadge = ({ value }) => {
  return (
    <div className=" absolute top-[-50%] left-[50%] w-[16px] h-[16px] rounded-full flex items-center justify-center  bg-white text-blue">
      <p className="text-[12px]">{value}</p>
    </div>
  );
};
