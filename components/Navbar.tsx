"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo + Brand Name - Perfectly Aligned */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group relative">
            {/* Logo Container - Fixed size prevents shifting */}
            <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0 bg-white/10 rounded-md overflow-hidden">
              <Image
                src="/favicon.ico"
                alt="Destiny Angels Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>

            {/* Text Stack - Vertically Centered */}
            <div className="flex flex-col justify-center leading-tight">
              <span className={`font-heading font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? "text-blue-900" : "text-white drop-shadow-md"
              }`}>
                Destiny Angels
              </span>
              <span className={`text-xs md:text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                scrolled ? "text-blue-700" : "text-blue-100 drop-shadow-sm"
              }`}>
                Learning Centre
              </span>
            </div>

            {/* Motto Tooltip (Desktop Only) */}
            <span className="hidden md:block absolute top-full left-0 mt-3 px-3 py-1.5 rounded-md text-[10px] font-semibold bg-blue-900/90 text-peach-300 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg z-50 backdrop-blur-sm">
              "Early skills for better future"
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-peach-300 text-blue-900 hover:bg-blue-700 hover:text-white"
                  : "bg-white text-blue-900 hover:bg-peach-300"
              }`}
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-blue-900 hover:bg-blue-50" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 px-4 py-3 rounded-lg bg-peach-300 text-blue-900 font-semibold text-center hover:bg-blue-700 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}