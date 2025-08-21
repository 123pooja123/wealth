"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { use, useEffect, useRef } from "react";
import { el } from "date-fns/locale";

const HeroSection = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // Adjust this value as needed

      if(scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <div className="pb-20 px-4 pt-40">
      <div className="container mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] leading-tight gradient-title font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Manage Your Finances <br /> with Intelligence
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          An AI-powered finance management platform that helps you track,
          analyse, and optimize your spending with real-time insights.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          {/* Get Started button - black/white style */}
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-5 bg-zinc-800 text-white hover:bg-zinc-700 transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>

          {/* Watch Demo button */}
          <Link href="https://www.youtube.com/roadsidecoder" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-5 border-gray-400 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              Watch Demo
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1100}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
