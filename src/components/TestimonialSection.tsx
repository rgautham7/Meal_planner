import React from "react";
import { MovingBorderButton } from "./ui/MovingBorderButton";
import { GlareCard } from "./ui/GlareCard";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "MealCraft has revolutionized my meal planning. It's a game-changer!",
    author: "Sarah Johnson",
    role: "Busy Mom of Three",
    image: "/images/Test2.jpg"
  },
  {
    quote: "As a fitness enthusiast, I love how MealCraft helps me stay on track with my nutrition goals.",
    author: "Mike Thompson",
    role: "Personal Trainer",
    image: "/images/Test1.jpg"
  },
  {
    quote: "The grocery list feature saves me so much time and reduces food waste. Highly recommend!",
    author: "Emily Chen",
    role: "Environmental Advocate",
    image: "/images/Test3.jpg"
  }
];

export function TestimonialSection() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center py-20">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-20 w-full text-center px-4 md:px-6">
        <h2 className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-12">
          What Our Users Say
        </h2>

        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 w-full place-items-center">
            {testimonials.map((testimonial, index) => (
              <GlareCard key={index} className="flex flex-col items-center justify-between p-8">
                <div className="relative w-32 h-32 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-xl text-gray-400 dark:text-gray-300 leading-relaxed mb-6 text-center">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-lg text-gray-300 dark:text-gray-100">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </GlareCard>
            ))}
          </div>
        </div>

        <MovingBorderButton
          borderRadius="1.75rem"
          className="text-xl font-bold h-16 w-64 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Join Our Community
        </MovingBorderButton>
      </div>
    </div>
  );
}
