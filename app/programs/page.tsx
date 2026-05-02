import { ProgramCard } from "@/components/ProgramCard";
import { WaveDivider } from "@/components/WaveDivider";

const programs = [
  { id: "pre-primary", title: "Pre-Primary", iconName: "BookOpen", desc: "A gentle introduction to structured learning through play, storytelling, and creative exploration. Focus on early literacy, numeracy, social skills, and motor development." },
  { id: "primary", title: "Primary School", iconName: "Calculator", desc: "A strong academic foundation aligned with national curriculum standards. Emphasis on critical thinking, language proficiency, mathematics, and creative expression." },
  { id: "junior", title: "Junior Secondary", iconName: "Users", desc: "CBC-aligned pathways designed to help learners discover their strengths. Integrated STEM, humanities, and vocational exposure prepare students for advanced studies." },
  { id: "secondary", title: "Senior Secondary", iconName: "GraduationCap", desc: "Rigorous academic preparation for national examinations and post-secondary opportunities. Career guidance, leadership training, and exam readiness are core components." },
  { id: "life-skills", title: "Life Skills Education", iconName: "LifeBuoy", desc: "Practical training in financial literacy, digital skills, communication, health awareness, and environmental stewardship to build resilient, independent young adults." },
];

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      <header className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Programs</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">Holistic education pathways for every stage of childhood and adolescence.</p>
      </header>
      
      <WaveDivider className="-mt-[1px]" />
      
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((prog, i) => (
            <ProgramCard key={prog.id} {...prog} href={`#${prog.id}`} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}