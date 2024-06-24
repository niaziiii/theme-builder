"use client";

import { useState } from "react";
import Pagination from "./pagination";
import SubscribeForm from "./SubscribeForm";
import ArticleCards from "./ArticleCards";
import CategoriesList from "./CategoriesList";

function HealthBlog() {
  const articles = [
    {
      id: "1",
      title: "Magnesium for Kidney Stones",
      date: "January 2, 2024",
      excerpt:
        "Kidney stones are hard, crystallized mineral deposits that start small and grow in the kidney. Men are four times more likely to develop kidney stones",
      imagePath: "/kidneyStones.png",
      altText: "Magnesium for Kidney Stones",
    },
    {
      id: "2",
      title:
        "Magnesium for Preterm Labour (How It Works, Risks, Benefits + More)",
      date: "April 9, 2023",
      excerpt:
        "Why do hospitals use magnesium for preterm labour? Can magnesium slow or stop early labour contractions? Are there any side effects of taking magnesium during pregnancy",
      imagePath: "/Magnesiumforpretermlabour.png",
      altText: "Magnesium for Preterm Labour",
    },
    {
      id: "3",
      title:
        "Magnesium for Addiction Recovery (Plus 6 Other Supplements to Relieve Withdrawal)",
      date: "October 8, 2022",
      excerpt:
        "When you are recovering from drug addiction, withdrawal symptoms can put your resolve to quit to an extreme test. Some of these symptoms are similar",
      imagePath: "/magnesiumforaddiction.png",
      altText: "Magnesium for Addiction Recovery",
    },
    {
      id: "4",
      title: "8 Side Effects of Taking Magnesium Supplements",
      date: "September 22, 2022",
      excerpt:
        "If you’re taking magnesium, let’s talk about the side effects you should know. Magnesium is one of the most common supplements today. It’s increasingly popular",
      imagePath: "/Sideeffectsoftakingmagnesium.png",
      altText: "8 Side Effects of Taking Magnesium Supplements",
    },
    {
      id: "5",
      title: "7 Types of Magnesium for Your Health",
      date: "July 28, 2022",
      excerpt:
        "Your body needs magnesium to function properly — but what if you don’t get enough magnesium from diet alone? The majority of Canadians don’t get",
      imagePath: "/TypesofMagnesium.png",
      altText: "7 Types of Magnesium for Your Health",
    },
    {
      id: "6",
      title: "Magnesium and Vitamin D for Immunity",
      date: "July 23, 2022",
      excerpt:
        "Magnesium and Vitamin D are essential nutrients for the immune system. They work together to support immune function and overall health",
      imagePath: "/MagnesiumandVitaminDforImmunity.png",
      altText: "Magnesium and Vitamin D for Immunity",
    },
    {
      id: "7",
      title: "Treating Alcohol Addiction with Magnesium",
      date: "July 12, 2022",
      excerpt:
        "There’s a long history of treating alcohol addiction with magnesium. In fact, Natural Calm Canada founder, Linda Bolton, was a registered nurse and recalls that",
      imagePath: "/TreatingAlcoholAddictionwithMagnesium.png",
      altText: "Treating Alcohol Addiction with Magnesium",
    },
    {
      id: "8",
      title: "Magnesium Supplements To Quit Smoking: Does It Help?",
      date: "July 7, 2022",
      excerpt:
        "If you’re thinking of quitting smoking or helping a loved one, you may wonder if there are supplements to quit smoking. After all, supplements can",
      imagePath: "/SupplementsToQuitSmoking.png",
      altText: "Magnesium Supplements To Quit Smoking: Does It Help?",
    },
    {
      id: "9",
      title:
        "Magnesium Supplements and Smoking Weed: Can Cannabis Make You Magnesium Deficient?",
      date: "June 22, 2022",
      excerpt:
        "What effect does smoking weed have on your body’s magnesium levels? And if you smoke weed, should you worry about deficiency or take magnesium supplements?",
      imagePath: "/magnesiumsupplementsandsmokingweed.png",
      altText: "Magnesium Supplements and Smoking Weed",
    },
    {
      id: "10",
      title:
        "Constipation When Travelling: 6 Ways To Stay Regular Away From Home",
      date: "June 17, 2022",
      excerpt:
        "Have you ever been on vacation and had the frustrating experience of being constipated? Travel can affect digestion and for some, that means constipation. Even",
      imagePath: "/ConstipationWhenTravelling.png",
      altText: "Constipation When Travelling",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex gap-5 max-md:flex-col justify-between items-center w-full">
      <section className="md:flex md:flex-row flex-col md:gap-5 md:my-0 my-5 w-full">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:w-[67%] max-md:ml-0 max-md:w-full h-full">
          {articles.map((article, index) => (
            <ArticleCards key={index} {...article} />
          ))}
          <div className="ml-24">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div className="flex flex-col md:w-[33%]  max-md:w-full h-full">
          <aside className="flex flex-col ml-5  max-md:ml-0 max-md:w-full h-full">
            <SubscribeForm />
            <CategoriesList />
          </aside>
        </div>
      </section>
    </main>
  );
}

export default HealthBlog;
