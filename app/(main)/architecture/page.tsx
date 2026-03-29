import { data } from "@/data/architectures";
import { ArrowRight, CalendarDays, ServerCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArchitecturesPage() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-4">
      {/* Page Header */}
      <header className="mb-16 text-center md:text-left relative">
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 inline-flex items-center gap-4">
          Architecture
          <ServerCog className="w-8 h-8 text-neutral-400 animate-pulse" />
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl">
          Deep dives into system architectures, infrastructure designs, and technical documentation of both personal projects and general industry concepts.
        </p>
      </header>

      {/* Architectures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {data.map((arch, index) => (
          <div
            key={arch.id}
            className="group block animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out h-full flex flex-col">
              <Link href={`/architecture/${arch.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">Read Architecture Doc</span>
              </Link>
              
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={arch.thumbnail === "PLACEHOLDER" ? `https://placehold.co/800x500/f5f5f5/171717?text=${encodeURIComponent(arch.title)}` : arch.thumbnail}
                  alt={arch.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium mb-4">
                  <CalendarDays className="w-4 h-4" />
                  <time dateTime={arch.date}>
                    {new Date(arch.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                  {arch.title}
                </h2>
                
                <p className="text-neutral-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                  {arch.description}
                </p>

                <div className="flex items-center text-sm font-bold text-neutral-900 mt-auto pt-4 border-t border-neutral-100 pointer-events-none">
                  Read Documentation
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
