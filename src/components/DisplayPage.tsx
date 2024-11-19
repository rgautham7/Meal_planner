import React from "react";
import { FocusCards } from "./ui/FocusCards";

export function DisplayPage() {
    const cards = [
        {
          title: "Greek Yogurt Parfaits",
          src: "/images/Img1.jpg",
        },
        {
          title: "Hummus with Veggie Packs",
          src: "/images/Img2.jpg",
        },
        {
          title: "Pre-cooked Quinoa Bowls",
          src: "/images/Img3.jpg",
        },
        {
          title: "Salad Kits",
          src: "/images/Img4.jpg",
        },
        {
          title: "Oatmeal Cups",
          src: "/images/Img5.jpg",
        },
        {
          title: "Grilled Chicken Wraps",
          src: "/images/Img6.jpg",
        },
        {
            title: "Hard-Meat Loafs (Pre-Peeled)",
            src: "/images/Img1.jpg",
          },
          {
            title: "Sushi Rolls (Fish-based)",
            src: "/images/Img2.jpg",
          },
      ];

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center py-12 md:py-20 px-4 md:px-6">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
          Diet plans according to your needs
        </h1>
        <div className="max-w-7xl mx-auto">
          <FocusCards cards={cards} />
        </div>
      </div>
    </div>
  );
}
