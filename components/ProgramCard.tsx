"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Users, GraduationCap, LifeBuoy, Shield, Sparkles } from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  BookOpen, Calculator, Users, GraduationCap, LifeBuoy, Shield, Sparkles
};

export function ProgramCard({ title, desc, iconName, index, href }: { title: string; desc: string; iconName: string; index: number; href: string }) {
  const Icon = ICONS[iconName] || BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl overflow-hidden shadow-card group border border-blue-100"
    >
      <div className="h-2 bg-blue-900" />
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-700">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{desc}</p>
        <Link href={href} className="text-blue-700 hover:text-peach-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more →
        </Link>
      </div>
    </motion.div>
  );
}