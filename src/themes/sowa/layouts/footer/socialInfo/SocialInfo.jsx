import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function SocialInfo() {
  const items = [
    {
      icon: <Facebook />,
      alt: "Facebook | Sowa Tool",
      href: "#",
    },
    {
      icon: <Instagram />,
      alt: "Instagram | Sowa Tool",
      href: "#",
    },
    {
      icon: <Youtube />,
      alt: "Youtube | Sowa Tool",
      href: "#",
    },
    {
      icon: <Linkedin />,
      alt: "Linkedin | Sowa Tool",
      href: "#",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {items.map((item, i) => (
        <div key={i}>
          <Link
            className="bg-grey w-10 h-10 rounded-full p-0 flex items-center justify-center text-white"
            href={item.href}
            title={item.alt}
          >
            {item.icon}
          </Link>
        </div>
      ))}
    </div>
  );
}
