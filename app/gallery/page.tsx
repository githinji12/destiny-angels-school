"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Heart,
  BookOpen,
  Trophy,
  Users,
  Sparkles,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";

// 📸 Gallery Images with Categories
const galleryImages = [
  {
    src: "/images/learners.jpg",
    alt: "Engaged learners in classroom",
    category: "classroom",
    date: "2024",
  },
  {
    src: "/images/excited-students.jpg",
    alt: "Excited adorable students",
    category: "events",
    date: "2024",
  },
  {
    src: "/images/graduation-day.jpg",
    alt: "Joyful graduation ceremony",
    category: "events",
    date: "2024",
  },
  {
    src: "/images/community-support.jpg",
    alt: "Community engagement and support",
    category: "community",
    date: "2024",
  },
  {
    src: "/images/another-one.jpg",
    alt: "Students collaborating on group project",
    category: "learning",
    date: "2024",
  },
  {
    src: "/images/another-one1.jpg",
    alt: "Creative arts and crafts session",
    category: "learning",
    date: "2024",
  },
  {
    src: "/images/happy-students.jpg",
    alt: "Happy students celebrating achievement",
    category: "events",
    date: "2024",
  },
  {
    src: "/images/one-with-the-teacher.jpg",
    alt: "Teacher guiding student one-on-one",
    category: "classroom",
    date: "2024",
  },
  {
    src: "/images/students-gathering.jpg",
    alt: "Students gathering for assembly event",
    category: "events",
    date: "2024",
  },
];

// 🏷️ Category Configuration
const categories = [
  { id: "all", label: "All", icon: Sparkles, color: "bg-blue-900" },
  { id: "classroom", label: "Classroom", icon: BookOpen, color: "bg-blue-700" },
  { id: "events", label: "Events", icon: Trophy, color: "bg-peach-500" },
  { id: "learning", label: "Learning", icon: GraduationCap, color: "bg-blue-800" },
  { id: "community", label: "Community", icon: Users, color: "bg-peach-400" },
];

// 🎬 Animation Variants - Type-safe (MATCHING PROGRAMS PAGE)
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" as const } },
} as const satisfies Variants;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  // Filter images by category
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Touch handlers for swipe navigation
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || selectedImage === null) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
      setZoom(1);
    }
    if (isRightSwipe && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
      setZoom(1);
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, selectedImage, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowLeft" && selectedImage > 0) {
        setSelectedImage(selectedImage - 1);
        setZoom(1);
      }
      if (e.key === "ArrowRight" && selectedImage < filteredImages.length - 1) {
        setSelectedImage(selectedImage + 1);
        setZoom(1);
      }
      if (e.key === "Escape") {
        setSelectedImage(null);
        setZoom(1);
        setIsFullscreen(false);
      }
      if (e.key === "+") setZoom((z) => Math.min(z + 0.5, 3));
      if (e.key === "-") setZoom((z) => Math.max(z - 0.5, 1));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages.length]);

  // Reset zoom when image changes
  useEffect(() => {
    setZoom(1);
  }, [selectedImage]);

  // Download image handler
  const handleDownload = async (imageUrl: string, alt: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `destiny-angels-${alt.toLowerCase().replace(/\s+/g, "-")}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(imageUrl, "_blank");
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      imageContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Navigation helpers
  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
      setZoom(1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
      setZoom(1);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoom(1);
    setIsFullscreen(false);
  };

  return (
    <div className="min-h-screen bg-background-light overflow-x-hidden">
      {/* 🎬 Cinematic Hero Section - MATCHING PROGRAMS PAGE */}
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
              <Sparkles size={16} />
              Moments of Joy
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Gallery
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Capturing precious moments of learning, growth, and community at Destiny Angels.
              Every image tells a story of hope, dedication, and bright futures.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex justify-center gap-2"
            >
              <span className="px-4 py-2 bg-peach-300/20 text-peach-200 rounded-full text-sm font-medium">
                {galleryImages.length} Memories
              </span>
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
                {categories.length - 1} Categories
              </span>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-white/70 text-sm">Explore Our Gallery</span>
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

      {/* ✅ WaveDivider - MATCHING PROGRAMS PAGE */}
      <WaveDivider className="-mt-px" />

      {/* 🏷️ Category Filters */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="py-8 px-4 bg-background-light sticky top-16 z-30 backdrop-blur-md bg-background-light/90"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? `${cat.color} text-white shadow-lg`
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900 shadow-sm"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{cat.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 🖼️ Gallery Grid */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 md:py-28 px-4 relative"
      >
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-peach-50/30 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-peach-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredImages.map((img, index) => (
                <motion.button
                  key={`${img.src}-${index}`}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(index)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card bg-blue-100 cursor-pointer focus:outline-none focus:ring-4 focus:ring-peach-300 focus:ring-offset-2"
                  aria-label={`View: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={index < 4 ? "eager" : "lazy"}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/70 via-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-blue-900 text-xs font-semibold rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {categories.find((c) => c.id === img.category)?.label}
                  </span>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium drop-shadow-md line-clamp-2">
                      {img.alt}
                    </p>
                    <p className="text-blue-200 text-xs mt-1">{img.date}</p>
                  </div>

                  {/* Peach Border on Hover */}
                  <div className="absolute inset-0 border-2 border-peach-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Sparkles className="mx-auto text-blue-300 mb-4" size={48} />
              <p className="text-gray-600 text-lg">No images in this category yet.</p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-4 text-blue-700 font-medium hover:text-blue-900 transition"
              >
                View all images →
              </button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* 🖼️ Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-blue-950/95 backdrop-blur-xl flex items-center justify-center p-2 md:p-4"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close image viewer"
            >
              <X size={24} />
            </motion.button>

            {/* Navigation - Previous */}
            {selectedImage > 0 && (
              <motion.button
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:flex"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </motion.button>
            )}

            {/* Navigation - Next */}
            {selectedImage < filteredImages.length - 1 && (
              <motion.button
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:flex"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </motion.button>
            )}

            {/* Image Container with Zoom */}
            <motion.div
              ref={imageContainerRef}
              className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: zoom > 1 ? "grab" : "default" }}
            >
              <motion.div
                className="relative"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  width={1920}
                  height={1280}
                  className="w-auto h-auto max-w-[95vw] max-h-[75vh] md:max-h-[80vh] rounded-xl shadow-2xl object-contain"
                  priority
                />
              </motion.div>

              {/* Zoom Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom((z) => Math.max(z - 0.5, 1));
                  }}
                  className="p-2 text-white hover:text-peach-300 transition disabled:opacity-50"
                  disabled={zoom <= 1}
                  aria-label="Zoom out"
                >
                  <ZoomOut size={20} />
                </motion.button>

                <span className="text-white text-sm font-medium min-w-[60px] text-center">
                  {Math.round(zoom * 100)}%
                </span>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom((z) => Math.min(z + 0.5, 3));
                  }}
                  className="p-2 text-white hover:text-peach-300 transition disabled:opacity-50"
                  disabled={zoom >= 3}
                  aria-label="Zoom in"
                >
                  <ZoomIn size={20} />
                </motion.button>

                <div className="w-px h-6 bg-white/30 mx-2" />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFullscreen();
                  }}
                  className="p-2 text-white hover:text-peach-300 transition"
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </motion.button>

                <div className="w-px h-6 bg-white/30 mx-2" />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(
                      filteredImages[selectedImage].src,
                      filteredImages[selectedImage].alt
                    );
                  }}
                  className="p-2 text-white hover:text-peach-300 transition flex items-center gap-1"
                  aria-label="Download image"
                >
                  <Download size={20} />
                  <span className="text-xs hidden sm:inline">Download</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Image Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-20 md:bottom-24 left-0 right-0 text-center px-4"
            >
              <p className="text-white text-base md:text-lg font-semibold drop-shadow-lg">
                {filteredImages[selectedImage].alt}
              </p>
              <p className="text-blue-200 text-sm mt-1">
                {selectedImage + 1} of {filteredImages.length} •{" "}
                {categories.find((c) => c.id === filteredImages[selectedImage].category)?.label}
              </p>
            </motion.div>

            {/* Mobile Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
              {filteredImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(i);
                    setZoom(1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedImage
                      ? "bg-peach-300 w-6"
                      : "bg-white/40 hover:bg-white/60 w-1.5"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-4 left-0 right-0 text-center text-white/60 text-xs md:hidden pointer-events-none"
            >
              ← Swipe to navigate →
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎯 CTA Section - MATCHING PROGRAMS PAGE */}
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
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-peach-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20"
            >
              <Heart size={16} className="text-peach-300" />
              Join Our Community
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Want to See More?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Follow us on social media for daily updates, or visit our campus to experience the
              Destiny Angels difference firsthand.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ✅ Footer Wave Divider - MATCHING PROGRAMS PAGE */}
      <WaveDivider className="rotate-180" />

    
    </div>
  );
}