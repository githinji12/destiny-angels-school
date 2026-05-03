// components/StatsCounter.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({ target, label }: { target: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-900">{count}+</div>
      <div className="text-gray-600 text-sm mt-1">{label}</div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-12 bg-peach-50 border-y border-peach-200">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        <Counter target={500} label="Happy Learners" />
        <Counter target={15} label="Years of Service" />
        <Counter target={30} label="Dedicated Teachers" />
        <Counter target={95} label="% Transition Rate" />
      </div>
    </section>
  );
}