import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass-card shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 origin-left z-20"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter font-outfit z-50"
        >
          SELVARAJAN E.
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-xs uppercase tracking-[0.2em] font-black text-slate-900 hover:text-blue-600 transition-colors font-outfit"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:block">
          <motion.a
            href="src/sections/Selvarajan Last Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-xs hover:bg-blue-600 hover:text-white transition-all text-center uppercase tracking-widest font-outfit"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-2 text-slate-900 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors uppercase tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <a
              href="src/sections/Selvarajan Last Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-sm uppercase tracking-widest"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
