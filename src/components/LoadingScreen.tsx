import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="text-6xl font-black text-slate-900 mb-8 tracking-tighter">
              SELVARAJAN E.
            </div>
            
            <div className="w-64 h-1 bg-slate-100 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="mt-4 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-slate-400">
              <span>Initializing Systems</span>
              <span>{progress}%</span>
            </div>
          </motion.div>

          <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.5em] text-slate-300">
            Premium Portfolio 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
