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
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-blue-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
          />
          
          {/* ✅ LIGHTER OVERLAY: Reduced from /80 & /40 to /50 & /15 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-900/15" />
          
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <motion.div
              key={current + "content"}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl"
            >
              {/* Added drop-shadow-lg for crisp text over lighter backgrounds */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {slides[current].text}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-2 drop-shadow-md">
                Serving the Huruma community with hope, care, and opportunity for learners from all backgrounds.
              </p>
              <p className="text-sm md:text-base text-peach-200 italic font-medium mb-8 drop-shadow-md">
                "Early skills for better future"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-peach-300 hover:bg-white text-blue-900 font-bold px-6 py-3 rounded-lg shadow-soft transition-all duration-300 hover:-translate-y-1 drop-shadow-md">
                  Enroll a Child
                </a>
                <a href="/contact" className="bg-white/20 hover:bg-white/40 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300 hover:-translate-y-1">
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