import { WaveDivider } from "@/components/WaveDivider";
import { Target, Eye, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <header className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">Rooted in community, driven by purpose.</p>
      </header>
      
      <WaveDivider className="-mt-[1px]" />
      
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-card border border-blue-100">
          <h2 className="text-2xl mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Destiny Angels Learning Center was founded with a simple yet profound vision: to provide quality, accessible education to children in Huruma, Kiamaiko, regardless of their socioeconomic background. What began as a small initiative has grown into a trusted institution serving learners from Pre-Primary through Secondary school.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe that education is the most powerful tool for empowerment. By combining academic rigor with life skills and moral grounding, we prepare students not just to pass exams, but to thrive as responsible, resilient, and compassionate members of society.
          </p>
          <div className="mt-6 p-5 bg-peach-50 rounded-xl border-l-4 border-peach-300">
  <p className="text-blue-900 italic font-semibold">
    "Early skills for better future"
  </p>
  <p className="text-gray-600 text-sm mt-2">
    This motto guides everything we do — from classroom lessons to life skills training.
  </p>
</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-card border-4 border-peach-200">
            <Image
              src="/images/staffs.jpg"
              alt="Our dedicated teaching staff"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="grid gap-6">
            {[
              { icon: Target, title: "Our Mission", desc: "To deliver inclusive, high-quality education and life skills that unlock every child's potential and foster community development." },
              { icon: Eye, title: "Our Vision", desc: "A community where every child, regardless of background, has access to education that leads to dignity, opportunity, and lifelong success." },
              { icon: HeartHandshake, title: "Our Values", desc: "Compassion, Excellence, Integrity, Community, and Hope guide every decision we make." }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <item.icon className="text-peach-500 mb-2" size={24} />
                <h3 className="text-lg font-semibold text-blue-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto bg-peach-50 p-8 rounded-2xl border border-peach-200">
          <h2 className="text-2xl mb-4">A Message of Hope</h2>
          <p className="text-gray-700 italic leading-relaxed">
            "At Destiny Angels Learning Centre, we don't just teach subjects—we nurture destinies. Every child who walks through our gates carries the promise of tomorrow, and it is our honor to walk beside them."
          </p>
          <p className="text-blue-900 font-semibold mt-4">— The School Leadership Team</p>
        </div>
      </section>
    </div>
  );
}