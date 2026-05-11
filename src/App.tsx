import Background from "./components/Background";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Force scroll to top on reload
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-black selection:bg-blue-600 selection:text-white">
        <LoadingScreen />
        <Background />
        <Navbar />
        <WhatsAppButton />
        
        <main>
          {[
            { id: "hero", Component: Hero },
            { id: "about", Component: About },
            { id: "services", Component: Services },
            { id: "skills", Component: Skills },
            { id: "projects", Component: Projects },
            { id: "certificates", Component: Certificates },
            { id: "contact", Component: Contact },
          ].map(({ id, Component }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Component />
            </motion.div>
          ))}
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
