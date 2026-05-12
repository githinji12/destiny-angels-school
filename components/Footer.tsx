"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { 
  MapPin, Phone, Mail, MessageCircle, 
  Link as LinkIcon, Camera, Video, Globe,
  ArrowRight, Heart, GraduationCap, Sparkles
} from "lucide-react";

// 🎬 Animation Variants - Type-safe
const footerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const iconHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.15, rotate: 5, transition: { duration: 0.2, ease: "easeOut" as const } },
} as const satisfies Variants;

// 📍 Branch Data
const branches = [
  { name: "Huruma (Main)", location: "Kiamaiko, Mathare", isMain: true },
  { name: "Mwihoko", location: "Nairobi", isMain: false },
  { name: "Kariobangi South", location: "Nairobi", isMain: false },
  { name: "Githurai 44", location: "Nairobi", isMain: false },
];

// 🔗 Quick Links
const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// 🌐 Social Media Links - Using generic lucide icons with accessible labels
const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/destinyangels", icon: Globe },
  { name: "Instagram", href: "https://instagram.com/destinyangels", icon: Camera },
  { name: "TikTok", href: "https://tiktok.com/@destinyangels", icon: Video },
  { name: "YouTube", href: "https://youtube.com/@destinyangels", icon: Video },
];

export function Footer() {
  return (
    <footer className="relative bg-blue-900 text-white overflow-hidden">
      
      {/* 🌊 Premium Animated Wave Transition */}
      <div className="absolute -top-16 md:-top-24 left-0 w-full z-20">
        <svg 
          viewBox="0 0 1440 200" 
          className="w-full h-20 md:h-32 drop-shadow-2xl"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Main Wave */}
          <motion.path 
            className="fill-blue-900" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,80C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64V200H1392C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200H0Z"
          />
          {/* Layer 2: Subtle Glow Wave */}
          <motion.path 
            className="fill-peach-300/10" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96V200H0Z"
          />
        </svg>
      </div>

      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-peach-400/10 via-transparent to-transparent pointer-events-none" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 bg-peach-300/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-20 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        
        <motion.div 
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          
          {/* Column 1: Brand & Motto - Enhanced */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-10 h-10 bg-linear-to-br from-peach-300 to-peach-400 rounded-xl flex items-center justify-center text-blue-900 shadow-lg"
              >
                <GraduationCap size={20} />
              </motion.div>
              <h4 className="text-xl font-bold text-white">Destiny Angels</h4>
            </div>
            
            {/* Premium Motto Block */}
            <motion.blockquote 
              whileHover={{ scale: 1.02 }}
              className="mb-5 p-4 bg-white/5 backdrop-blur-sm rounded-xl border-l-4 border-peach-300"
            >
              <p className="text-peach-200 italic font-medium text-sm leading-relaxed">
                "Early skills for better future"
              </p>
            </motion.blockquote>
            
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Empowering young minds through quality education, character development, and life skills across Nairobi.
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-xs text-blue-300">
              <Heart size={14} className="text-peach-300" fill="currentColor" />
              <span>Serving Huruma since 2009</span>
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links - Animated */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <Sparkles size={18} className="text-peach-300" />
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-blue-100 hover:text-peach-300 transition-colors py-1"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-peach-300 group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Column 3: Our Branches - Premium Cards */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <MapPin size={18} className="text-peach-300" />
              Our Branches
            </h4>
            <div className="space-y-3">
              {branches.map((branch, i) => (
                <motion.a
                  key={i}
                  href="/contact"
                  variants={itemVariants}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="group block p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-peach-300/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      variants={iconHoverVariants}
                      initial="rest"
                      whileHover="hover"
                      className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                    >
                      <MapPin size={14} />
                    </motion.div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-white text-sm truncate">{branch.name}</p>
                        {branch.isMain && (
                          <span className="px-1.5 py-0.5 bg-peach-300/20 text-peach-200 text-[10px] font-medium rounded-full">
                            Main
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-blue-300 truncate">{branch.location}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Contact + Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <MessageCircle size={18} className="text-peach-300" />
              Get in Touch
            </h4>
            
            {/* Contact Links */}
            <div className="space-y-4 mb-6">
              <motion.a
                href="tel:+254728654003"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 text-blue-100 hover:text-peach-300 transition-colors"
              >
                <motion.div variants={iconHoverVariants} initial="rest" whileHover="hover">
                  <Phone size={18} className="text-peach-300 shrink-0" />
                </motion.div>
                <span className="text-sm">+254 728 654 003</span>
                <span className="text-sm">+254 722 260 879</span>
              </motion.a>
              
              <motion.a
                href="mailto:info@destinyangels.co.ke"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 text-blue-100 hover:text-peach-300 transition-colors"
              >
                <motion.div variants={iconHoverVariants} initial="rest" whileHover="hover">
                  <Mail size={18} className="text-peach-300 shrink-0" />
                </motion.div>
                <span className="text-sm">info@destinyangels.co.ke</span>
              </motion.a>
              
                     <a
  href="https://wa.me/254728654003?text=Hello%20Destiny%20Angels%20Learning%20Centre,%20I%20would%20like%20to%20enquire%20about%20enrollment."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Destiny Angels on WhatsApp"
  className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-xl shadow-lg hover:shadow-green-400/40 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2"
>
  {/* WhatsApp Icon */}
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  <span>WhatsApp Us</span>
</a>
            </div>
            
            {/* Social Media Section - Using generic icons with accessible labels */}
                       <div>
             
            </div>
          </motion.div>
        </motion.div>

        {/* 🎯 Mini CTA Section - Before Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 p-6 bg-linear-to-br from-peach-500/10 to-blue-500/10 rounded-2xl border border-peach-300/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h5 className="text-lg font-bold text-white mb-1">Ready to Start Your Child's Journey?</h5>
              <p className="text-blue-200 text-sm">Enrollment is open. Join our community of hope and excellence.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-peach-300 hover:bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:shadow-peach-300/40 transition-all duration-300 hover:-translate-y-0.5 group whitespace-nowrap"
            >
              Enroll Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-6 text-center"
        >
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Destiny Angels Learning Centre. All rights reserved.
          </p>
        
        </motion.div>
      </div>
    </footer>
  );
}