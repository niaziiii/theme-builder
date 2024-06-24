"use client";
import React, { useState } from "react";
import TestimonialForm from "./TestimonialForm";
const TestimonialDetail = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const handleCount = (item) => {
    setSelectedItem(item);
  };
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const content = [
    {
      heading: `Miracle Solution:I Have Been In`,
      title: `Miracle Solution:`,

      smallParagraph: ` I have been in post-menopause for 2 years and during that time, I have had numerous issues with anxiety and sleep disturbances and joint aches. I am a person who does not want to take pills unless it’s absolutely necessary however, I was seriously contemplating medication in order to help me in my desperation.
           
            I first saw Calm at Costco, then did some online research and spoke to my pharmacist who recommended it highly. `,
      largeParagraph: `I first saw Calm at Costco, then did some online research and spoke to my pharmacist who recommended it highly. I bought it 4 months ago and it has been a miracle blessing that changed my life. My sleep is wonderful now and the anxiety disappeared almost overnight. My body aches all but stopped because I can now have restful, healing sleep.

            I highly recommend this miracle product to anyone; man or woman, who needs peace of mind & body. Even my doctor recommended magnesium and has mentioned that everyone who uses it sees instant healing results.
            
            Thank you Natural Calm for your awesome products…it is indeed a Miracle 🙏`,
      author: "Val Forth",
    },
    {
      heading: `Sleep And No Knee Pain`,

      smallParagraph: `I’ve only been using Natural Calm for 3 days now. In those 3 days I’ve had 3 really good night sleeps and I haven’t been experiencing pain in my knees while trying to sleep. So far, it’s been great! `,

      author: "Jay J",
    },
    {
      heading: `Maegan`,

      largeParagraph: `I’ve been meaning to email since 2018.   Thank you for your amazing product.  I don’t even know where to begin.  Your magnesium helped save my sons life.  We lost our daughter at 20 weeks gestation when I went into labour that couldn’t be stopped. With our son we had so many doctors not helping.  When I went into labour and started to dilate at 21 weeks gestation they wouldn’t give me anything to stop labour.  I had to force them to send me to the city to get help from a high risk specialist.   Before I was flown 8 hours away I started taking your magnesium powder.  I had taken calm years before because of the purity of the product.  So when my mom ran to the health food store to buy the best product we knew which one to grab.  I took the max dose of magnesium allowed in pregnancy and it stopped my labour.  When I was in the city I ended up getting a stitch to hold my baby in but was still crampy.  If I missed a dose of calm the cramps would get worse.  Because of your magnesium and the stitch and my stubbornness to save our sons life he lasted till 27 weeks gestation.  He cried when he was born and he fought for his life.  Many months in the nicu and one surgery but he is now a healthy 19 month old.  He was 2lbs at birth and is now 26lbs. Every time I see your calm magnesium I feel grateful that there was a product I had no second guessing about taking while pregnant.  I am not good at words but I hope this letter brings some joy to you in these unprecedented times.   Your magnesium stopped my labour! Helped save my son!  I am forever grateful for calm!!
            Please don’t ever stop producing this product!`,

      author: "Maegan",
    },
    {
      heading: `Miracle Solution:I Have Been In`,
      title: `Miracle Solution:`,

      smallParagraph: ` I have been in post-menopause for 2 years and during that time, I have had numerous issues with anxiety and sleep disturbances and joint aches. I am a person who does not want to take pills unless it’s absolutely necessary however, I was seriously contemplating medication in order to help me in my desperation.
           
            I first saw Calm at Costco, then did some online research and spoke to my pharmacist who recommended it highly. `,
      largeParagraph: `I first saw Calm at Costco, then did some online research and spoke to my pharmacist who recommended it highly. I bought it 4 months ago and it has been a miracle blessing that changed my life. My sleep is wonderful now and the anxiety disappeared almost overnight. My body aches all but stopped because I can now have restful, healing sleep.

            I highly recommend this miracle product to anyone; man or woman, who needs peace of mind & body. Even my doctor recommended magnesium and has mentioned that everyone who uses it sees instant healing results.
            
            Thank you Natural Calm for your awesome products…it is indeed a Miracle 🙏`,
      author: "Val Forth",
    },
    {
      heading: `Maegan`,

      largeParagraph: `I’ve been meaning to email since 2018.   Thank you for your amazing product.  I don’t even know where to begin.  Your magnesium helped save my sons life.  We lost our daughter at 20 weeks gestation when I went into labour that couldn’t be stopped. With our son we had so many doctors not helping.  When I went into labour and started to dilate at 21 weeks gestation they wouldn’t give me anything to stop labour.  I had to force them to send me to the city to get help from a high risk specialist.   Before I was flown 8 hours away I started taking your magnesium powder.  I had taken calm years before because of the purity of the product.  So when my mom ran to the health food store to buy the best product we knew which one to grab.  I took the max dose of magnesium allowed in pregnancy and it stopped my labour.  When I was in the city I ended up getting a stitch to hold my baby in but was still crampy.  If I missed a dose of calm the cramps would get worse.  Because of your magnesium and the stitch and my stubbornness to save our sons life he lasted till 27 weeks gestation.  He cried when he was born and he fought for his life.  Many months in the nicu and one surgery but he is now a healthy 19 month old.  He was 2lbs at birth and is now 26lbs. Every time I see your calm magnesium I feel grateful that there was a product I had no second guessing about taking while pregnant.  I am not good at words but I hope this letter brings some joy to you in these unprecedented times.   Your magnesium stopped my labour! Helped save my son!  I am forever grateful for calm!!
            Please don’t ever stop producing this product!`,

      author: "Maegan",
    },
    {
      heading: `Maegan`,

      largeParagraph: `I’ve been meaning to email since 2018.   Thank you for your amazing product.  I don’t even know where to begin.  Your magnesium helped save my sons life.  We lost our daughter at 20 weeks gestation when I went into labour that couldn’t be stopped. With our son we had so many doctors not helping.  When I went into labour and started to dilate at 21 weeks gestation they wouldn’t give me anything to stop labour.  I had to force them to send me to the city to get help from a high risk specialist.   Before I was flown 8 hours away I started taking your magnesium powder.  I had taken calm years before because of the purity of the product.  So when my mom ran to the health food store to buy the best product we knew which one to grab.  I took the max dose of magnesium allowed in pregnancy and it stopped my labour.  When I was in the city I ended up getting a stitch to hold my baby in but was still crampy.  If I missed a dose of calm the cramps would get worse.  Because of your magnesium and the stitch and my stubbornness to save our sons life he lasted till 27 weeks gestation.  He cried when he was born and he fought for his life.  Many months in the nicu and one surgery but he is now a healthy 19 month old.  He was 2lbs at birth and is now 26lbs. Every time I see your calm magnesium I feel grateful that there was a product I had no second guessing about taking while pregnant.  I am not good at words but I hope this letter brings some joy to you in these unprecedented times.   Your magnesium stopped my labour! Helped save my son!  I am forever grateful for calm!!
            Please don’t ever stop producing this product!`,

      author: "Maegan",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-3 xs:grid-cols-1 xs:w-[90%] xs:mx-auto gap-4 my-4">
        <div className="grid md:grid-cols-2 xs:grid-cols-1  md:col-span-2 gap-4">
          <div className="grid grid-rows-1 gap-4">
            {content.map((item, idx) => (
              <div
                className="border-[1px] rounded-none border-gray-200 h-fit p-4 text-[#878787]"
                key={idx}
              >
                <div className="">
                  <h1 className="text-blue-500 text-xl">{item.heading}</h1>
                  <p>{item.title}</p>
                  <p>{item.smallParagraph}</p>
                  <p>{item.largeParagraph}</p>
                  <p className="float-end">
                    <i> {item.author}</i>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-rows-1 gap-4">
            {content.map((item) => (
              <div className=" border-[1px] rounded-none border-gray-200 h-fit p-4 text-[#878787]">
                <div className="">
                  <h1 className="text-blue-500 text-xl">{item.heading}</h1>
                  <p>{item.title}</p>
                  <p>{item.smallParagraph}</p>
                  <p>{item.largeParagraph}</p>
                  <p className="float-end">
                    <i> {item.author}</i>
                  </p>
                </div>
              </div>
            ))}
          </div>
         
         {/* Pagination */}
<div className="md:flex xs:block xs:text-center  my-2 w-full">
            {count.map((item) => (
              <p
                className={`inline-block mx-4 cursor-pointer ${selectedItem === item
                    ? "text-white bg-gray-400 px-2"
                    : "text-[#A6CE39]"
                  } `}
                onClick={() => handleCount(item)}
              >
                {item}
              </p>
            ))}
          </div>
          
        </div>
     
        {/* counts */}

        <div>
          <TestimonialForm />
        </div>


       
      </div>

 
    </>
  );
};

export default TestimonialDetail;
