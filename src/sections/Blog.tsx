import { motion } from "framer-motion";

const articles = [
  {
    title: "The Future of Web3 UI/UX",
    date: "May 10, 2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Mastering Three.js with React",
    date: "April 28, 2026",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Optimizing Framer Motion Performance",
    date: "April 15, 2026",
    category: "Development",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">LATEST ARTICLES</h2>
            <div className="w-20 h-1 bg-blue-600" />
          </div>
          <button className="text-blue-600 font-bold hover:underline hidden md:block">View all posts</button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group overflow-hidden bg-white border-slate-200 shadow-sm"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase font-bold text-blue-600 tracking-widest">{article.category}</span>
                  <span className="text-[10px] text-slate-600 uppercase">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <button className="text-sm font-bold border-b border-blue-500/30 pb-1 text-blue-600 group-hover:border-blue-600 transition-all">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
