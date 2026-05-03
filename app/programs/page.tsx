import { ProgramCard } from "@/components/ProgramCard";
import { WaveDivider } from "@/components/WaveDivider";

const programs = [
  { id: "pre-primary", title: "Pre-Primary", iconName: "BookOpen", desc: "A gentle introduction to structured learning through play, storytelling, and creative exploration. Focus on early literacy, numeracy, social skills, and motor development." },
  { id: "primary", title: "Primary School", iconName: "Calculator", desc: "A strong academic foundation aligned with national curriculum standards. Emphasis on critical thinking, language proficiency, mathematics, and creative expression." },
  { id: "junior", title: "Junior Secondary", iconName: "Users", desc: "CBC-aligned pathways designed to help learners discover their strengths. Integrated STEM, humanities, and vocational exposure prepare students for advanced studies." },
  { id: "secondary", title: "Senior Secondary", iconName: "GraduationCap", desc: "Rigorous academic preparation for national examinations and post-secondary opportunities. Career guidance, leadership training, and exam readiness are core components." },
  { id: "life-skills", title: "Life Skills Education", iconName: "LifeBuoy", desc: "Practical training in financial literacy, digital skills, communication, health awareness, and environmental stewardship to build resilient, independent young adults." },
  { id: "special-needs", title: "Special Needs Education", iconName: "Heart", desc: "Dedicated support for learners with diverse abilities. Individualized education plans, specialized teaching methods, and inclusive classroom environments ensure every child thrives." },
  { id: "counseling", title: "Counseling & Guidance", iconName: "HeartHandshake", desc: "Professional counseling services supporting emotional well-being, behavioral development, and mental health. Safe, confidential space for students to navigate challenges and build resilience." },
];

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      <header className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Programs</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">Holistic education pathways for every stage of childhood and adolescence.</p>
      </header>
      
      <WaveDivider className="-mt-px" />
      
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <ProgramCard key={prog.id} {...prog} href={`#${prog.id}`} index={i} />
          ))}
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4">Our Branches</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Quality education accessible across Nairobi. Find a Destiny Angels Learning Centre near you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-card border-t-4 border-peach-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Main Branch</h3>
              <p className="text-gray-600 text-sm mb-3">Huruma, Kiamaiko, Mathare Sub-County</p>
              <p className="text-xs text-blue-700 font-medium">📞 +254 728 654 003</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card border-t-4 border-peach-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Mwihoko Branch</h3>
              <p className="text-gray-600 text-sm mb-3">Mwihoko, Nairobi</p>
              <p className="text-xs text-blue-700 font-medium">📞 +254 728 654 003</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card border-t-4 border-peach-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Kariobangi South</h3>
              <p className="text-gray-600 text-sm mb-3">Kariobangi South, Nairobi</p>
              <p className="text-xs text-blue-700 font-medium">📞 +254 728 654 003</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card border-t-4 border-peach-300 md:col-start-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Githurai 44</h3>
              <p className="text-gray-600 text-sm mb-3">Githurai 44, Nairobi</p>
              <p className="text-xs text-blue-700 font-medium">📞 +254 728 654 003</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}