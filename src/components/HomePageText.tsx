"use client";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
import { MovingBorderButton } from "@/components/ui/MovingBorderButton";

export function HomePageText() {
    const words = [
        {
          text: "Fuel",
        },
        {
          text: "your",
        },
        {
          text: "life!",
        },
        {
          text: "One",
          className: "bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 darkdark:from-green-200 dark:to-blue-200",
        },
        {
          text: "Meal",
          className: "bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:bg-gradient-to-r dark:from-green-200 dark:to-blue-200",
        },
        {
          text: "at",
        },
        {
          text: "a",
        },
        {
          text: "time!",
        },
      ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base sm:text-xl">
      Unlock a world of healthy, delicious, and effortless meal planning that adapts to your lifestyle.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <MovingBorderButton 
        borderRadius="1.75rem"
        className="text-xl font-bold h-16 w-48 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            Explore Now!
        </MovingBorderButton>
        <MovingBorderButton
        borderRadius="1.75rem"
        className="text-xl font-bold h-16 w-48 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            Signup
        </MovingBorderButton>
      </div>
    </div>
  );
}
