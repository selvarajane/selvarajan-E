import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaNetworkWired, FaTools, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    description: "Building high-performance, responsive websites using React, Next.js, and modern CSS frameworks."
  },
  {
    title: "Mobile Apps",
    icon: <FaMobileAlt />,
    description: "Creating cross-platform mobile applications that provide native-like experiences on iOS and Android."
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: "Designing intuitive user interfaces and seamless user experiences with a focus on modern aesthetics."
  },
  {
    title: "IT Solutions",
    icon: <FaNetworkWired />,
    description: "Comprehensive PC building, hardware debugging, and network optimization for business and personal use."
  },
  {
    title: "Custom Software",
    icon: <FaCogs />,
    description: "Developing bespoke software solutions tailored to solve specific business problems and optimize workflows."
  },
  {
    title: "Technical Support",
    icon: <FaTools />,
    description: "Providing ongoing hardware maintenance, troubleshooting, and system-wide performance optimization."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
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
          <h2 className="text-4xl font-bold mb-4 text-slate-900 uppercase">MY SERVICES</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-slate-700 max-w-2xl mx-auto font-medium">
            I offer a wide range of creative and technical services to help you bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 group border-2 border-violet-600/80 hover:border-blue-600 flex flex-col h-full bg-white/80 backdrop-blur-sm transition-all duration-500 rounded-3xl shadow-md"
            >
              <div className="text-4xl text-blue-600 mb-8 group-hover:scale-110 transition-transform w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tighter text-slate-900 uppercase">{service.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
