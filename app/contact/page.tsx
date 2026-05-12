"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Send, CheckCircle, AlertCircle, Loader2, Heart, Shield, Users, GraduationCap } from "lucide-react";
import { WaveDivider } from "@/components/WaveDivider";
import { GoogleMaps } from "@/components/GoogleMaps";
import { useState } from "react";
import Link from "next/link"; 


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

const iconHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.2, ease: "easeOut" as const } },
} as const satisfies Variants;

// 📍 Branch Data
const branches = [
  {
    name: "Huruma (Main)",
    address: "Kiamaiko, Mathare Sub-County, Nairobi",
    phone: "+254 728 654 003",
    icon: MapPin,
    isMain: true,
  },
  {
    name: "Mwihoko",
    address: "Mwihoko, Nairobi",
    phone: "+254 728 654 003",
    icon: MapPin,
  },
  {
    name: "Kariobangi South",
    address: "Kariobangi South, Nairobi",
    phone: "+254 728 654 003",
    icon: MapPin,
  },
  {
    name: "Githurai 44",
    address: "Githurai 44, Nairobi",
    phone: "+254 722 260 879",
    icon: MapPin,
  },
];

// 💙 Trust Points
const trustPoints = [
  { icon: Shield, title: "Safe Environment", desc: "Secure, nurturing spaces where every child feels protected" },
  { icon: Users, title: "Caring Educators", desc: "Passionate teachers who believe in every learner's potential" },
  { icon: GraduationCap, title: "Quality Education", desc: "CBC-aligned curriculum with life skills integration" },
  { icon: Heart, title: "Community-Centered", desc: "Rooted in hope, dignity, and local empowerment" },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // For demo: always succeed
    setFormStatus("success");
    
    // Reset after 3 seconds
    setTimeout(() => setFormStatus("idle"), 3000);
  };

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
              <MessageCircle size={16} />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Shape a{" "}
              <span className="text-peach-300">Brighter Future</span> Together
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re enrolling your child, asking a question, or exploring partnership—
              we&apos;re here to listen, help, and welcome you into our community.
            </p>
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
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
            <a
              href="tel:+254728654003"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl backdrop-blur-sm border border-white/30 hover:border-white transition-all duration-300"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="mailto:info@destinyangels.co.ke"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl backdrop-blur-sm border border-white/30 hover:border-white transition-all duration-300"
            >
              <Mail size={18} />
              Email Us
            </a>
          </motion.div>
        </div>
      </motion.section>

      <WaveDivider className="-mt-px" />

      {/* 📬 Contact Info + Form Section */}
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

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info Cards */}
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.h2 variants={cardVariants} className="text-3xl font-bold text-blue-900 mb-2">
                Get in Touch
              </motion.h2>
              <motion.p variants={cardVariants} className="text-gray-600 mb-8">
                We&apos;d love to hear from you. Reach out via any channel below, or fill out the form.
              </motion.p>

              {/* Premium Contact Cards */}
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  lines: ["Huruma, Kiamaiko, Mathare Sub-County", "Nairobi, Kenya"],
                  action: { label: "Get Directions", href: "https://maps.google.com" },
                  gradient: "from-blue-500 to-blue-700",
                },
                {
                  icon: Phone,
                  title: "Call / WhatsApp",
                  lines: ["+254 728 654 003", "Mon–Fri: 8AM–4PM"],
                  action: { label: "Call Now", href: "tel:+254728654003" },
                  gradient: "from-blue-600 to-peach-400",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["info@destinyangels.co.ke", "P.O. Box 15488-004001, Nairobi"],
                  action: { label: "Send Email", href: "mailto:info@destinyangels.co.ke" },
                  gradient: "from-blue-600 to-peach-400",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    href={item.action.href}
                    className="group relative block bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-card border border-blue-100 hover:border-peach-300 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        variants={iconHoverVariants}
                        initial="rest"
                        whileHover="hover"
                        className={`w-12 h-12 bg-linear-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                      >
                        <Icon size={22} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                        {item.lines.map((line, j) => (
                          <p key={j} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                        ))}
                        <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-blue-700 group-hover:text-peach-600 transition-colors">
                          {item.action.label}
                          <Navigation size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* Office Hours Card */}
              <motion.div variants={cardVariants} className="bg-blue-50/80 backdrop-blur-sm p-5 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-3">
                  <Clock className="text-peach-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Office Hours</h4>
                    <p className="text-gray-600 text-sm">Monday – Friday: 8:00 AM – 4:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: 9:00 AM – 1:00 PM (Enquiries Only)</p>
                    <p className="text-gray-500 text-xs mt-2">Closed on Sundays & Public Holidays</p>
                  </div>
                </div>
              </motion.div>

              {/* Motto Card */}
              <motion.div variants={cardVariants} className="bg-linear-to-br from-peach-50 to-blue-50 p-6 rounded-2xl border-l-4 border-peach-300">
                <p className="text-blue-900 italic font-semibold text-lg">
                  "Early skills for better future"
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Join us in shaping tomorrow&apos;s leaders today.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={sectionVariants}>
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-card border border-blue-100 sticky top-24">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
                
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all bg-white/50"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all bg-white/50"
                          placeholder="+254 7XX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all bg-white/50"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all bg-white/50"
                      >
                        <option value="">Select a subject</option>
                        <option value="enrollment">Enrollment Inquiry</option>
                        <option value="fees">Fees & Payment</option>
                        <option value="visit">Schedule a Visit</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other Question</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all bg-white/50 resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl"
                      >
                        <AlertCircle size={16} />
                        Something went wrong. Please try again.
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      whileHover={{ scale: formStatus === "submitting" ? 1 : 1.02 }}
                      whileTap={{ scale: formStatus === "submitting" ? 1 : 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-900/70 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-gray-500 text-xs">
                      By submitting, you agree to our privacy policy. We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 🗺️ Map Section - Enhanced */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-white relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <MapPin size={16} />
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Visit Any of Our Branches
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quality education accessible across Nairobi. Use the interactive map below to find the branch nearest to you.
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white p-6 rounded-3xl shadow-card border border-blue-100">
            <GoogleMaps />
          </motion.div>
        </div>
      </motion.section>

      {/* 📍 Branch Locations Cards */}
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
              <Navigation size={16} />
              Our Locations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Four Branches, One Mission
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Wherever you are in Nairobi, quality education is within reach. Visit the branch closest to you.
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
                <motion.a
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  href={`https://maps.google.com?q=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
                      variants={iconHoverVariants}
                      initial="rest"
                      whileHover="hover"
                      className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-blue-400/30 transition-shadow"
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="font-bold text-blue-900 text-lg mb-1">{branch.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{branch.address}</p>
                    <p className="text-blue-700 text-sm font-medium mb-4">{branch.phone}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-peach-600 transition-colors">
                      Get Directions
                      <Navigation size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 💙 Trust & Community Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 bg-white relative"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={sectionVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Heart size={16} />
              Why Parents Trust Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Education Rooted in Care
            </h2>
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
                  className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 text-center"
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
              Give Your Child a Strong Foundation
            </motion.h2>

            <motion.p
              variants={cardVariants}
              className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Every child deserves the chance to thrive. Start their journey with a school that believes 
              in their potential, nurtures their character, and prepares them for a future full of possibility.
            </motion.p>

            <motion.div variants={cardVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254728654003"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-peach-300 hover:bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-peach-300/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Phone size={18} />
                Call to Enroll
              </a>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                Explore Programs
              </Link>
            </motion.div>

            <motion.p
              variants={cardVariants}
              className="text-blue-200 text-sm mt-8"
            >
              Flexible payment plans available • Scholarships for deserving learners
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Wave Divider */}
      <WaveDivider className="rotate-180" />
    </div>
  );
}
