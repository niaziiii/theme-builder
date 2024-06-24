
import Image from "next/image";
const TeamSection = () => {
  const bioData = [
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/12/linda.png",
      name: "LINDA BOLTON",
      designation: "CEO",
      detail:
        "For her leadership as Natural Calm Canada's CEO, Linda has been named among the 100 Top Canadian Health Influencers and has ranked for multiple years in the list of Canada's Top Female Entrepreneurs.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/12/dale.png",
      name: "DALE BOLTON",
      designation: "CO-FOUNDER",
      detail:
        "The driving force behind Thrive. Together, Dale and Linda made Natural Calm a social enterprise that's doing more to end world poverty than any other supplement company.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/12/Penny-1-scaled.jpg",
      name: "PENNY JAUNDOO",
      designation: "MANAGING DIRECTOR",
      detail:
        "Penny makes sure our ship runs smoothly. Crosses the Ts and dots the Is. Handles all aspects of our operation with patience and grace. Couldn't do it without her.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/12/lissy.png",
      name: "LISSY MAJLUF",
      designation: "ORDER FULFILLMENT AND CUSTOMER SERVICE",
      detail:
        "On the frontlines educating people every day about magnesium. If you have a question about the products, Lissy will get you an answer. Stat",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/12/chad-1.png",
      name: "CHAD SHEARS",
      designation: "MARKETING DIRECTOR",
      detail:
        "Chad manages everything you see out there from social media, print, advertising, digital, website and tech.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/12/shanaz.png",
      name: "SHAHNAZ M. BANI",
      designation: "FULFILMENT & SHIPPING DEPARTMENT",
      detail:
        "Being highly detailed oriented; Shahnaz ensures orders are processed in accordance with our company’s customer service standards and performs order fulfillment process’s including order entry, administration and shipping.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/12/maria.png",
      name: "MARIA ROLDAN",
      designation: "BUSINESS DEVELOPMENT MANAGER",
      detail:
        "Maria manages the relationship with our broker and distributor, as well as plans and executes our yearly promotions calendar. She’s a business woman turned Nutritionist so she also helps with product development and training.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/12/jeff.png",
      name: "JEFF CATTO",
      designation: "SOCIAL MEDIA MANAGER",
      detail:
        "Jeff is responsible for building the community of Natural Calm across social channels, answering your questions and thinking up new ways to keep you informed about the importance of magnesium.",
    },
  ];

  return (
    <div>
      <h1 className="my-8 text-3xl text-center text-blue-500 ">
        The Natural Calm Canada Team
      </h1>
      <div className="md:grid md:grid-cols-3 w-[85%] gap-x-2 text-center mx-auto my-5 xs:grid xs:grid-cols-1">
        {bioData.map((item, idx) => (
          <div className="my-5" key={idx}>
            <Image width={300} height={300}  src={item.image}  layout="responsive" />
            <p className="text-[#0477BE]  font-semibold text-xl text-center">
              {item.name}
            </p>
            <p className="text-[#A6CE39] font-medium text-medium mx-auto text-center w-[80%]">
              {item.designation}
            </p>
            <p className="text-xs text-center ">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
