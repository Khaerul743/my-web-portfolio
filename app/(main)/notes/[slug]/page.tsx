import { notes } from "@/data/notes";
import { getMarkdown } from "@/lib/markdown";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NoteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const note = notes.find((n) => n.slug === slug);
  if (!note) return notFound();

  let markdownContent = "";
  try {
    markdownContent = getMarkdown(`notes/${slug}.md`);
  } catch (error) {
    markdownContent = "Could not load note content.";
  }

  return (
    <article className="min-h-screen py-20 px-6 max-w-4xl mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-4">
      {/* Navigation */}
      <Link
        href="/notes"
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors bg-neutral-50 hover:bg-neutral-100 px-4 py-2 rounded-full font-medium text-sm mb-12 shadow-sm border border-neutral-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to notes
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 text-neutral-500 text-sm font-medium mb-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <time dateTime={note.date}>
              {new Date(note.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="w-1 h-1 rounded-full bg-neutral-300"></div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{Math.max(1, Math.ceil(markdownContent.split(' ').length / 200))} min read</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-[1.1]">
          {note.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-medium mb-8">
          {note.description}
        </p>

      </header>

      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-neutral-100 rounded-[2rem] overflow-hidden mb-16 shadow-xl border border-neutral-200">
        <Image
          src={note.thumbnail === "PLACEHOLDER" ? `https://placehold.co/1200x675/f5f5f5/171717?text=${encodeURIComponent(note.title)}` : note.thumbnail}
          alt={note.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Markdown Content */}
      <div className="prose prose-neutral prose-lg md:prose-xl max-w-none 
          prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-neutral-900
          prose-a:text-neutral-900 prose-a:underline-offset-4 prose-a:decoration-neutral-300 hover:prose-a:decoration-neutral-900 hover:prose-a:text-neutral-600 prose-a:transition-colors
          prose-img:rounded-[2rem] prose-img:shadow-xl prose-img:border prose-img:border-neutral-200
          prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800 prose-pre:rounded-2xl prose-pre:shadow-lg
          prose-code:text-neutral-800 prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-medium
          prose-blockquote:border-l-4 prose-blockquote:border-neutral-900 prose-blockquote:bg-neutral-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:rounded-r-2xl prose-blockquote:text-neutral-700
          prose-strong:text-neutral-900 prose-strong:font-bold
          [&>*:first-child]:mt-0">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </article>
  );
}
