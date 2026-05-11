"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Pages that should ALWAYS have white navbar (no dark hero)
    const lightBgPages = ["/gallery"];
    const shouldAlwaysBeWhite = lightBgPages.includes(pathname);
    
    const handleScroll = () => {
      if (shouldAlwaysBeWhite) {
        setScrolled(true); // Always white on these pages
      } else {
        // For home and other pages with dark heroes
        const threshold = isHome ? 80 : 0;
        setScrolled(window.scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isHome]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`relative h-10 w-10 md:h-12 md:w-12 rounded-lg overflow-hidden ${
              scrolled ? "bg-blue-50" : "bg-white/10"
            }`}>
              <Image
                src="/favicon.ico"
                alt="Destiny Angels Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg md:text-xl ${
                scrolled ? "text-blue-900" : "text-white drop-shadow-md"
              }`}>
                Destiny Angels
              </span>
              <span className={`text-xs uppercase ${
                scrolled ? "text-blue-700" : "text-blue-100"
              }`}>
                Learning Centre
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    scrolled
                      ? isActive
                        ? "text-blue-900 font-semibold bg-blue-50"
                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                      : isActive
                      ? "text-white font-semibold bg-white/10"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Enroll Button */}
            <Link
              href="/contact"
              className={`ml-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-peach-300 text-blue-900 hover:bg-blue-700 hover:text-white"
                  : "bg-white text-blue-900 hover:bg-peach-300"
              }`}
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-blue-100 shadow-xl"
        >
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-900"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-3 bg-peach-300 text-blue-900 font-semibold text-center rounded-lg"
            >
              Enroll Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}