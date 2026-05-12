import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import bcarImg from "./Bcar.png";
import karpagamImg from "./karpagam.png";
import murugaiyanImg from "./murugaiyan.png";
import psgalleryImg from "./psgallery.png";

const projects = [
  {
    title: "Bcar Car Rental",
    description: "A premium car rental platform featuring a modern booking system, real-time vehicle availability, and a sleek user interface.",
    image: bcarImg,
    tags: ["React", "Vite", "Tailwind", "UI/UX"],
    github: "https://github.com/selvarajane/b_car.git",
    live: "https://bcar-two.vercel.app/"
  },
  {
    title: "Sri Karpagam Jewellers",
    description: "An elegant e-commerce platform for a traditional jewelry store, featuring product galleries, detailed craftsmanship showcases, and a seamless shopping experience.",
    image: karpagamImg,
    tags: ["React", "Node.js", "MongoDB", "E-commerce"],
    github: "https://github.com/selvarajane/karpagam.git",
    live: "https://karpagam-hazel.vercel.app/"
  },
  {
    title: "SMMMS School Management",
    description: "A comprehensive management system designed to streamline school operations, from student tracking to administrative tasks.",
    image: murugaiyanImg,
    tags: ["React", "Tailwind", "Firebase", "Dashboard"],
    github: "https://github.com/selvarajane/SMMMS-SCHOOL.git",
    live: "https://smmms-school.vercel.app/"
  },
  {
    title: "Ps Gallery",
    description: "A comprehensive management system designed to streamline school operations, from student tracking to administrative tasks.",
    image: psgalleryImg,
    tags: ["React", "Tailwind", "Firebase", "Dashboard"],
    github: "https://github.com/selvarajane/psgallery.git",
    live: "https://psgallery.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px), radial-gradient(#3b82f6 0.5px, #f8fafc 0.5px)`,
             backgroundSize: `20px 20px`,
             backgroundPosition: `0 0, 10px 10px`
           }} 
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 uppercase">FEATURED PROJECTS</h2>
            <div className="w-20 h-1 bg-blue-600" />
          </div>
          <p className="text-slate-700 max-w-md font-medium">
            A collection of my recent work in development and design,
            focusing on modern web technologies and immersive experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="glass-card group overflow-hidden bg-white border-2 border-violet-600/80 hover:border-blue-600 shadow-xl hover:shadow-violet-500/20 transition-all duration-500 rounded-3xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a href={project.github} className="p-3 bg-white/20 rounded-full hover:bg-white/60 transition-colors text-white">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a href={project.live} className="p-3 bg-white/20 rounded-full hover:bg-white/60 transition-colors text-white">
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-blue-600 font-bold px-2 py-1 bg-blue-50 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
