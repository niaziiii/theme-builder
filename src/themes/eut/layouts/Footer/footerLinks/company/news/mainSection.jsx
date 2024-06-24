import Image from "next/image";

const MainSection = () => {
  const bioData = [
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/06/QA.png",
      name: "Q&A with Canadian Olympian Penny Oleksiak",
      detail:
        "For her leadership as Natural Calm Canada's CEO, Linda has been named among the 100 Top Canadian Health Influencers and has ranked for multiple years in the list of Canada's Top Female Entrepreneurs.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/thumbnail_image003.png",
      name: "From Single Mom to Philanthropist: The Incredible Journey of Linda Bolton",
      detail:
        "The driving force behind Thrive. Together, Dale and Linda made Natural Calm a social enterprise that's doing more to end world poverty than any other supplement company.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/balance-your-life.jpeg",
      name: "The Benefits of Magnesium, Symptoms You May Not be Getting Enough of it, & Why You Should Consume it Daily with CEO of Natural Calm Canada, Linda Bolton",
      detail:
        "Penny makes sure our ship runs smoothly. Crosses the Ts and dots the Is. Handles all aspects of our operation with patience and grace. Couldn't do it without her.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/podbean_podcast_cover2_copy_xrz2w5.jpeg",
      name: "Is Magnesium the Magic Supplement we should all be taking? Natural Calm and Thrive for Good with Linda Bolton",
      detail:
        "On the frontlines educating people every day about magnesium. If you have a question about the products, Lissy will get you an answer. Stat",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/james-1.png",
      name: "This Is BC: Vernon couple teach their children about philanthropy",
      detail:
        "Chad manages everything you see out there from social media, print, advertising, digital, website and tech.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/penny-1.png",
      name: "Penny Oleksiak healing from knee surgery, not yet ready to race",
      detail:
        "Being highly detailed oriented; Shahnaz ensures orders are processed in accordance with our company’s customer service standards and performs order fulfillment process’s including order entry, administration and shipping.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/penny2-1.png",
      name: "Olympic Gold Medalist Penny Oleksiak to Climb Mount Kilimanjaro to Help Combat Hunger",
      detail:
        "Maria manages the relationship with our broker and distributor, as well as plans and executes our yearly promotions calendar. She’s a business woman turned Nutritionist so she also helps with product development and training.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/penny3-1.png",
      name: "Penny Oleksiak, Canada's most decorated Olympian, undergoes knee surgery",
      detail:
        "Jeff is responsible for building the community of Natural Calm across social channels, answering your questions and thinking up new ways to keep you informed about the importance of magnesium.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/penny3-1.png",
      name: "Oleksiak will focus on nutrition and inspiration during injury rehab",
      detail:
        "Jeff is responsible for building the community of Natural Calm across social channels, answering your questions and thinking up new ways to keep you informed about the importance of magnesium.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/linda.jpg",
      name: "How Linda Bolton Of Natural Calm Canada Is Helping To Address The Growing Challenge Of Food Insecurity",
      detail:
        "Jeff is responsible for building the community of Natural Calm across social channels, answering your questions and thinking up new ways to keep you informed about the importance of magnesium.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/im-a-millionaire-so-now-what-colleen-s9iYbwzZEm8-RhZN7D8nfML.1400x1400-1024x1024.jpg",
      name: "Keep Calm and Feed the World with Linda Bolton",
      detail:
        "Jeff is responsible for building the community of Natural Calm across social channels, answering your questions and thinking up new ways to keep you informed about the importance of magnesium.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/kili.png",
      name: "Linda and Dale Bolton on Climbing Kilimanjaro and Ending Poverty",
      detail:
        "Jeff is responsible for building the community of Natural Calm across social channels, answering your questions and thinking up new ways to keep you informed about the importance of magnesium.",
    },
    {
      image:
        "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2023/05/linda2.png",
      name: "Linda Bolton: from RN to entrepreneur, CEO and global nutrition advocate",
      detail:
        "Jeff is responsible for building the community of Natural Calm across social channels, answering your questions and thinking up new ways to keep you informed about the importance of magnesium.",
    },
  ];

  return (
    <div className="">
      <h1 className="my-8 text-3xl text-center text-blue-500">
        The Natural Calm Canada Team
      </h1>
      <div className="grid md:grid-cols-3 xs:grid-cols-1 w-[90%] gap-x-2 text-center mx-auto my-5">
        {bioData.map((item, idx) => (
          <div className="my-5" key={idx}>
            <Image width={300} height={300} src={item.image} alt="itemImg" layout="responsive" />
            <p className="text-[#0477BE] md:max-w-[90%] xs:w-full font-normal text-sm xs:text-center my-3 hover:text-[#A6CE39] cursor-pointer">
              {item.name}
            </p>
            <p className="text-xs xs:text-center md:max-w-[90%] xs:w-full">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
