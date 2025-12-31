import { Hero } from "@/components/Hero";
import { BentoGrid, GridItem } from "@/components/BentoGrid";
import { 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  Cpu, 
  Globe, 
  Dumbbell,
  ShieldCheck,
  Zap,
  Layout,
  Server
} from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-32 max-w-7xl">
      <Hero />
      
      <BentoGrid className="mt-12">
        {/* Education - Large Item */}
        <GridItem 
          title="Education" 
          subtitle="Singapore Management University" 
          icon={<GraduationCap className="w-6 h-6" />}
          className="md:col-span-2 md:row-span-2"
        >
          <div className="space-y-6">
            <div>
              <p className="text-white font-medium text-lg">B.Sc. Information Systems</p>
              <p className="text-zinc-500 text-sm">Business Analytics & Digital Cloud Solutions</p>
              <p className="text-zinc-500 text-xs mt-2 bg-white/5 inline-block px-2 py-1 rounded">Aug 2022 - July 2026</p>
            </div>
            
            <div className="pt-4 border-t border-white/5">
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-3">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI & Machine Learning", 
                  "Cloud Solutions", 
                  "Data Management", 
                  "Enterprise Solutions", 
                  "Web App Dev",
                  "Computational Thinking"
                ].map(course => (
                  <span key={course} className="px-3 py-1.5 rounded-full bg-white/[0.03] text-[11px] text-zinc-300 border border-white/5">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GridItem>

        {/* Experience - Solve Education */}
        <GridItem 
          title="Experience" 
          subtitle="Solve Education!" 
          icon={<Briefcase className="w-6 h-6" />}
          className="md:col-span-2"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-white font-semibold">Backend Developer Intern</h4>
              <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                Improved speech recognition engagement by 15% and learning accuracy by 23%.
              </p>
            </div>
            <span className="text-[10px] text-zinc-500 bg-white/5 px-2 py-1 rounded whitespace-nowrap">2024</span>
          </div>
        </GridItem>

        {/* Skills - Tech Stack (Small) */}
        <GridItem 
          title="Tools" 
          subtitle="Developer Ecosystem" 
          icon={<Cpu className="w-6 h-6" />}
          className="md:col-span-1"
        >
          <div className="flex flex-wrap gap-2">
             {["Docker", "Git", "Postman", "Firebase", "GCP", "AWS", "Neon DB", "Stripe"].map(tool => (
              <span key={tool} className="px-2 py-1 rounded-lg bg-white/5 text-[10px] text-zinc-400 border border-white/5">
                {tool}
              </span>
            ))}
          </div>
        </GridItem>

        {/* Projects - Poskitix */}
        <GridItem 
          title="Poskitix" 
          subtitle="Microservices" 
          icon={<Rocket className="w-6 h-6" />}
          className="md:col-span-1"
        >
          <div className="space-y-2">
            <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">Scalable concert ticketing with RabbitMQ, Kong & Stripe.</p>
            <div className="flex gap-2">
              <span className="text-[9px] text-purple-400">Vue.js</span>
              <span className="text-[9px] text-blue-400">Spring Boot</span>
            </div>
          </div>
        </GridItem>

        {/* Frameworks */}
        <GridItem 
          title="Frameworks" 
          subtitle="Modern Ecosystem" 
          icon={<Zap className="w-6 h-6" />}
          className="md:col-span-2"
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {["Next.js", "React", "Vue.js", "Flask", "Django", "Laravel", "Tailwind", "Spring Boot"].map(f => (
              <div key={f} className="flex items-center gap-2 text-[11px] text-zinc-400">
                <div className="w-1 h-1 rounded-full bg-purple-500" />
                {f}
              </div>
            ))}
          </div>
        </GridItem>

        {/* Projects - Abba */}
        <GridItem 
          title="Abba Cleaner" 
          subtitle="Optimization" 
          icon={<Layout className="w-6 h-6" />}
          className="md:col-span-1"
        >
          <div className="space-y-2">
            <p className="text-zinc-400 text-xs leading-relaxed">Task & Route optimization using Google Maps API.</p>
            <div className="flex gap-2 text-[9px]">
              <span className="text-zinc-500">Next.js</span>
              <span className="text-zinc-500">MySQL</span>
            </div>
          </div>
        </GridItem>

        {/* Leadership / .Hack */}
        <GridItem 
          title="SMU .Hack" 
          subtitle="HEAP Mentor" 
          icon={<Server className="w-6 h-6" />}
          className="md:col-span-1"
        >
           <p className="text-zinc-400 text-xs leading-relaxed">Mentoring students in industry-standard software processes.</p>
        </GridItem>

        {/* Cybersecurity / Whitehat */}
        <GridItem 
          title="Whitehat" 
          subtitle="Cybersecurity" 
          icon={<ShieldCheck className="w-6 h-6" />}
          className="md:col-span-1"
        >
           <p className="text-zinc-400 text-xs">Learning CTF fundamentals and security protocols.</p>
        </GridItem>

        {/* Data & ML Libraries */}
        <GridItem 
          title="Libraries" 
          subtitle="Data & ML" 
          icon={<Globe className="w-6 h-6" />}
          className="md:col-span-1"
        >
          <div className="flex flex-wrap gap-2">
             {["React", "NumPy", "Pandas", "PyTorch", "OpenCV"].map(lib => (
              <span key={lib} className="px-2 py-1 rounded-lg bg-white/5 text-[10px] text-zinc-400 border border-white/5">
                {lib}
              </span>
            ))}
          </div>
        </GridItem>

        {/* Tools & Hobbies */}
        <GridItem 
          title="Interests" 
          subtitle="Beyond the Screen" 
          icon={<Dumbbell className="w-6 h-6" />}
          className="md:col-span-2"
        >
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="space-y-2">
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tight">Tech Pulse</p>
              <p className="text-xs text-zinc-400">Fireship, ThePrimeTimeagen</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tight">Active</p>
              <p className="text-xs text-zinc-400">Judo, Gym, Running</p>
            </div>
          </div>
        </GridItem>
      </BentoGrid>

      {/* Footer CTA */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's build something together.</h2>
        <a 
          href="mailto:henryleehks@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all active:scale-95"
        >
          Get in touch
          <Rocket className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
