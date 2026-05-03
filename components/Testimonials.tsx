"use client";

import { useState, useEffect } from "react";
import { Quote, X } from "lucide-react";

const testimonials = [
  {
    name: "Jane Wanjiru",
    role: "Parent, Grade 3",
    text: "Destiny Angels transformed my child's confidence. The teachers truly care!",
    avatar: "👩‍👧"
  },
  {
    name: "Peter Kamau",
    role: "Alumni, Class of 2022",
    text: "The life skills I learned here prepared me for secondary school and beyond.",
    avatar: "👨‍🎓"
  },
  {
    name: "Sarah Muthoni",
    role: "Community Leader",
    text: "A beacon of hope in Huruma. They invest in every child's destiny.",
    avatar: "🤝"
  },
];

export function TestimonialBar() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const current = testimonials[idx];

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient from-blue-900 to-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5">
          
          {/* Testimonial Content */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-2xl shrink-0">{current.avatar}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <Quote size={14} className="text-peach-300 shrink-0" />
                <p className="text-sm font-medium truncate">
                  "{current.text}"
                </p>
              </div>
              <p className="text-xs text-blue-200">
                — {current.name}, {current.role}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Dots Indicator */}
            <div className="hidden sm:flex gap-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === idx ? "bg-peach-300 w-4" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setVisible(false)}
              className="p-1 hover:bg-white/10 rounded-full transition"
              aria-label="Dismiss testimonial bar"
            >
              <X size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}