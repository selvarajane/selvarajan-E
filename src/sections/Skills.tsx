import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaPalette, FaDatabase, FaCloud, FaReact, FaNodeJs, FaPython, FaSwift, FaFigma, FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiDocker, SiFirebase } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "Express", icon: <SiNextdotjs /> },
      { name: "REST APIs", icon: <FaServer /> },
    ],
    color: "from-emerald-600 to-teal-500"
  },
  {
    title: "Mobile Application",
    icon: <FaMobileAlt />,
    skills: [
      { name: "React Native", icon: <FaReact className="text-blue-400" /> },
      { name: "iOS (Swift)", icon: <FaSwift className="text-orange-500" /> },
      { name: "Android", icon: <FaMobileAlt /> },
    ],
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette />,
    skills: [
      { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
      { name: "Design Systems", icon: <FaPalette /> },
    ],
    color: "from-orange-600 to-yellow-500"
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
    color: "from-red-600 to-rose-500"
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud />,
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    ],
    color: "from-indigo-600 to-blue-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px), radial-gradient(#3b82f6 0.5px, #f8fafc 0.5px)`,
             backgroundSize: `20px 20px`,
             backgroundPosition: `0 0, 10px 10px`
           }} 
      />
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">TECHNICAL EXPERTISE</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 group border-2 border-violet-600/80 hover:border-blue-600 flex flex-col h-full relative z-10 transition-all duration-500 shadow-md"
            >
              <div className={`text-4xl mb-6 bg-gradient-to-br ${category.color} bg-clip-text text-transparent inline-block transition-transform group-hover:scale-110 w-fit mx-auto`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-slate-800">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border-2 border-violet-600/80 shadow-sm group/skill hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all aspect-square"
                  >
                    <span className="text-2xl group-hover/skill:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
