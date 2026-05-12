import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, Icosahedron } from "@react-three/drei";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated "Sending" Delay for Demo
    setTimeout(() => {
      setIsSent(true);
      setIsLoading(false);
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 uppercase">GET IN TOUCH</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">Let's build something <span className="gradient-text">amazing</span> together.</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Whether you have a specific project in mind or just want to say hi, 
                feel free to reach out. I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-xl text-blue-600 group-hover:neon-border transition-all">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-600 text-xs uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-lg md:text-xl font-bold text-slate-800 break-all">selvarajan0259@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-xl text-blue-600 group-hover:neon-border transition-all">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-600 text-xs uppercase tracking-widest mb-1">Phone</h4>
                  <p className="text-lg md:text-xl font-bold text-slate-800">+91 9600295627</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-xl text-blue-600 group-hover:neon-border transition-all">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-600 text-xs uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-lg md:text-xl font-bold text-slate-800">Tiruvannamalai, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 h-[300px] w-full">
              <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} color="#3b82f6" />
                <Float speed={3} rotationIntensity={2} floatIntensity={2}>
                  <Icosahedron args={[1, 1]}>
                    <MeshWobbleMaterial color="#3b82f6" speed={2} factor={0.6} wireframe />
                  </Icosahedron>
                </Float>
              </Canvas>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-10 shadow-lg relative"
          >
            <AnimatePresence>
              {isSent && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl rounded-2xl p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,197,94,0.3)]"
                  >
                    <FaCheckCircle className="text-5xl text-green-500" />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-black text-slate-900 mb-4 tracking-tight"
                  >
                    MESSAGE RECEIVED!
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-600 text-lg max-w-xs leading-relaxed"
                  >
                    Thanks for reaching out! I'll get back to you personally within 24 hours.
                  </motion.p>
                  
                  <motion.button 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    onClick={() => setIsSent(false)}
                    className="mt-10 px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-slate-200"
                  >
                    Got it, thanks!
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-slate-600 tracking-widest">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:border-blue-600 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-slate-600 tracking-widest">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:border-blue-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-slate-600 tracking-widest">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help?"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:border-blue-600 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-slate-600 tracking-widest">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:border-blue-600 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-slate-900 text-white font-black rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>SENDING... <FaSpinner className="animate-spin" /></>
                ) : (
                  <>SEND MESSAGE <FaPaperPlane /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default Contact;
