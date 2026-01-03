import { Hero } from "@/components/Hero";
import { BentoGrid, GridItem } from "@/components/BentoGrid";
import { 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  Cpu, 
  Globe, 
  Dumbbell,
  ShieldCheck,
  Layout,
  Server,
  Mail,
  Cloud,
  Code2
} from "lucide-react";

// Helper to render a skill pill with icon
const SkillPill = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group/skill">
    <img 
      src={`https://cdn.simpleicons.org/${icon}/white`} 
      alt={`${name} icon`}
      className="w-4 h-4 opacity-70 group-hover/skill:opacity-100 transition-opacity" 
    />
    <span className="text-xs text-zinc-300 group-hover/skill:text-white transition-colors font-medium">
      {name}
    </span>
  </div>
);

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-32 max-w-7xl">
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 pb-2">
          About Me
        </h2>
        <BentoGrid>
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
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 scroll-mt-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 pb-2">
          Work Experience
        </h2>
        <BentoGrid>
          <GridItem 
            title="Experience" 
            subtitle="Solve Education!" 
            icon={<Briefcase className="w-6 h-6" />}
            className="md:col-span-4" 
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h4 className="text-white font-semibold text-xl">Backend Developer Intern</h4>
                <p className="text-zinc-400 text-base mt-2 leading-relaxed max-w-2xl">
                  Improved speech recognition engagement by 15% and learning accuracy by 23%.
                </p>
              </div>
              <span className="text-xs text-zinc-500 bg-white/5 px-3 py-1.5 rounded whitespace-nowrap">2024</span>
            </div>
          </GridItem>
        </BentoGrid>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 scroll-mt-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 pb-2">
          Featured Projects
        </h2>
        <BentoGrid>
          {/* Projects - Poskitix */}
          <GridItem 
            title="Poskitix" 
            subtitle="Microservices" 
            icon={<Rocket className="w-6 h-6" />}
            className="md:col-span-2"
          >
            <div className="space-y-4">
              <p className="text-zinc-400 text-sm leading-relaxed">Scalable concert ticketing system built with microservices architecture using RabbitMQ, Kong Gateway & Stripe integration.</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Vue.js</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Spring Boot</span>
              </div>
            </div>
          </GridItem>

          {/* Projects - Abba */}
          <GridItem 
            title="Abba Cleaner" 
            subtitle="Optimization" 
            icon={<Layout className="w-6 h-6" />}
            className="md:col-span-2"
          >
            <div className="space-y-4">
              <p className="text-zinc-400 text-sm leading-relaxed">Task & Route optimization platform leveraging Google Maps API for efficient scheduling.</p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/10">Next.js</span>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/10">MySQL</span>
              </div>
            </div>
          </GridItem>
        </BentoGrid>
      </section>

      {/* Skills Section - Consolidated & Icon Fixes */}
      <section id="skills" className="py-20 scroll-mt-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 pb-2">
          Technical Arsenal
        </h2>
        <BentoGrid>
          
          {/* Frontend */}
          <GridItem 
            title="Frontend" 
            subtitle="UI/UX Engineering" 
            icon={<Code2 className="w-6 h-6" />}
            className="md:col-span-2"
          >
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillPill name="Next.js" icon="nextdotjs" />
              <SkillPill name="React" icon="react" />
              <SkillPill name="Vue.js" icon="vuedotjs" />
              <SkillPill name="Tailwind" icon="tailwindcss" />
            </div>
          </GridItem>

          {/* Backend */}
          <GridItem 
            title="Backend" 
            subtitle="Server Logic" 
            icon={<Server className="w-6 h-6" />}
            className="md:col-span-2"
          >
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillPill name="Spring Boot" icon="springboot" />
              <SkillPill name="Flask" icon="flask" />
              <SkillPill name="Django" icon="django" />
              <SkillPill name="Laravel" icon="laravel" />
              <SkillPill name="Stripe" icon="stripe" />
            </div>
          </GridItem>

          {/* Cloud & Infrastructure */}
          <GridItem 
            title="Cloud & Infra" 
            subtitle="DevOps & Database" 
            icon={<Cloud className="w-6 h-6" />}
            className="md:col-span-2"
          >
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillPill name="Docker" icon="docker" />
              <SkillPill name="AWS" icon="amazonaws" />
              <SkillPill name="GCP" icon="googlecloud" />
              <SkillPill name="Firebase" icon="firebase" />
              <SkillPill name="Neon DB" icon="neon" />
              <SkillPill name="Git" icon="git" />
              <SkillPill name="Postman" icon="postman" />
            </div>
          </GridItem>

          {/* Data Science */}
          <GridItem 
            title="Data & AI" 
            subtitle="Machine Learning" 
            icon={<Globe className="w-6 h-6" />}
            className="md:col-span-2"
          >
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillPill name="Python" icon="python" />
              <SkillPill name="PyTorch" icon="pytorch" />
              <SkillPill name="Pandas" icon="pandas" />
              <SkillPill name="NumPy" icon="numpy" />
              <SkillPill name="OpenCV" icon="opencv" />
            </div>
          </GridItem>

        </BentoGrid>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 mb-8 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's build something together.</h2>
          <p className="text-zinc-400 text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:henryleehks@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Get in touch
            <Rocket className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}