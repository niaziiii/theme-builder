import Link from "next/link";

export default function CategoriesList() {
  const categories = [
    "About the Company",
    "Benefits of Natural Calm",
    "Best Magnesium",
    "Living a Calm Lifestyle",
    "Magnesium Deficiency",
    "Magnesium for Kids",
    "Magnesium Recipes & Diet",
    "Media and Press",
    "Melatonin",
    "Topical Magnesium",
    "Uncategorized",
  ];

  return (
    <nav className="flex flex-col px-5 pt-6 w-full h-full text-lg font-semibold leading-5 text-lime-400 bg-sky-50">
      <h4 className="self-center text-xl leading-6 text-center text-neutral-500">
        Categories
      </h4>
      {categories.map((category) => (
        <Link
          href="#"
          key={category}
          className="justify-center py-5 mt-2.5 border-b border-gray-200 border-solid"
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
