"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Name Header */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900">
          Mr X
        </h1>

        {/* Animated Role */}
        <div className="text-2xl md:text-4xl font-medium text-neutral-600 h-10 md:h-12 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              "AI Engineer",
              2000, 
              "Backend Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            cursor={true}
            className="inline-block"
          />
        </div>

        {/* Short Intro */}
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mt-4">
          A backend-focused engineer building intelligent systems and AI-powered applications.
        </p>

        {/* Call to Actions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-neutral-900 border border-neutral-200 font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
