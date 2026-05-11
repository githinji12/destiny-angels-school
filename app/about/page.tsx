"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { WaveDivider } from "@/components/WaveDivider";
import { Target, Eye, HeartHandshake, Sparkles, Users, GraduationCap, MapPin, TrendingUp, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// 🎬 Animation Variants - Type-safe
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

const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" as const } },
} as const satisfies Variants;

// 📊 Impact Stats Data
const impactStats = [
  { value: "500+", label: "Learners Impacted", icon: Users },
  { value: "15+", label: "Years of Service", icon: Calendar },
  { value: "4", label: "Branches Across Nairobi", icon: MapPin },
  { value: "95%", label: "Transition Rate to Secondary", icon: TrendingUp },
];

// 🗓️ Timeline Data
const timelineEvents = [
  {
    year: "2009",
    title: "Humble Beginnings",
    desc: "Started with 12 learners in a single room in Huruma, driven by a vision to serve children from humble backgrounds.",
    icon: Sparkles,
  },
  {
    year: "2012",
    title: "First Expansion",
    desc: "Expanded to include Primary education, adding dedicated classrooms and trained teachers.",
    icon: GraduationCap,
  },
  {
    year: "2018",
    title: "Community Growth",
    desc: "Launched life skills programs and community outreach, impacting families beyond the classroom.",
    icon: HeartHandshake,
  },
  {
    year: "2021",
    title: "Branch Expansion",
    desc: "Opened Mwihoko, Kariobangi South, and Githurai 44 branches to reach more children across Nairobi.",
    icon: MapPin,
  },
  {
    year: "2024+",
    title: "Vision for Tomorrow",
    desc: "Continuing to grow with CBC-aligned curriculum, technology integration, and deeper community partnerships.",
    icon: Target,
  },
];

// 💙 Mission/Vision/Values Data
const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To deliver inclusive, high-quality education and life skills that unlock every child's potential and foster community development.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A community where every child, regardless of background, has access to education that leads to dignity, opportunity, and lifelong success.",
    gradient: "from-peach-400 to-peach-600",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    desc: "Compassion, Excellence, Integrity, Community, and Hope guide every decision we make and every interaction we have.",
    gradient: "from-blue-600 to-peach-400",
  },
];

export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.9]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background-light overflow-x-hidden">
      {/* 🎬 Cinematic Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative py-24 md:py-32 px-4 overflow-hidden"
      >
        {/* Gradient Background with Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-peach-400/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-peach-300/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl pointer-events-none animate-pulse animation-delay-1000" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-peach-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <Sparkles size={16} />
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Inspiring Futures Through{" "}
              <span className="text-peach-300">Education, Hope & Community</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Rooted in Huruma, driven by purpose. We believe every child deserves the chance to shine.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-white/70 text-sm">Discover Our Journey</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
              className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1"
            >
              <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <WaveDivider className="-mt-px" />

      {/* 📖 Our Story Section - Enhanced */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="py-20 md:py-28 px-4 relative"
      >
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-peach-50/30 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-peach-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            variants={cardVariants}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-card border border-blue-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Destiny Angels Learning Centre was founded with a simple yet profound vision: 
                to provide quality, accessible education to children in Huruma, Kiamaiko, 
                regardless of their socioeconomic background. What began as a small initiative 
                with 12 learners in a single room has grown into a trusted institution serving 
                hundreds of students from Pre-Primary through Secondary school.
              </p>
              <p>
                We believe that education is the most powerful tool for empowerment. By combining 
                academic rigor with life skills and moral grounding, we prepare students not just 
                to pass exams, but to thrive as responsible, resilient, and compassionate members 
                of society.
              </p>
              <p>
                Every day, our dedicated teachers, supportive staff, and engaged community work 
                together to create an environment where every child feels seen, valued, and 
                empowered to reach their full potential.
              </p>
            </div>

            {/* Premium Motto Block */}
            <motion.div
              variants={cardVariants}
              className="mt-8 p-6 bg-linear-to-br from-peach-50 to-blue-50 rounded-2xl border-l-4 border-peach-300 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <Sparkles className="text-peach-500 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-blue-900 italic font-semibold text-lg">
                    "Early skills for better future"
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    This motto guides everything we do — from classroom lessons to life skills 
                    training, from teacher development to community partnerships.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 🎯 Mission / Vision / Values - Premium Cards */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-white relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Target size={16} />
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Guided by Purpose, Driven by Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every decision, every lesson, every interaction is rooted in our core mission 
              and values.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-card border border-blue-100 hover:border-peach-300 hover:shadow-lg transition-all duration-300"
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-linear-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className={`w-14 h-14 bg-linear-to-br ${pillar.gradient} rounded-xl flex items-center justify-center mb-5 text-white shadow-lg`}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 🖼️ Staff/Community Image Section - Upgraded */}
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image with Hover Effect */}
            <motion.div variants={cardVariants} className="relative group">
              <div className="absolute -inset-4 bg-linear-to-br from-peach-300/20 to-blue-300/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <motion.div
                variants={imageHoverVariants}
                initial="rest"
                whileHover="hover"
                className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src="/images/staffs.jpg"
                  alt="Our dedicated teaching staff at Destiny Angels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/30 to-transparent" />
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
                  <Users className="text-peach-500" size={20} fill="currentColor" />
                  <span className="text-sm font-semibold text-blue-900">Dedicated Team</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
              <motion.span variants={cardVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-peach-100 text-peach-800 rounded-full text-sm font-medium mb-4">
                <HeartHandshake size={16} />
                Our People
              </motion.span>
              <motion.h2 variants={cardVariants} className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Passionate Educators, Empowered Learners
              </motion.h2>
              <motion.p variants={cardVariants} className="text-gray-600 mb-6 leading-relaxed text-lg">
                Our teachers are more than instructors—they are mentors, guides, and champions 
                for every child. Many come from the communities we serve, bringing deep 
                understanding and genuine care to their work.
              </motion.p>
              <motion.p variants={cardVariants} className="text-gray-600 mb-8 leading-relaxed">
                We invest in continuous professional development, collaborative planning, and 
                a supportive work environment because we believe that empowered teachers create 
                empowered learners.
              </motion.p>
              <motion.div variants={cardVariants}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-peach-600 transition-colors group"
                >
                  Meet Our Team
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 🗓️ School Journey Timeline (NEW) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-white relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Calendar size={16} />
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Growing Roots, Expanding Hope
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From a single room in Huruma to four branches across Nairobi—our journey reflects 
              the growing trust of our community and the expanding impact of our mission.
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-300 via-peach-300 to-blue-300" />

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="space-y-12">
              {timelineEvents.map((event, i) => {
                const Icon = event.icon;
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className={`relative flex items-center gap-6 md:gap-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-peach-300 rounded-full border-4 border-white shadow-lg z-10" />

                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 hover:border-peach-300 hover:shadow-md transition-all duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                          <span className="px-3 py-1 bg-blue-900 text-white text-sm font-bold rounded-full">
                            {event.year}
                          </span>
                          <Icon className="text-peach-500" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-blue-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 📊 Impact Stats Section (NEW) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-peach-400/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-peach-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-peach-200 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              <TrendingUp size={16} />
              Our Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transforming Lives, One Child at a Time
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Every number represents a story of hope, growth, and possibility.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {impactStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-peach-300/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-peach-300/20 rounded-xl flex items-center justify-center text-peach-300 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 💙 Community & Values Storytelling */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-background-light relative"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-peach-100 text-peach-800 rounded-full text-sm font-medium mb-4">
              <HeartHandshake size={16} />
              Our Community
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Education Rooted in Hope & Dignity
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-8">
            {[
              {
                title: "Supporting Children from Humble Backgrounds",
                desc: "We believe that a child's circumstances should never limit their potential. Through flexible fee structures, scholarship programs, and community partnerships, we ensure that every learner has access to quality education regardless of their family's financial situation.",
                icon: HeartHandshake,
              },
              {
                title: "Empowering the Local Community",
                desc: "Education transforms not just individuals, but entire communities. We actively engage parents, local leaders, and organizations to create a supportive ecosystem where children can thrive both in and out of the classroom.",
                icon: Users,
              },
              {
                title: "Building Hope for Future Generations",
                desc: "Every graduate of Destiny Angels carries forward the values of compassion, excellence, and service. They become teachers, entrepreneurs, healthcare workers, and leaders who lift up their communities—creating a ripple effect of positive change.",
                icon: Sparkles,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-card border border-blue-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 💬 Leadership Message - Premium Quote */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-white relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={cardVariants}
            className="bg-linear-to-br from-peach-50 to-blue-50 p-8 md:p-12 rounded-3xl border border-peach-200 shadow-card text-center relative overflow-hidden"
          >
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 left-6 text-peach-300/30">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10">
              <p className="text-gray-700 italic text-lg md:text-xl leading-relaxed mb-6">
                "At Destiny Angels Learning Centre, we don't just teach subjects—we nurture 
                destinies. Every child who walks through our gates carries the promise of 
                tomorrow, and it is our honor to walk beside them, believing in their potential 
                even when they doubt themselves."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                  DA
                </div>
                <div className="text-left">
                  <p className="text-blue-900 font-semibold">The School Leadership Team</p>
                  <p className="text-gray-600 text-sm">Destiny Angels Learning Centre</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 🎯 Premium CTA Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 relative overflow-hidden"
      >
        {/* Gradient Background with Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-peach-400/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-peach-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
            <motion.span
              variants={cardVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-peach-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20"
            >
              <HeartHandshake size={16} className="text-peach-300" />
              Join Our Mission
            </motion.span>

            <motion.h2
              variants={cardVariants}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Help Shape a Brighter Future
            </motion.h2>

            <motion.p
              variants={cardVariants}
              className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Whether you're a parent seeking quality education for your child, a donor wanting 
              to make an impact, or a partner interested in community development—there's a 
              place for you in our story.
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                Partner With Us
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
