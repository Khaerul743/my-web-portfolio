"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mjgaqqvq");

  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-4">

      {/* 1. Page Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 inline-block relative">
          Contact
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-neutral-900 rounded-full"></div>
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto mt-6">
          Interested in collaboration, AI systems, or backend projects?
          <br className="hidden sm:block" /> Feel free to reach out.
        </p>
      </header>

      {/* 2. Contact Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">

        {/* Email Card */}
        <a
          href="mailto:khaerullutfi028@gmail.com"
          className="group block p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-neutral-300 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-neutral-100 text-neutral-600 rounded-xl group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-lg mb-1">Email</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Primary way to reach me for collaboration or project discussions.
              </p>
            </div>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://linkedin.com/in/khaerul-lutfi-49b0a035b"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#0A66C2]/30 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-neutral-100 text-neutral-600 rounded-xl group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300">
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-lg mb-1">LinkedIn</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Connect with me professionally.
              </p>
            </div>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/Khaerul743"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-neutral-800 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-neutral-100 text-neutral-600 rounded-xl group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-lg mb-1">GitHub</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Explore my projects and open-source work.
              </p>
            </div>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://www.instagram.com/khrllutfi24?igsh=dWswbHJtMW9xMzRh"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#E4405F]/30 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-neutral-100 text-neutral-600 rounded-xl group-hover:bg-gradient-to-tr group-hover:from-[#FCAF45] group-hover:via-[#F56040] group-hover:to-[#D52865] group-hover:text-white transition-colors duration-300">
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-lg mb-1">Instagram</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Personal updates and casual content.
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* 3. Contact Form Section */}
      <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">Send a Message</h2>
          <p className="text-neutral-500">I'll get back to you as soon as possible.</p>
        </div>

        {state.succeeded ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent Successfully!</h3>
            <p className="text-neutral-500">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-900 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-500 mt-1" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-900 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="yourname@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-500 mt-1" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-900 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="How can we work together?"
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 resize-y"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-500 mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
