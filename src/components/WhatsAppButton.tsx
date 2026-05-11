import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9600295627";
  const message = "Hi Selvarajan, I'm interested in your services!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_35px_rgba(34,197,94,0.9)] transition-all duration-300 group"
      title="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-4xl group-hover:rotate-12 transition-transform" />
      
      {/* Pulse Effect */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 rounded-full bg-green-500 -z-10"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
