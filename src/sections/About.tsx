import { motion } from "framer-motion";

const profileImg = "src/sections/selvacoat.jpeg"; // Placeholder image

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card p-12 relative"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

          <h2 className="text-4xl font-bold mb-8 tracking-tight">
            <span className="text-blue-600">01.</span> ABOUT ME
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                Hello! I'm <span className="font-bold text-slate-900">SELVARAJAN E</span>, a passionate developer based in Tiruvannamalai, India.
                I enjoy creating things that live on the internet, whether that be websites,
                applications, or anything in between.
              </p>
              <p>
                My journey in tech started with a curiosity for how things work under the hood.
                From building PCs to debugging complex software issues, I've always been
                driven by a desire to solve problems and optimize systems.
              </p>
              <p>
                Today, I specialize in Full Stack Development and Application Development,
                bringing a mix of creative design and technical expertise to every project.
              </p>
              <a 
                href="src/sections/Selvarajan Last Resume.pdf" 
                download="Selvarajan_Resume.pdf"
                className="inline-block px-6 py-3 glass border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all font-bold text-blue-600 text-center"
              >
                Download Resume
              </a>
            </div>

            <div className="relative group">
              <div className="w-full aspect-square rounded-2xl overflow-hidden glass border border-gray-200 relative z-10">
                <img
                  src={profileImg}
                  alt="SELVARAJAN E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "src\sections\About.tsx";
                  }}
                />
              </div>
              <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
