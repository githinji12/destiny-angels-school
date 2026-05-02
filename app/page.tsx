import { HeroSlider } from "@/components/HeroSlider";
import { FeatureCard } from "@/components/FeatureCard";
import { ProgramCard } from "@/components/ProgramCard";
import { WaveDivider } from "@/components/WaveDivider";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Destiny Angels Learning Centre?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide a nurturing, structured, and empowering environment where every child's potential is recognized and cultivated.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard iconName="Shield" title="Safe & Supportive Environment" desc="A secure space where learners feel valued, protected, and encouraged to thrive." index={0} />
            <FeatureCard iconName="GraduationCap" title="Dedicated Educators" desc="Passionate teachers committed to personalized attention and academic excellence." index={1} />
            <FeatureCard iconName="Sparkles" title="Life Skills & Character" desc="Practical training in resilience, communication, and community responsibility." index={2} />
          </div>
        </div>
      </section>

      <WaveDivider className="-mt-[1px]" />
      
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4">Our Programs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Comprehensive learning pathways from early childhood to secondary education.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard title="Pre-Primary" desc="Play-based learning that builds curiosity, motor skills, and foundational literacy." iconName="BookOpen" index={0} href="/programs#pre-primary" />
            <ProgramCard title="Primary" desc="Strong academic grounding with emphasis on numeracy, literacy, and critical thinking." iconName="Users" index={1} href="/programs#primary" />
            <ProgramCard title="Junior & Secondary" desc="CBC-aligned curriculum preparing students for national assessments and future careers." iconName="GraduationCap" index={2} href="/programs#secondary" />
          </div>
          <div className="text-center mt-12">
            <Link href="/programs" className="inline-block bg-blue-900 hover:bg-peach-300 text-white hover:text-blue-900 font-semibold px-8 py-3 rounded-lg transition-all hover:-translate-y-1 shadow-soft">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-peach-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-card border-4 border-white">
            <Image
              src="/images/community-support.jpg"
              alt="Destiny Angels community engagement"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl mb-4">Community-Driven Education</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Huruma, we serve families from humble backgrounds with dignity and hope. Every resource is directed toward creating equal opportunities for academic and personal growth.
            </p>
            <Link href="/about" className="text-blue-700 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Read our story →
            </Link>
          </div>
        </div>
      </section>

     <section className="py-16 px-4 text-center bg-white pb-24 md:pb-32">
  <h2 className="text-2xl md:text-3xl mb-4">Ready to Shape a Brighter Future?</h2>
  <p className="text-gray-600 mb-8 max-w-xl mx-auto">Enrollment is open. Join a community that believes in every child's destiny.</p>
  <Link href="/contact" className="inline-block bg-peach-300 hover:bg-blue-700 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-soft transition-all hover:-translate-y-1">
    Contact Us Today
  </Link>
</section>
    </div>
  );
}