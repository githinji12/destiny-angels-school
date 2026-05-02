"use client";
import { motion } from "framer-motion";
import { Shield, GraduationCap, Sparkles, BookOpen, Users, HeartHandshake, LifeBuoy, Calculator, Target, Eye, MapPin, Phone, Mail } from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  Shield, GraduationCap, Sparkles, BookOpen, Users, HeartHandshake,
  LifeBuoy, Calculator, Target, Eye, MapPin, Phone, Mail
};

export function FeatureCard({ iconName, title, desc, index }: { iconName: string; title: string; desc: string; index: number }) {
  const Icon = ICONS[iconName] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-t-4 border-peach-300"
    >
      <div className="w-14 h-14 bg-peach-100 rounded-full flex items-center justify-center mb-4 text-peach-500">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}