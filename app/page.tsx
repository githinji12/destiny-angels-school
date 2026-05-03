import { HeroSlider } from "@/components/HeroSlider";
import { FeatureCard } from "@/components/FeatureCard";
import { ProgramCard } from "@/components/ProgramCard";
import { WaveDivider } from "@/components/WaveDivider";
import { StatsCounter } from "@/components/StatsCounter";
import { TestimonialBar } from "@/components/Testimonials";
import { FloatingContact } from "@/components/FloatingContact";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Floating Contact Buttons (WhatsApp & Call) */}
      <FloatingContact />

      {/* Hero Section */}
      <HeroSlider />
      
      {/* Stats Counter - Shows credibility immediately */}
      <StatsCounter />
      
      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Destiny Angels Learning Centre?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing, structured, and empowering environment where every child's potential is recognized and cultivated.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              iconName="Shield" 
              title="Safe & Supportive Environment" 
              desc="A secure space where learners feel valued, protected, and encouraged to thrive." 
              index={0} 
            />
            <FeatureCard 
              iconName="GraduationCap" 
              title="Dedicated Educators" 
              desc="Passionate teachers committed to personalized attention and academic excellence." 
              index={1} 
            />
            <FeatureCard 
              iconName="Sparkles" 
              title="Life Skills & Character" 
              desc="Practical training in resilience, communication, and community responsibility." 
              index={2} 
            />
          </div>
        </div>
      </section>

      <WaveDivider className="-mt-px" />
      
      {/* Programs Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4">Our Programs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive learning pathways from early childhood to secondary education.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard 
              title="Pre-Primary" 
              desc="Play-based learning that builds curiosity, motor skills, and foundational literacy." 
              iconName="BookOpen" 
              index={0} 
              href="/programs#pre-primary" 
            />
            <ProgramCard 
              title="Primary" 
              desc="Strong academic grounding with emphasis on numeracy, literacy, and critical thinking." 
              iconName="Users" 
              index={1} 
              href="/programs#primary" 
            />
            <ProgramCard 
              title="Junior & Secondary" 
              desc="CBC-aligned curriculum preparing students for national assessments and future careers." 
              iconName="GraduationCap" 
              index={2} 
              href="/programs#secondary" 
            />
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/programs" 
              className="inline-block bg-blue-900 hover:bg-peach-300 text-white hover:text-blue-900 font-semibold px-8 py-3 rounded-lg transition-all hover:-translate-y-1 shadow-soft"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

{/* Branches Section */}
<section className="py-16 px-4 bg-blue-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl text-center mb-4">Find Us Across Nairobi</h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Quality education accessible in multiple locations. Visit the branch nearest to you.
    </p>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-5 rounded-xl shadow-card border-t-4 border-peach-300 text-center">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h3 className="font-bold text-blue-900 mb-1">Huruma (Main)</h3>
        <p className="text-xs text-gray-600">Kiamaiko, Mathare</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-card border-t-4 border-peach-300 text-center">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h3 className="font-bold text-blue-900 mb-1">Mwihoko</h3>
        <p className="text-xs text-gray-600">Nairobi</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-card border-t-4 border-peach-300 text-center">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h3 className="font-bold text-blue-900 mb-1">Kariobangi South</h3>
        <p className="text-xs text-gray-600">Nairobi</p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-card border-t-4 border-peach-300 text-center">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h3 className="font-bold text-blue-900 mb-1">Githurai 44</h3>
        <p className="text-xs text-gray-600">Nairobi</p>
      </div>
    </div>
  </div>
</section>
      {/* Community Section */}
      <section className="py-16 px-4 bg-peach-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-card border-4 border-white">
            <img 
              src="/images/community-support.jpg" 
              alt="Destiny Angels community engagement" 
              className="object-cover w-full h-full" 
              loading="lazy" 
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl mb-4">Community-Driven Education</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Huruma, we serve families from humble backgrounds with dignity and hope. Every resource is directed toward creating equal opportunities for academic and personal growth.
            </p>
            <Link 
              href="/about" 
              className="text-blue-700 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Social Proof */}
      <TestimonialBar />
      
      {/* CTA Section */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-2xl md:text-3xl mb-4">Ready to Shape a Brighter Future?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Enrollment is open. Join a community that believes in every child's destiny.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-peach-300 hover:bg-blue-700 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-soft transition-all hover:-translate-y-1"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}