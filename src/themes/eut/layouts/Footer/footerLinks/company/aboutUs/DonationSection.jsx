const DonationSection = () => {
  return (
    <div>
      <div className="xs:hidden md:block">
      <div className="donationImg">
        <div className="bgOverlay flex items-center">
          <div className="textFormat text-[#fff]  ml-[25%] w-[38%]">
            <h1 className="text-2xl">Every Purchase is a Donation</h1>
            <p className="text-md  my-5">
              Did you know that every purchase of Natural Calm in Canada makes a
              difference in Africa?
            </p>
            <p className="text-md  my-5">
              When you choose Natural Calm, you can feel great about making the
              best choice for your body and the world.
            </p>
            <p className="text-md  my-5">
              We’ve donated over 2 million dollars to help fight world poverty and
              we’re just getting started. Read more about our efforts in Africa
              through Thrive at thriveforgood.org at the link below.
            </p>
            <button className="bg-blue-500  rounded-full py-3 px-6 uppercase hover:bg-[#A6CE39]">
              Learn More Here
            </button>
          </div>
        </div>
      </div>
      </div>

      <div className="xs:block md:hidden">
        <div className="relative bgSmallDonation">
          <div className="absolute top-[25%] w-[80%] left-[12%]">
            <div className="textFormat text-[#fff]">
              <h1 className="text-2xl">Every Purchase is a Donation</h1>
              <p className="text-md  my-5">
                Did you know that every purchase of Natural Calm in Canada makes a
                difference in Africa?
              </p>
              <p className="text-md  my-5">
                When you choose Natural Calm, you can feel great about making the
                best choice for your body and the world.
              </p>
              <p className="text-md  my-5">
                We’ve donated over 2 million dollars to help fight world poverty and
                we’re just getting started. Read more about our efforts in Africa
                through Thrive at thriveforgood.org at the link below.
              </p>
              <button className="bg-blue-500  rounded-full py-3 px-6 uppercase hover:bg-[#A6CE39]">
                Learn More Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
