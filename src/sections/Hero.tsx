import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PresentationControls } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-20 lg:pt-0">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm"
          >
            Welcome to my universe
          </motion.p>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 text-slate-900 leading-none">
            HI, I'M <span className="gradient-text">SELVARAJAN E</span>
          </h1>

          <div className="text-xl md:text-3xl text-slate-700 mb-8 min-h-[3rem]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Application Developer",
                2000,
                "Creative Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-700 text-base md:text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            <b>Full Stack AI Python & Software Developer</b> passionate about developing powerful and scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center text-sm">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 glass border border-gray-200 font-bold rounded-xl hover:neon-border transition-all flex items-center justify-center text-sm">
              Hire Me
            </a>
          </div>

          <div className="flex justify-center lg:justify-start space-x-8 text-2xl text-slate-700">
            <a href="https://github.com/selvarajane" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:scale-110"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/selvarajane/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:scale-110"><FaLinkedin /></a>
            <a href="https://www.instagram.com/sr_offcl_?igsh=cWliNDVmd252aDJs" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors hover:scale-110"><FaInstagram /></a>
          </div>
        </motion.div>

        {/* 3D Visual */}
        <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full relative cursor-grab active:cursor-grabbing order-first lg:order-last">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
            <spotLight position={[0, 5, 0]} intensity={2} />
            
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
            >
              <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <group>
                  {/* Main Core */}
                  <mesh>
                    <octahedronGeometry args={[2, 0]} />
                    <MeshDistortMaterial
                      color="#3b82f6"
                      speed={3}
                      distort={0.4}
                      wireframe
                    />
                  </mesh>
                  
                  {/* Inner Glow */}
                  <mesh scale={0.8}>
                    <torusGeometry args={[1.5, 0.02, 16, 100]} />
                    <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
                  </mesh>

                  {/* Rotating Rings */}
                  <group>
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                      <torusGeometry args={[2.5, 0.01, 16, 100]} />
                      <meshStandardMaterial color="#64748b" transparent opacity={0.5} />
                    </mesh>
                    <mesh rotation={[0, Math.PI / 2, 0]}>
                      <torusGeometry args={[2.8, 0.01, 16, 100]} />
                      <meshStandardMaterial color="#64748b" transparent opacity={0.5} />
                    </mesh>
                  </group>
                </group>
              </Float>
            </PresentationControls>
          </Canvas>

          {/* Decorative gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-neon-blue/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] -z-10 delay-700" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-blue rounded-full" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
