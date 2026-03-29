import { data } from "@/data/projects";
import { ArrowRight, CalendarDays, Github, Globe, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-4">
      {/* Page Header */}
      <header className="mb-16 text-center md:text-left relative">
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 inline-flex items-center gap-4">
          Projects
          <Rocket className="w-8 h-8 text-neutral-400 animate-pulse" />
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl">
          A collection of systems, architectures, and experiments I've built.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {data.map((project, index) => (
          <div
            key={project.id}
            className="group block animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out h-full flex flex-col">
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={project.thumbnail === "PLACEHOLDER" ? `https://placehold.co/800x500/f5f5f5/171717?text=${encodeURIComponent(project.title)}` : project.thumbnail}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium mb-4">
                  <CalendarDays className="w-4 h-4" />
                  <time dateTime={project.date}>
                    {new Date(project.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                  {project.title}
                </h2>

                {project.category && project.category.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs font-semibold rounded-md"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* External Links */}
                {(project.webUrl || project.githubUrl) && (
                  <div className="flex items-center gap-3 mt-auto mb-6 relative z-20">
                    {project.webUrl && (
                      <a
                        href={project.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-neutral-50 rounded-full hover:bg-neutral-900 hover:text-white transition-colors text-neutral-600 border border-neutral-200 hover:border-neutral-900 shadow-sm hover:shadow-md"
                        title="Visit Website"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-neutral-50 rounded-full hover:bg-neutral-900 hover:text-white transition-colors text-neutral-600 border border-neutral-200 hover:border-neutral-900 shadow-sm hover:shadow-md"
                        title="View Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}

                <div className="flex items-center text-sm font-bold text-neutral-900 pt-4 border-t border-neutral-100 pointer-events-none mt-auto">
                  Read Case Study
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