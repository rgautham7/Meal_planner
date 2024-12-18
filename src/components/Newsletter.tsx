import React from "react";
import { MovingBorderButton } from "./ui/MovingBorderButton";
import Image from "next/image";

export function Newsletter() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10">
        <div className="w-[320px] md:w-[1020px] h-[280px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
          <div className="relative w-full h-full">
            <Image
              src="/images/newsletter.jpeg"
              alt="Healthy Food"
              fill
              className="object-cover opacity-40 dark:opacity-20"
              priority
            />
          </div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-5">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
              Stay Healthy, Stay Informed
            </h2>
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 mb-6 max-w-2xl text-center px-4">
              Get the latest nutrition tips and meal plans delivered to your inbox.
            </p>
            <MovingBorderButton
              borderRadius="0.5rem"
              className="text-lg md:text-xl font-bold h-12 w-40 bg-white dark:bg-gray-700 text-black dark:text-white border-neutral-200 dark:border-gray-600"
            >
              Subscribe
            </MovingBorderButton>
          </div>
        </div>
      </div>
    </div>
  );
}
