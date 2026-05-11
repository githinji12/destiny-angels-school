"use client";

import { motion, useScroll, useTransform, type Variants, type Transition } from "framer-motion";
import { HeroSlider } from "@/components/HeroSlider";
import { FeatureCard } from "@/components/FeatureCard";
import { ProgramCard } from "@/components/ProgramCard";
import { WaveDivider } from "@/components/WaveDivider";
import { StatsCounter } from "@/components/StatsCounter";
import { TestimonialBar } from "@/components/Testimonials";
import { FloatingContact } from "@/components/FloatingContact";
import { MapPin, ArrowRight, Heart, Sparkles, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// 🎬 Animation Variants - Fixed TypeScript typing
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

// Fixed: Use proper easing type for image hover
const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.4, ease: "easeOut" as const } 
  },
} as const satisfies Variants;

// 🖼️ Gallery Preview Images
const galleryPreview = [
  { src: "/images/learners.jpg", alt: "Engaged learners" },
  { src: "/images/happy-students.jpg", alt: "Happy students" },
  { src: "/images/one-with-the-teacher.jpg", alt: "Teacher guidance" },
  { src: "/images/graduation-day.jpg", alt: "Graduation ceremony" },
  { src: "/images/students-gathering.jpg", alt: "Student assembly" },
  { src: "/images/community-support.jpg", alt: "Community support" },
];

// 📍 Branch Data
const branches = [
  { name: "Huruma (Main)", location: "Kiamaiko, Mathare", icon: MapPin },
  { name: "Mwihoko", location: "Nairobi", icon: MapPin },
  { name: "Kariobangi South", location: "Nairobi", icon: MapPin },
  { name: "Githurai 44", location: "Nairobi", icon: MapPin },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background-light overflow-x-hidden">
      {/* Floating Contact - Always Accessible */}
      <FloatingContact />

      {/* 🎬 Hero Section with Parallax */}
      <motion.section style={{ opacity: heroOpacity }} className="relative">
        <HeroSlider />
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-white/80 text-sm font-medium">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
            className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 📊 Stats Counter - Overlapping Hero */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-30 -mt-16 md:-mt-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <StatsCounter />
        </div>
      </motion.div>

      {/* ✨ Why Choose Us - Premium Layout */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="py-20 md:py-28 px-4 relative overflow-hidden"
      >
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-peach-50/30 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-peach-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Where Every Child&apos;s Destiny Shines
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide a nurturing, structured, and empowering environment where every child&apos;s 
              potential is recognized, celebrated, and cultivated for a brighter future.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                iconName: "Shield",
                title: "Safe & Supportive Environment",
                desc: "A secure space where learners feel valued, protected, and encouraged to thrive emotionally and academically.",
                gradient: "from-blue-500 to-blue-700",
              },
              {
                iconName: "GraduationCap",
                title: "Dedicated Educators",
                desc: "Passionate teachers committed to personalized attention, academic excellence, and holistic child development.",
                gradient: "from-peach-400 to-peach-600",
              },
              {
                iconName: "Sparkles",
                title: "Life Skills & Character",
                desc: "Practical training in resilience, communication, leadership, and community responsibility for real-world success.",
                gradient: "from-blue-600 to-peach-400",
              },
            ].map((feature, i) => (
              <motion.div key={i} variants={cardVariants}>
                <FeatureCard {...feature} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <WaveDivider className="-mt-px" />

      {/* 📚 Programs Section - Modern Cards */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-white relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-blue-200 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-peach-100 text-peach-800 rounded-full text-sm font-medium mb-4">
              <GraduationCap size={16} />
              Our Programs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Learning Pathways for Every Stage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive, CBC-aligned education from early childhood through secondary, 
              designed to nurture academic excellence and character development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                title: "Pre-Primary",
                desc: "Play-based learning that builds curiosity, motor skills, foundational literacy, and social confidence.",
                iconName: "BookOpen",
                href: "/programs#pre-primary",
                gradient: "from-blue-400 to-blue-600",
              },
              {
                title: "Primary",
                desc: "Strong academic grounding with emphasis on numeracy, literacy, critical thinking, and creative expression.",
                iconName: "Users",
                href: "/programs#primary",
                gradient: "from-peach-400 to-orange-500",
              },
              {
                title: "Junior & Secondary",
                desc: "CBC-aligned curriculum preparing students for national assessments, careers, and lifelong learning.",
                iconName: "GraduationCap",
                href: "/programs#secondary",
                gradient: "from-blue-600 to-peach-400",
              },
            ].map((program, i) => (
              <motion.div key={i} variants={cardVariants}>
                <ProgramCard {...program} index={i} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              View All Programs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 🗺️ Branches Section - Premium Location Cards */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-linear-to-br from-blue-50 via-white to-peach-50 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-peach-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <MapPin size={16} />
              Our Locations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Find Us Across Nairobi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Quality education accessible in multiple communities. Visit the branch nearest to you 
              and experience the Destiny Angels difference.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {branches.map((branch, i) => {
              const Icon = branch.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-blue-100 hover:border-peach-300 hover:shadow-lg transition-all duration-300"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-peach-300/0 via-peach-300/10 to-blue-300/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-blue-400/30 transition-shadow"
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="font-bold text-blue-900 text-lg mb-1">{branch.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{branch.location}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-peach-600 transition-colors group/link"
                    >
                      Visit Branch
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Map CTA */}
          <motion.div
            variants={sectionVariants}
            className="text-center mt-12"
          >
            <Link
              href="/contact#map"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-blue-50 text-blue-900 font-medium rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MapPin size={18} />
              View All Locations on Map
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 💙 Community Section - Emotional Storytelling */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-white relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image with Hover Effect */}
            <motion.div
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-linear-to-br from-peach-300/20 to-blue-300/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <motion.div
                variants={imageHoverVariants}
                initial="rest"
                whileHover="hover"
                className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src="/images/community-support.jpg"
                  alt="Destiny Angels community engagement and support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent" />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 bg-white px-4 py-3 rounded-xl shadow-lg border border-blue-100"
              >
                <div className="flex items-center gap-2">
                  <Heart className="text-peach-500" size={20} fill="currentColor" />
                  <span className="text-sm font-semibold text-blue-900">Community First</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
              <motion.span
                variants={cardVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-peach-100 text-peach-800 rounded-full text-sm font-medium mb-4"
              >
                <Users size={16} />
                Our Community
              </motion.span>
              
              <motion.h2
                variants={cardVariants}
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
              >
                Education Rooted in Hope & Dignity
              </motion.h2>
              
              <motion.p
                variants={cardVariants}
                className="text-gray-600 mb-6 leading-relaxed text-lg"
              >
                Located in the heart of Huruma, we serve families from humble backgrounds with 
                unwavering dignity and hope. Every resource, every lesson, every interaction is 
                directed toward creating equal opportunities for academic excellence and personal growth.
              </motion.p>
              
              <motion.p
                variants={cardVariants}
                className="text-gray-600 mb-8 leading-relaxed"
              >
                We believe that every child, regardless of circumstance, deserves access to quality 
                education that nurtures both mind and character. Together, we&apos;re building a 
                community where potential becomes possibility.
              </motion.p>
              
              <motion.div variants={cardVariants}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-peach-600 transition-colors group"
                >
                  Read Our Story
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 🖼️ Gallery Preview Section (NEW) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-linear-to-br from-blue-50 via-white to-peach-50 relative overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-peach-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Moments of Joy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Glimpses of Life at Destiny Angels
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every smile, every lesson, every celebration tells the story of a community 
              growing together. Explore more moments from our gallery.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12"
          >
            {galleryPreview.map((img, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`relative aspect-square rounded-2xl overflow-hidden shadow-card group cursor-pointer ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <motion.div
                  variants={imageHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="absolute inset-0"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 33vw"}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </motion.div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/70 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium drop-shadow-md">{img.alt}</p>
                </div>
                
                {/* Peach Border on Hover */}
                <div className="absolute inset-0 border-2 border-peach-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* View Gallery CTA */}
          <motion.div
            variants={sectionVariants}
            className="text-center"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-peach-50 text-blue-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-blue-100 hover:border-peach-300 group"
            >
              View Full Gallery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 💬 Testimonial Bar - Social Proof */}
      <TestimonialBar />

      {/* 🎯 Premium CTA Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 relative overflow-hidden"
      >
        {/* Gradient Background with Glow - Fixed Tailwind v4 syntax */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-peach-400/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-peach-300/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
          >
            <motion.span
              variants={cardVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-peach-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Heart size={16} className="text-peach-300" />
              Join Our Family
            </motion.span>
            
            <motion.h2
              variants={cardVariants}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Shape a Brighter Future?
            </motion.h2>
            
            <motion.p
              variants={cardVariants}
              className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Enrollment is open. Join a community that believes in every child&apos;s destiny. 
              Let&apos;s build tomorrow&apos;s leaders, together.
            </motion.p>
            
            <motion.div variants={cardVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-peach-300 hover:bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-peach-300/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                Enroll Your Child
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Wave Divider */}
      <WaveDivider className="rotate-180" />
    </div>
  );
}