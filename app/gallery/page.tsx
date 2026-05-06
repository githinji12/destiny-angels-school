"use client";
import { useState } from "react";
import { X } from "lucide-react";
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
  
  // ✅ NEW IMAGES ADDED
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative h-56 md:h-64 rounded-xl overflow-hidden shadow-card cursor-pointer group bg-blue-100"
              onClick={() => setSelected(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 border-4 border-peach-300 opacity-0 group-hover:opacity-100 transition rounded-xl pointer-events-none" />
              <div className="absolute inset-0 gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white text-sm font-medium drop-shadow-md">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected !== null && (
        <div 
          className="fixed inset-0 z-50 bg-blue-900/95 flex items-center justify-center p-4" 
          onClick={() => setSelected(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-peach-300 transition p-2 rounded-full hover:bg-white/10" 
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl object-contain"
            />
            <p className="text-center text-white mt-4 font-medium">{galleryImages[selected].alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}