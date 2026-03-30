"use client";

import { runAgentAction } from "@/ai/agent";
import { Bot, Loader2, MessageCircle, Send, User, X } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");

  const pathname = usePathname();
  const params = useParams();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    // --- NEW RATE LIMIT / TOGGLE LOGIC ---
    const isEnabled = process.env.NEXT_PUBLIC_ENABLE_AI !== "false";
    const maxResponses = parseInt(process.env.NEXT_PUBLIC_MAX_RESPONSE || "5", 10);

    if (!isEnabled) {
      setMessages((prev) => [...prev, { role: "user", content: userMessage }, { role: "ai", content: "maaf untuk sekarang agent sedang beristirahat:)" }]);
      return;
    }

    // Check rate limit using localStorage
    const now = Date.now();
    const storageKey = "chatbot_usage_timestamps";
    let timestamps: number[] = [];
    try {
      timestamps = JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch (err) {
      // ignore parse err
    }

    // Filter out timestamps older than 1 hour (3600000 ms)
    timestamps = timestamps.filter(ts => now - ts < 3600000);

    if (timestamps.length >= maxResponses) {
      setMessages((prev) => [...prev, { role: "user", content: userMessage }, { role: "ai", content: "maaf untuk sekarang agent sedang beristirahat:)" }]);
      return;
    }

    // Save current timestamp
    timestamps.push(now);
    localStorage.setItem(storageKey, JSON.stringify(timestamps));
    // --- END NEW LOGIC ---

    // Add user message to UI immediately
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    setStreamingMessage("");

    // Determine current page and topic
    const currentPage = pathname;
    const currentSlug = params?.slug as string | undefined;

    // Topic logic: If there's a slug, use it. Otherwise, fallback to "about".
    // This handles /project/[slug], /notes/[slug], /architecture/[slug] vs / or /about or /contact
    const currentTopic = currentSlug || "about";

    try {
      // Call the server action directly (backend invocation)
      const aiResponse = await runAgentAction(userMessage, currentPage, currentTopic);

      // Simulate streaming the response character by character for improved UX
      await simulateStream(aiResponse);

    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [...prev, { role: "ai", content: "Sorry, I encountered an error processing your request." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateStream = async (fullText: string) => {
    let currentText = "";

    // Simulate streaming by adding a few characters at a time with a delay
    for (let i = 0; i < fullText.length; i += 3) {
      currentText += fullText.substring(i, i + 3);
      setStreamingMessage(currentText);
      // Adaptive delay based on punctuation
      const delay = /[.,!?]/.test(fullText[i]) ? 50 : 15;
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Finalize the message block
    setStreamingMessage("");
    setMessages((prev) => [...prev, { role: "ai", content: fullText }]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${isOpen ? "bg-neutral-800 text-white" : "bg-neutral-900 text-white hover:bg-neutral-800"
            }`}
          aria-label="Toggle Chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-white border border-neutral-200 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">

          {/* Header */}
          <div className="bg-neutral-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Portfolio Assistant</h3>
                <p className="text-xs text-neutral-300">Ask anything about me</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-neutral-50/50">
            {messages.length === 0 && (
              <div className="text-center text-neutral-500 text-sm mt-8 space-y-4">
                <p>Hello! I'm an AI assistant trained on this portfolio.</p>
                <div className="flex flex-col gap-2 mx-8">
                  <button onClick={() => setInput("Kamu semester berapa?")} className="bg-white border text-left px-3 py-2 rounded border-neutral-200 hover:border-neutral-900 transition-colors text-xs">
                    "Kamu semester berapa?"
                  </button>
                  <button onClick={() => setInput("Kuliah dimana?")} className="bg-white border text-left px-3 py-2 rounded border-neutral-200 hover:border-neutral-900 transition-colors text-xs">
                    "Kuliah dimana?"
                  </button>
                  <button onClick={() => setInput("IPK lu berapa?")} className="bg-white border text-left px-3 py-2 rounded border-neutral-200 hover:border-neutral-900 transition-colors text-xs">
                    "IPK lu berapa?"
                  </button>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
                {msg.role === "ai" && (
                  <div className="bg-neutral-200 p-1.5 rounded-full shrink-0 mb-1">
                    <Bot className="w-4 h-4 text-neutral-700" />
                  </div>
                )}

                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${msg.role === "user"
                  ? "bg-neutral-900 text-white rounded-br-none"
                  : "bg-white border border-neutral-200 text-neutral-800 rounded-bl-none prose prose-sm prose-p:leading-snug prose-a:text-blue-600 max-w-[85%]"
                  }`}>
                  {msg.role === "user" ? (
                    msg.content
                  ) : (
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  )}
                </div>

                {msg.role === "user" && (
                  <div className="bg-neutral-900 p-1.5 rounded-full shrink-0 mb-1">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Streaming UI showing partial message */}
            {isLoading && streamingMessage && (
              <div className="flex justify-start items-end gap-2">
                <div className="bg-neutral-200 p-1.5 rounded-full shrink-0 mb-1">
                  <Bot className="w-4 h-4 text-neutral-700" />
                </div>
                <div className="max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm bg-white border border-neutral-200 text-neutral-800 rounded-bl-none prose prose-sm prose-p:leading-snug prose-a:text-blue-600">
                  <ReactMarkdown>{streamingMessage}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* Loading Indicator when awaiting backend response (before stream begins) */}
            {isLoading && !streamingMessage && (
              <div className="flex justify-start items-center gap-2 text-neutral-500 text-xs ml-8">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-neutral-200">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-neutral-100 text-neutral-900 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/20 transition-all border border-transparent focus:border-neutral-300"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 disabled:bg-neutral-300 disabled:text-neutral-500 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
