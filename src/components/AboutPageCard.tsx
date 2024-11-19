"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AboutPageCardProps {
  children: ReactNode;
}

export function AboutPageCard({ children }: AboutPageCardProps) {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="w-full h-full relative rounded-2xl md:rounded-3xl overflow-hidden max-w-sm mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 md:p-8 my-4 md:my-10">
        <Beams />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div className="relative z-20 text-center">
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      <g filter="url(#filter0_f_120_7473)">
        <circle cx="34" cy="52" r="114" fill="#6925E7" />
      </g>
      <g filter="url(#filter1_f_120_7473)">
        <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
      </g>
      <g filter="url(#filter2_f_120_7473)">
        <circle cx="191" cy="53" r="102" fill="#802FE3" />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7473"
          x="-192"
          y="-174"
          width="452"
          height="452"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="56"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter1_f_120_7473"
          x="70"
          y="-238"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter2_f_120_7473"
          x="-71"
          y="-209"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
      </defs>
    </svg>
  );
};