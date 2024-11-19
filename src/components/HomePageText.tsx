"use client";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
import { MovingBorderButton } from "@/components/ui/MovingBorderButton";
// import { MobileMenu } from "@/components/ui/MobileMenu";

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
      className: "bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-200 dark:to-blue-200",
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
    <div className="relative flex flex-col items-center justify-center h-[40rem]" id="home">
      {/* Show mobile menu only on small screens */}
      {/* <div className="md:hidden">
        <MobileMenu />
      </div> */}

      {/* Logo and content */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:pt-24 sm:mb-0 sm:text-xl mb-8">
          Unlock a world of healthy, delicious, and effortless meal planning that adapts to your lifestyle.
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 sm:mt-0 mt-8">
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
    </div>
  );
}
