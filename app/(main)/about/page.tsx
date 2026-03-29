import {
  ArrowRight,
  BrainCircuit,
  Lightbulb,
  MonitorDot,
  Server,
  Sparkles,
  Workflow
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-4">
      
      {/* 1. Page Header */}
      <header className="mb-16 text-center md:text-left relative">
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 inline-flex items-center gap-4">
          About Me
          <span className="h-2 w-2 rounded-full bg-neutral-900 animate-ping"></span>
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl">
          Get to know more about my background, current focus, and the technologies I work with.
        </p>
      </header>

      {/* 2. Main About Section */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 mb-24">
        
        {/* Left Side: Profile Photo */}
        <div className="md:w-1/3 flex justify-center md:justify-start shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 group">
            {/* Animated Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-50 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>
            
            <div className="relative w-full h-full rounded-full border border-neutral-100 shadow-xl overflow-hidden bg-white animate-[float_6s_ease-in-out_infinite]">
              <Image
                src="/me.jpeg"
                alt="Khaerul Lutfi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side: Bio Content */}
        <div className="md:w-2/3 prose prose-neutral prose-lg max-w-none text-neutral-600 leading-relaxed font-medium">
          <p className="animate-in fade-in slide-in-from-right-4 duration-700 delay-100 fill-mode-both relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-b before:from-neutral-800 before:to-neutral-300 before:rounded-full">
            Hi, my name is <strong className="font-bold text-neutral-900">Khaerul Lutfi</strong>. I am currently a <strong className="font-bold text-neutral-900">4th semester university student</strong> information systems major who is deeply interested in the field of <strong className="font-bold text-neutral-900">Artificial Intelligence and Backend Engineering</strong>.
          </p>

          <p className="mt-6 animate-in fade-in slide-in-from-right-4 duration-700 delay-200 fill-mode-both">
            My interest in these two areas comes from the way they train me to think. Both AI and backend systems constantly challenge me to <strong className="text-neutral-900 border-b-2 border-neutral-200 hover:border-neutral-900 transition-colors cursor-default">solve problems, analyze complex situations, and design solutions in a structured and architectural way</strong>. This mindset not only helps me when building software systems, but also influences how I approach problems in everyday life.
          </p>

          <p className="mt-6 animate-in fade-in slide-in-from-right-4 duration-700 delay-300 fill-mode-both">
            Another reason I am drawn to this field is the rapid growth of <strong className="text-neutral-900 border-b-2 border-neutral-200 hover:border-neutral-900 transition-colors cursor-default">Artificial Intelligence technology</strong>. Today, AI is increasingly capable of automating repetitive human tasks. Instead of seeing this as a threat, I see it as a strong motivation to improve myself and build systems that can work alongside intelligent machines rather than being replaced by them.
          </p>
        </div>
      </div>

      {/* 3. Detailed Sections */}
      <div className="space-y-16 mb-24 lg:pl-8 lg:border-l lg:border-neutral-100">
        
        {/* Learning Journey / Current Focus */}
        <section className="animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both group relative">
          <div className="absolute -left-10 w-4 h-4 rounded-full border-4 border-white bg-neutral-900 shadow-sm hidden lg:block group-hover:scale-125 transition-transform"></div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-6 flex items-center gap-2">
            Current Focus & Learning Journey
            <ArrowRight className="w-5 h-5 text-neutral-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </h2>
          <div className="prose prose-neutral prose-lg max-w-none text-neutral-600 leading-relaxed space-y-4">
            <p>
              Currently, my main focus is understanding <span className="text-neutral-900 bg-neutral-100 px-1 py-0.5 rounded">how AI actually works under the hood</span>. My learning journey started from classical machine learning concepts, and gradually moved into deep learning and modern AI architectures. Rather than only using AI tools at a surface level, I prefer to understand the underlying mechanisms so that I can design systems that use AI effectively.
            </p>
            <p>
              Because I enjoy designing systems, I began exploring how AI could be <span className="text-neutral-900 bg-neutral-100 px-1 py-0.5 rounded">integrated into real-world applications</span>. This curiosity led me to research different approaches, read technical articles, and experiment with various frameworks. Through that exploration, I discovered the Agentic AI ecosystem, including tools such as <strong className="font-semibold text-neutral-900">LangChain, LangGraph, CrewAI, and n8n</strong>. These tools allow me to design AI-driven workflows and multi-agent systems that interact with software infrastructure in a structured way.
            </p>
          </div>
        </section>

        {/* Projects / Systems Being Built */}
        <section className="animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-both group relative">
          <div className="absolute -left-10 w-4 h-4 rounded-full border-4 border-white bg-neutral-900 shadow-sm hidden lg:block group-hover:scale-125 transition-transform"></div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-6 flex items-center gap-2">
            Systems I'm Building
            <ArrowRight className="w-5 h-5 text-neutral-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </h2>
          <div className="prose prose-neutral prose-lg max-w-none text-neutral-600 leading-relaxed">
            <p className="mb-4">
              At the moment, I am actively developing an <strong className="font-semibold text-neutral-900">AI-powered system designed to help small businesses (UMKM)</strong>. The goal of this system is to provide an intelligent customer service assistant that can operate 24/7.
            </p>
            
            <div className="bg-neutral-50 rounded-2xl p-6 my-6 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">Core Architecture</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5"></div>
                  <span><strong className="text-neutral-900">Python</strong> for backend ecosystem</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5"></div>
                  <span><strong className="text-neutral-900">Agent architecture</strong> for reasoning</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5"></div>
                  <span><strong className="text-neutral-900">Next.js (BFF)</strong> for frontend integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5"></div>
                  <span><strong className="text-neutral-900">Human fallbacks</strong> for safety</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long-term Goals */}
        <section className="animate-in fade-in zoom-in-95 duration-1000 delay-700 fill-mode-both group relative">
          <div className="absolute -left-10 w-4 h-4 rounded-full border-4 border-white bg-neutral-900 shadow-sm hidden lg:block group-hover:scale-125 transition-transform"></div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-6 flex items-center gap-2">
            Long-Term Goals
            <ArrowRight className="w-5 h-5 text-neutral-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </h2>
          <div className="prose prose-neutral prose-lg max-w-none text-neutral-600 leading-relaxed">
            <p>
              Through these projects, I continue to explore how AI systems, backend architecture, and intelligent automation can be combined to build practical solutions that solve real problems.
            </p>
            <p className="mt-4 font-medium text-neutral-800 border-l-4 border-neutral-900 pl-4 py-1 italic">
              "To become an engineer who not only builds applications, but also designs intelligent systems that can think, reason, and assist humans in meaningful ways."
            </p>
          </div>
        </section>

      </div>

      {/* 4. Tech Stack Section */}
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <header className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-4 inline-flex items-center gap-3">
            Tech Stack 
            <Sparkles className="w-6 h-6 text-neutral-400 animate-pulse" />
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl">
            The main technologies, tools, and domains that I work with.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: AI & ML */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">AI & ML</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Classical ML', 'Data Preprocessing', 'Model Training', 'Neural Networks', 'Transformer', 'TensorFlow', 'PyTorch', 'NumPy'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full cursor-default hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Generative AI & LLMs */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Generative AI</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Prompt Engineering', 'RAG Concepts', 'Agentic Workflows', 'LangChain', 'LangGraph', 'CrewAI', 'OpenAI API'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full cursor-default hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Backend Engineering */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Backend System</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Node.js', 'FastAPI', 'Flask', 'Express.js', 'REST API', 'BFF Architecture', 'SOA'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full cursor-default hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: AI Infrastructure & Automation */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Automation</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['n8n Workflows', 'AI Orchestration', 'API Integration', 'Tool Agents', 'Reasoning Pipelines'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full cursor-default hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: Web & Frontend */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <MonitorDot className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Web & Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'JavaScript', 'REST Integration', 'Responsive UI'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full cursor-default hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 6: Design Interests */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-neutral-100 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['AI Architecture', 'Multi-Agent', 'Decision Systems', 'Intelligent Automation'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full cursor-default hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
