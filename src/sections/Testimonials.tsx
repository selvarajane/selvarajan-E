import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechNova",
    content: "Selva's ability to turn complex requirements into elegant, high-performance solutions is truly impressive. A top-tier developer.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, CreativeFlow",
    content: "Working with Selva was a game-changer for our project. The attention to detail and design sensibility exceeded our expectations.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Founder, EtherVibe",
    content: "The futuristic UI Selva built for our DAO is simply stunning. It's exactly the vibe we were going for. Highly recommended!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">TESTIMONIALS</h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 relative text-left"
            >
              <FaQuoteLeft className="text-neon-blue text-4xl mb-6 opacity-50" />
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-neon-blue font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
