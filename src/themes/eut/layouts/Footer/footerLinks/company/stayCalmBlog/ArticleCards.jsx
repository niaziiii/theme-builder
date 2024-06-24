
import Image from "next/image";
import Link from "next/link";

export default function ArticleCards({ date, title, excerpt, imagePath, altText }) {
  return (
    <article className="flex flex-col grow px-5  text-lime-400">
      <Image
        loading="lazy"
        src={imagePath}
        alt={altText}
        width={383}
        height={173}
        className="w-full aspect-[2]"
      />
      <h3 className="mt-7 text-lg font-semibold">{title}</h3>
      <time className="mt-5 leading-[130%] text-zinc-400">{date}</time>
      <p className="mt-5 text-sm leading-5 text-neutral-500">{excerpt}</p>
      <Link href="#" className="mt-5 leading-[180%]">
        Read More »
      </Link>
    </article>
  );
}