import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "AI Python Fullstack",
    issuer: "Vetri Technology Solutions",
    date: "Oct 2025 - Apr 2026",
    image: "src/sections/cert1.png",
    link: "#",
    icon: <FaCertificate className="text-blue-600" />,
    grade: "A Grade (87.60%)"
  },
  {
    title: "AI Python Fullstack Intern",
    issuer: "Vetri IT Systems Pvt Ltd",
    date: "Nov 2025 - Mar 2026",
    image: "src/sections/cert2.png",
    link: "#",
    icon: <FaCertificate className="text-emerald-600" />,
    grade: "Internship"
  },
  {
    title: "Web Developer - Advanced",
    issuer: "TN Skill Corporation",
    date: "Mar 2026",
    image: "src/sections/cert3.png",
    link: "#",
    icon: <FaCertificate className="text-orange-600" />,
    grade: "Skill Competency"
  },
  {
    title: "Python Fullstack Development",
    issuer: "Code Pilot",
    date: "Jul 2025 - Dec 2025",
    image: "src/sections/cert4.png",
    link: "#",
    icon: <FaCertificate className="text-indigo-600" />,
    grade: "Completion"
  },
  {
    title: "Frontend Developer Intern",
    issuer: "Zop Technologys",
    date: "Jan 2026 - Feb 2026",
    image: "src/sections/cert5.png",
    link: "#",
    icon: <FaCertificate className="text-cyan-600" />,
    grade: "Internship"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-white relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px), radial-gradient(#3b82f6 0.5px, #ffffff 0.5px)`,
             backgroundSize: `20px 20px`,
             backgroundPosition: `0 0, 10px 10px`
           }} 
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">CERTIFICATIONS & INTERNSHIPS</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group overflow-hidden bg-white border-2 border-violet-600/80 hover:border-blue-600 shadow-sm hover:shadow-xl transition-all duration-500 rounded-3xl"
            >
              {/* Full Certificate View (Directly Shown) */}
              <div className="relative aspect-[1/1.1] overflow-hidden bg-slate-50 border-b border-slate-100 p-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain drop-shadow-md transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format&fit=crop"; 
                  }}
                />
              </div>

              <div className="p-8 bg-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{cert.grade}</p>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="text-2xl text-blue-600">
                    {cert.icon}
                  </div>
                </div>
                
                <div className="space-y-1 mb-6">
                  <p className="text-slate-700 font-bold text-sm">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs font-medium">{cert.date}</p>
                </div>
                
                <div className="pt-5 border-t border-slate-50">
                  <a 
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors"
                  >
                    Details <FaExternalLinkAlt className="text-[8px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
