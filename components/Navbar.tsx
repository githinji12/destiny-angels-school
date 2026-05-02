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
        ? "bg-white/95 backdrop-blur-sm shadow-soft" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo + School Name with Motto Tooltip */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group relative">
            <Image
              src="/images/logo.png"
              alt="Destiny Angels Logo"
              width={140}
              height={140}
              className={`h-12 w-auto md:h-14 transition-all duration-300 ${
                scrolled ? "opacity-100" : "opacity-90 drop-shadow-md"
              }`}
              priority
            />
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-lg md:text-xl leading-tight transition-colors duration-300 ${
                scrolled ? "text-blue-900" : "text-white drop-shadow-sm"
              }`}>
                Destiny Angels<br />
                <span className="text-sm md:text-base font-medium opacity-90">Learning Centre</span>
              </span>
            </div>
            
            {/* 🎯 Motto Tooltip - Appears on Hover */}
            <span className={`absolute top-full left-0 mt-2 px-4 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg z-50 ${
              scrolled 
                ? "bg-blue-900 text-peach-300" 
                : "bg-white/95 text-blue-900 backdrop-blur-sm"
            }`}>
              "Early skills for better future"
              {/* Tooltip Arrow */}
              <span className={`absolute -top-1 left-6 w-2 h-2 transform rotate-45 ${
                scrolled ? "bg-blue-900" : "bg-white/95"
              }`} />
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-700 hover:text-blue-700" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className={`font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-soft ${
                scrolled 
                  ? "bg-peach-300 hover:bg-blue-700 text-blue-900" 
                  : "bg-white hover:bg-peach-300 text-blue-900"
              }`}
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-blue-900" : "text-white"
            }`} 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-4 py-4 space-y-3 shadow-lg border-t border-blue-100">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="block text-gray-800 hover:text-blue-700 font-medium py-2" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="block bg-peach-300 hover:bg-blue-700 text-blue-900 font-semibold px-4 py-2 rounded-lg text-center transition-all" 
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
}