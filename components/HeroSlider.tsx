"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { img: "/images/students-class.jpg", text: "Empowering Young Minds Through Education and Life Skills" },
  { img: "/images/outside-learning.jpg", text: "Nurturing Potential in Huruma & Beyond" },
  { img: "/images/hands-on-learning.jpg", text: "Where Every Child's Destiny is Angels" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-16 md:pt-20 h-[70vh] md:h-[80vh] overflow-hidden bg-blue-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].img}
            alt={slides[current].text}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
          
          {/* Darker overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-900/50 to-transparent" />
          
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <motion.div
              key={current + "content"}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Main Heading - Pure White with Strong Shadow */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                {slides[current].text}
              </h1>
              
              {/* Subtext - Light Blue with Shadow */}
              <p className="text-base sm:text-lg md:text-xl text-blue-50 mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Serving the Huruma community with hope, care, and opportunity for learners from all backgrounds.
              </p>
              
              {/* Motto - Peach Color with Shadow */}
              <p className="text-sm sm:text-base md:text-lg text-peach-300 italic font-semibold mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                "Early skills for better future"
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-peach-300 hover:bg-white text-blue-900 font-bold px-8 py-3.5 rounded-lg shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(253,186,116,0.4)]"
                  aria-label="Enroll a child at Destiny Angels"
                >
                  Enroll a Child
                </a>
                <a 
                  href="/contact" 
                  className="bg-white/20 hover:bg-white/40 text-white font-semibold px-8 py-3.5 rounded-lg backdrop-blur-sm border-2 border-white/50 hover:border-white transition-all duration-300 hover:-translate-y-1 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
                  aria-label="Contact Destiny Angels Learning Centre"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}