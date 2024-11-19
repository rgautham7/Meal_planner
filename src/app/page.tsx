'use client'

import { NavBar } from "@/components/NavBar";
import { AboutPage } from "@/components/AboutPage";
import { DisplayPage } from "@/components/DisplayPage";
import { TestimonialSection } from "@/components/TestimonialSection";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-8 z-10">
        <NavBar />
      </div>
      <BackgroundBeamsWithCollision children={undefined} />
      <AboutPage />
      <DisplayPage />
      <TestimonialSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
