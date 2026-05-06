"use client";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  // Existing images
  { src: "/images/learners.jpg", alt: "Engaged learners in classroom" },
  { src: "/images/students-class.jpg", alt: "Students studying together" },
  { src: "/images/outside-learning.jpg", alt: "Outdoor learning session" },
  { src: "/images/hands-on-learning.jpg", alt: "Hands-on educational activity" },
  { src: "/images/sports-day.jpg", alt: "Students participating in sports day" },
  { src: "/images/graduation-day.jpg", alt: "Joyful graduation ceremony" },
  { src: "/images/staffs.jpg", alt: "Dedicated teaching staff" },
  { src: "/images/community-support.jpg", alt: "Community engagement and support" },
  
  // ✅ NEW IMAGES
  { src: "/images/another-one.jpg", alt: "Students collaborating on group project" },
  { src: "/images/another-one1.jpg", alt: "Creative arts and crafts session" },
  { src: "/images/happy-students.jpg", alt: "Happy students celebrating achievement" },
  { src: "/images/one-with-the-teacher.jpg", alt: "Teacher guiding student one-on-one" },
  { src: "/images/out-to-enjoy.jpg", alt: "Students enjoying outdoor recreational time" },
  { src: "/images/staff-out.jpg", alt: "Teaching staff team building activity" },
  { src: "/images/students-gathering.jpg", alt: "Students gathering for assembly event" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Swipe detection for mobile lightbox
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && selected !== null && selected < galleryImages.length - 1) {
      setSelected(selected + 1);
    }
    if (isRightSwipe && selected !== null && selected > 0) {
      setSelected(selected - 1);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, selected]);

  // Keyboard navigation for desktop accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selected === null) return;
      
      if (e.key === "ArrowLeft" && selected > 0) {
        setSelected(selected - 1);
      }
      if (e.key === "ArrowRight" && selected < galleryImages.length - 1) {
        setSelected(selected + 1);
      }
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const nextImage = () => {
    if (selected !== null && selected < galleryImages.length - 1) {
      setSelected(selected + 1);
    }
  };

  const prevImage = () => {
    if (selected !== null && selected > 0) {
      setSelected(selected - 1);
    }
  };

  return (
    <div className="pt-20">
      <header className="bg-blue-900 text-white relative">
        <div className="py-16 px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Moments that capture learning, joy, and community.</p>
        </div>
        
        {/* 🌊 Bumpy Wave Curve */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <svg 
            viewBox="0 0 1440 120" 
            className="w-full h-12 md:h-20 drop-shadow-lg"
            preserveAspectRatio="none"
          >
            <path 
              className="fill-white" 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
            />
          </svg>
        </div>
      </header>
      
      <section className="py-16 px-4 max-w-7xl mx-auto -mt-8 md:-mt-12">
        {/* Mobile-optimized grid: 2 columns on mobile, up to 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              className="relative h-32 sm:h-40 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-card cursor-pointer group bg-blue-100 focus:outline-none focus:ring-4 focus:ring-peach-300"
              onClick={() => setSelected(i)}
              aria-label={`View: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 border-2 sm:border-4 border-peach-300 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition rounded-xl pointer-events-none" />
              <div className="absolute inset-0 gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-2 sm:p-4">
                <p className="text-white text-xs sm:text-sm font-medium drop-shadow-md line-clamp-2">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Mobile-Optimized Lightbox Modal */}
      {selected !== null && (
        <div 
          className="fixed inset-0 z-50 bg-blue-900/95 flex items-center justify-center p-2 sm:p-4" 
          onClick={() => setSelected(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close Button - Larger tap target for mobile */}
          <button 
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-peach-300 transition p-2 sm:p-3 rounded-full bg-black/20 hover:bg-black/40 z-10" 
            onClick={(e) => { e.stopPropagation(); setSelected(null); }}
            aria-label="Close image viewer"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>

          {/* Navigation Arrows - Only show on desktop or if not first/last */}
          {selected > 0 && (
            <button 
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-peach-300 transition p-2 sm:p-3 rounded-full bg-black/20 hover:bg-black/40 z-10 hidden sm:block"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
            </button>
          )}
          
          {selected < galleryImages.length - 1 && (
            <button 
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-peach-300 transition p-2 sm:p-3 rounded-full bg-black/20 hover:bg-black/40 z-10 hidden sm:block"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
            >
              <ChevronRight size={24} className="sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] rounded-lg shadow-2xl object-contain"
              priority
            />
            
            {/* Image Caption - Mobile optimized */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-white text-sm sm:text-base font-medium text-center">
                {galleryImages[selected].alt}
              </p>
              <p className="text-blue-200 text-xs text-center mt-1">
                {selected + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:hidden">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === selected ? "bg-peach-300 w-4" : "bg-white/50"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="absolute top-4 left-0 right-0 text-center text-white/70 text-xs sm:hidden pointer-events-none">
            ← Swipe to navigate →
          </div>
        </div>
      )}
    </div>
  );
}