"use client";

import { motion, type Variants } from "framer-motion";
import { ProgramCard } from "@/components/ProgramCard";
import { WaveDivider } from "@/components/WaveDivider";
import { 
  BookOpen, Calculator, Users, GraduationCap, LifeBuoy, Heart, HeartHandshake,
  Sparkles, Target, Eye, Shield, ArrowRight, MapPin, CheckCircle, Star,
  ChevronDown, Image as ImageIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

// 🔧 Type-safe icon renderer - defined OUTSIDE component
function renderIcon(iconName: string, className: string = "", size: number = 22) {
  switch (iconName) {
    case "BookOpen": return <BookOpen className={className} size={size} />;
    case "Calculator": return <Calculator className={className} size={size} />;
    case "Users": return <Users className={className} size={size} />;
    case "GraduationCap": return <GraduationCap className={className} size={size} />;
    case "LifeBuoy": return <LifeBuoy className={className} size={size} />;
    case "Heart": return <Heart className={className} size={size} />;
    case "HeartHandshake": return <HeartHandshake className={className} size={size} />;
    case "Target": return <Target className={className} size={size} />;
    case "Eye": return <Eye className={className} size={size} />;
    case "CheckCircle": return <CheckCircle className={className} size={size} />;
    default: return <BookOpen className={className} size={size} />;
  }
}

// 📚 Program Data with Details
const programs = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    iconName: "BookOpen",
    gradient: "from-blue-400 to-blue-600",
    desc: "A gentle introduction to structured learning through play, storytelling, and creative exploration.",
    details: {
      age: "Ages 3–5",
      focus: ["Early literacy & numeracy", "Social-emotional development", "Motor skills & coordination", "Creative expression through art & music"],
      approach: "Play-based, child-centered learning in a nurturing environment",
      outcomes: "Confidence, curiosity, and foundational skills for lifelong learning",
    },
  },
  {
    id: "primary",
    title: "Primary School",
    iconName: "Calculator",
    gradient: "from-peach-400 to-orange-500",
    desc: "A strong academic foundation aligned with national curriculum standards.",
    details: {
      age: "Ages 6–13",
      focus: ["Core academics: English, Math, Science, Social Studies", "Critical thinking & problem-solving", "Digital literacy & technology integration", "Character development & values education"],
      approach: "CBC-aligned curriculum with hands-on, experiential learning",
      outcomes: "Academic excellence, moral grounding, and readiness for secondary education",
    },
  },
  {
    id: "junior",
    title: "Junior Secondary",
    iconName: "Users",
    gradient: "from-blue-600 to-peach-400",
    desc: "CBC-aligned pathways designed to help learners discover their strengths.",
    details: {
      age: "Ages 14–16",
      focus: ["Pathway selection: STEM, Arts, Business, Humanities", "Integrated project-based learning", "Career exploration & vocational exposure", "Leadership & community service"],
      approach: "Student-centered learning with personalized guidance and mentorship",
      outcomes: "Clear academic direction, practical skills, and confidence for senior secondary",
    },
  },
  {
    id: "secondary",
    title: "Senior Secondary",
    iconName: "GraduationCap",
    gradient: "from-blue-700 to-blue-900",
    desc: "Rigorous academic preparation for national examinations and post-secondary opportunities.",
    details: {
      age: "Ages 17–19",
      focus: ["Exam readiness: KCSE preparation", "University & career counseling", "Advanced subject mastery", "Research, presentation & life skills"],
      approach: "Academic rigor balanced with holistic development and future planning",
      outcomes: "Strong exam results, university placement, and readiness for adult life",
    },
  },
  {
    id: "life-skills",
    title: "Life Skills Education",
    iconName: "LifeBuoy",
    gradient: "from-peach-500 to-peach-700",
    desc: "Practical training in financial literacy, digital skills, communication, and more.",
    details: {
      age: "All ages (integrated across programs)",
      focus: ["Financial literacy & entrepreneurship", "Digital citizenship & tech skills", "Health, hygiene & wellness", "Communication, teamwork & conflict resolution"],
      approach: "Experiential learning through projects, role-play, and community engagement",
      outcomes: "Resilient, independent young adults ready for real-world challenges",
    },
  },
  {
    id: "special-needs",
    title: "Special Needs Education",
    iconName: "Heart",
    gradient: "from-blue-500 to-peach-400",
    desc: "Dedicated support for learners with diverse abilities in an inclusive environment.",
    details: {
      age: "All ages",
      focus: ["Individualized Education Plans (IEPs)", "Specialized teaching methods & resources", "Therapeutic support & accommodations", "Inclusive classroom integration"],
      approach: "Personalized, compassionate support that celebrates every learner's unique potential",
      outcomes: "Academic progress, social inclusion, and self-advocacy skills",
    },
  },
  {
    id: "counseling",
    title: "Counseling & Guidance",
    iconName: "HeartHandshake",
    gradient: "from-peach-400 to-blue-600",
    desc: "Professional counseling supporting emotional well-being and mental health.",
    details: {
      age: "All ages",
      focus: ["Emotional regulation & coping strategies", "Behavioral support & positive discipline", "Academic motivation & goal-setting", "Family engagement & parent guidance"],
      approach: "Confidential, trauma-informed care in a safe, non-judgmental space",
      outcomes: "Emotional resilience, improved behavior, and stronger student-teacher-family partnerships",
    },
  },
];

// 🎯 Learning Approach Points
const learningApproach = [
  {
    icon: Target,
    title: "CBC-Aligned Curriculum",
    desc: "We follow Kenya's Competency-Based Curriculum, focusing on skills, values, and real-world application—not just exams.",
  },
  {
    icon: HeartHandshake,
    title: "Holistic Development",
    desc: "Academics + character + life skills = well-rounded learners ready for life, not just tests.",
  },
  {
    icon: Users,
    title: "Student-Centered Teaching",
    desc: "Every lesson is designed around how children learn best: through curiosity, collaboration, and discovery.",
  },
  {
    icon: Sparkles,
    title: "Future-Ready Skills",
    desc: "Digital literacy, critical thinking, creativity, and communication prepare students for tomorrow's world.",
  },
];

// 💙 Why Parents Choose Us
const trustPoints = [
  { icon: Shield, title: "Safe & Nurturing", desc: "Secure environments where every child feels protected and valued" },
  { icon: Heart, title: "Caring Educators", desc: "Passionate teachers who mentor, encourage, and believe in every learner" },
  { icon: Target, title: "Personalized Support", desc: "Individual attention and tailored strategies for each child's needs" },
  { icon: Users, title: "Community-Centered", desc: "Rooted in Huruma, serving families with dignity, hope, and partnership" },
];

// 🖼️ Gallery Preview Images
const galleryPreview = [
  { src: "/images/learners.jpg", alt: "Engaged classroom learning" },
  { src: "/images/happy-students.jpg", alt: "Students celebrating achievement" },
  { src: "/images/one-with-the-teacher.jpg", alt: "Teacher guiding student" },
  { src: "/images/students-gathering.jpg", alt: "Group learning activity" },
];

// 📍 Branch Data
const branches = [
  { name: "Huruma (Main)", location: "Kiamaiko, Mathare", isMain: true },
  { name: "Mwihoko", location: "Nairobi", isMain: false },
  { name: "Kariobangi South", location: "Nairobi", isMain: false },
  { name: "Githurai 44", location: "Nairobi", isMain: false },
];

export default function ProgramsPage() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background-light overflow-x-hidden">
      {/* 🎬 Cinematic Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 md:py-32 px-4 overflow-hidden"
      >
        {/* Gradient Background with Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-peach-400/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-peach-300/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl pointer-events-none animate-pulse animation-delay-1000" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-peach-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <GraduationCap size={16} />
              Educational Pathways
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Every Learner for a{" "}
              <span className="text-peach-300">Brighter Tomorrow</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From Pre-Primary through Secondary, we offer holistic, CBC-aligned education that nurtures academic excellence, character, and life skills—preparing every child to thrive.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-white/70 text-sm">Explore Our Programs</span>
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

      {/* 📚 Program Cards - Premium Grid */}
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

        <div className="relative max-w-7xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <BookOpen size={16} />
              Our Educational Pathways
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Learning Journeys for Every Stage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From early childhood through secondary school, each program is designed to nurture academic excellence, character, and life skills—preparing learners for success in school and beyond.
            </p>
          </motion.div>

          {/* Program Grid - ✅ href prop added */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {programs.map((prog, i) => (
              <motion.div key={prog.id} variants={cardVariants}>
                <ProgramCard 
                  {...prog} 
                  index={i} 
                  href={`/programs#${prog.id}`} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 🔄 Learning Progression Visual */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 bg-white relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              A Continuous Journey of Growth
            </h3>
            <p className="text-gray-600">
              Our programs connect seamlessly, building skills and confidence at every stage.
            </p>
          </motion.div>

          {/* Progression Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-linear-to-r from-blue-200 via-peach-300 to-blue-200" />
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { label: "Pre-Primary", icon: BookOpen, color: "bg-blue-500" },
                { label: "Primary", icon: Calculator, color: "bg-peach-500" },
                { label: "Junior Secondary", icon: Users, color: "bg-blue-600" },
                { label: "Senior Secondary", icon: GraduationCap, color: "bg-blue-800" },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Step Circle */}
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg mb-3 group-hover:scale-110 transition-transform z-10`}>
                      <Icon size={24} />
                    </div>
                    <p className="text-sm font-medium text-blue-900">{step.label}</p>
                    {/* Mobile connecting line */}
                    {i < 3 && <div className="md:hidden w-0.5 h-8 bg-blue-200 my-2" />}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 📖 Program Detail Sections (Expandable) - ✅ Fixed icon rendering */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-linear-to-br from-blue-50 via-white to-peach-50 relative"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-peach-100 text-peach-800 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Program Details
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Explore What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any program below to learn more about our approach, focus areas, and expected outcomes.
            </p>
          </motion.div>

          {/* Expandable Program Details */}
          <motion.div variants={staggerContainer} className="space-y-4">
            {programs.map((prog) => {
              const isExpanded = expandedProgram === prog.id;
              
              return (
                <motion.div
                  key={prog.id}
                  variants={cardVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 overflow-hidden"
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => setExpandedProgram(isExpanded ? null : prog.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-blue-50/50 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-linear-to-br ${prog.gradient} rounded-xl flex items-center justify-center text-white shadow-md`}>
                        {renderIcon(prog.iconName)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-blue-900">{prog.title}</h3>
                        <p className="text-gray-600 text-sm hidden md:block">{prog.desc}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="text-blue-400" size={24} />
                    </motion.div>
                  </button>

                  {/* Details - Expandable */}
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 md:px-6 pb-6 pt-2 border-t border-blue-100"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                            {renderIcon("Target", "text-peach-500", 18)}
                            Learning Focus
                          </h4>
                          <ul className="space-y-2">
                            {prog.details.focus.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                                <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                            {renderIcon("Eye", "text-peach-500", 18)}
                            Approach & Outcomes
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Age Group</p>
                              <p className="text-gray-700">{prog.details.age}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Teaching Approach</p>
                              <p className="text-gray-700">{prog.details.approach}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Expected Outcomes</p>
                              <p className="text-gray-700">{prog.details.outcomes}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 🎯 Learning Approach Section */}
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
              <Star size={16} />
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Education That Prepares for Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We believe learning should be meaningful, engaging, and future-focused. Here's how we make it happen.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {learningApproach.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group relative bg-blue-50/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 hover:border-peach-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-linear-to-br from-blue-500/5 to-peach-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 text-white shadow-md">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 💙 Why Parents Choose Us */}
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-peach-100 text-peach-800 rounded-full text-sm font-medium mb-4">
              <Heart size={16} />
              Trusted by Families
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Why Parents Choose Destiny Angels
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don't just teach—we partner with families to nurture confident, capable, compassionate young people.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {trustPoints.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 text-center hover:border-peach-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 🖼️ Student Experience Gallery Preview */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-white relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <ImageIcon size={16} />
              Life at Destiny Angels
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Moments of Learning & Joy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See our learners in action—engaged, curious, and growing every day.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {galleryPreview.map((img, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-card group cursor-pointer"
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
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                  />
                </motion.div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-medium drop-shadow-md">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View Full Gallery CTA */}
          <motion.div variants={sectionVariants} className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View Full Gallery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 📍 Premium Branches Section */}
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-peach-100 text-peach-800 rounded-full text-sm font-medium mb-4">
              <MapPin size={16} />
              Visit Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Four Branches, One Mission
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Quality education accessible across Nairobi. Visit the branch nearest to you.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {branches.map((branch, i) => (
              <motion.a
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                href="/contact"
                className="group relative block bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card border border-blue-100 hover:border-peach-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Main Badge */}
                {branch.isMain && (
                  <span className="absolute -top-2 -right-2 px-2.5 py-1 bg-peach-300 text-blue-900 text-xs font-bold rounded-full shadow-sm">
                    Main
                  </span>
                )}
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-peach-300/0 via-peach-300/10 to-blue-300/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-blue-400/30 transition-shadow"
                  >
                    <MapPin size={24} />
                  </motion.div>
                  <h3 className="font-bold text-blue-900 text-lg mb-1">{branch.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{branch.location}</p>
                  <p className="text-blue-700 text-sm font-medium mb-4">
                     📞 {branch.name === "Githurai 44" ? "+254 722 260 879" : "+254 728 654 003"}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-peach-600 transition-colors">
                    Contact Branch
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 🎯 Premium Enrollment CTA */}
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
              <GraduationCap size={16} className="text-peach-300" />
              Enrollment Open
            </motion.span>

            <motion.h2
              variants={cardVariants}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Give Your Child the Foundation They Deserve
            </motion.h2>

            <motion.p
              variants={cardVariants}
              className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Every child has unique potential. Let us help yours discover it through quality education, character development, and life skills that last a lifetime.
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
                Schedule a Visit
              </Link>
            </motion.div>

            <motion.p
              variants={cardVariants}
              className="text-blue-200 text-sm mt-8"
            >
              Flexible payment plans • Scholarships for deserving learners • CBC-aligned curriculum
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Wave Divider */}
      <WaveDivider className="rotate-180" />
    </div>
  );
}