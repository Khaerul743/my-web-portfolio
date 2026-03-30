"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Architecture", href: "/architecture" },
  { name: "Notes", href: "/notes" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm"
        : "bg-white"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 font-bold text-xl tracking-tight text-neutral-900">
            <Link href="/">Khaerul Lutfi</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              // Exact match for Home (/) to avoid highlighting on all routes
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${isActive
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-900"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated Hamburger Icon */}
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                    }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${isMobileMenuOpen ? "max-h-[400px] opacity-100 border-t border-neutral-100 shadow-lg" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 transform ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  } ${isActive
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  }`}
                style={{ transitionDelay: `${isMobileMenuOpen ? index * 50 : 0}ms` }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
