"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-6 max-w-6xl mx-auto gap-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">

      {/* Text Content - Left Side (Desktop) / Bottom (Mobile) */}
      <div className="flex-1 w-full space-y-8 md:pr-8 text-center md:text-left">
        {/* Name Header */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 drop-shadow-sm">
          Khaerul Lutfi
        </h1>

        {/* Animated Role */}
        <div className="text-2xl md:text-4xl font-medium text-neutral-600 h-10 md:h-12 flex items-center justify-center md:justify-start">
          <TypeAnimation
            sequence={[
              "AI Engineer",
              2000,
              "Backend Engineer",
              2000,
              "Whatever you want to call me",
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
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed mt-4">
          A backend-focused engineer building intelligent systems and AI-powered applications.
        </p>

        {/* Call to Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-neutral-900 border border-neutral-200 font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Icons */}
        <div className="pt-6 pb-10 flex items-center justify-center md:justify-start gap-6 animate-in fade-in zoom-in duration-700 delay-300 fill-mode-both">
          <a
            href="https://linkedin.com/in/khaerul-lutfi-49b0a035b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-[#0A66C2] transition-colors duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Khaerul743"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/khrllutfi24?igsh=dWswbHJtMW9xMzRh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-[#E4405F] transition-colors duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Profile Photo - Right Side (Desktop) / Top (Mobile) */}
      <div className="flex-1 w-full flex justify-center md:justify-end animate-in fade-in zoom-in duration-1000 delay-200 fill-mode-both">
        <div className="relative w-64 h-64 md:w-80 md:h-80 animate-[float_6s_ease-in-out_infinite]">
          {/* Subtle background glow/shadow behind the image */}
          <div className="absolute inset-0 bg-neutral-100 rounded-full blur-2xl opacity-60"></div>

          <div className="relative w-full h-full rounded-full border border-neutral-100 shadow-xl overflow-hidden bg-white">
            <Image
              src="/profile.png"
              alt="Khaerul Lutfi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

    </div>
  );
}
