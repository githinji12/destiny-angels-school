import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white relative mt-0">
      
      {/* 🌊 Bumpy Wave Boundary */}
      <div className="absolute -top-12 md:-top-20 left-0 w-full z-20">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-12 md:h-20 drop-shadow-lg"
          preserveAspectRatio="none"
        >
          <path 
            className="fill-blue-900" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        
        {/* 4-Column Grid for clean, balanced layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand & Motto */}
          <div>
            <h4 className="text-xl font-bold mb-3 text-peach-300">Destiny Angels</h4>
            <p className="text-blue-100 italic mb-4 text-sm border-l-4 border-peach-300 pl-3">
              "Early skills for better future"
            </p>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering young minds through quality education and life skills across Nairobi.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["/about", "/programs", "/gallery", "/contact"].map((href, i) => (
                <Link key={i} href={href} className="block text-blue-100 hover:text-peach-300 transition capitalize">
                  {href.replace("/", "") || "Home"}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Column 3: Our Branches */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Branches</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-blue-100">
                <MapPin size={16} className="mt-1 text-peach-300 shrink-0" />
                <div>
                  <p className="font-medium text-white">Main: Huruma, Kiamaiko</p>
                  <p className="text-xs text-blue-200">Mathare Sub-County</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-blue-100">
                <MapPin size={16} className="mt-1 text-peach-300 shrink-0" />
                <div>
                  <p className="font-medium text-white">Mwihoko Branch</p>
                  <p className="text-xs text-blue-200">Nairobi</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-blue-100">
                <MapPin size={16} className="mt-1 text-peach-300 shrink-0" />
                <div>
                  <p className="font-medium text-white">Kariobangi South</p>
                  <p className="text-xs text-blue-200">Nairobi</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-blue-100">
                <MapPin size={16} className="mt-1 text-peach-300 shrink-0" />
                <div>
                  <p className="font-medium text-white">Githurai 44</p>
                  <p className="text-xs text-blue-200">Nairobi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-peach-300 shrink-0" />
                <a href="tel:+254728654003" className="hover:text-peach-300 transition">
                  +254 728 654 003
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-peach-300 shrink-0" />
                <span>P.O. Box 15488-004001<br/>Nairobi, Kenya</span>
              </div>
              <div className="pt-2 border-t border-white/10 mt-2">
                <p className="text-xs text-blue-200"> All branches share the same contact line</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-4 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} Destiny Angels Learning Centre. All rights reserved.
        </div>
      </div>
    </footer>
  );
}