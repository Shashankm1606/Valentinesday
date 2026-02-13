import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      style={{
        background: "linear-gradient(135deg, #ffeef8 0%, #ffe4f1 50%, #ffd4e8 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated Hearts in Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart fill="currentColor" size={40 + Math.random() * 40} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <Heart
            className="mx-auto text-red-500 mb-4"
            size={60}
            fill="currentColor"
          />
        </motion.div>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-6"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            color: "#c41e3a",
            textShadow: "2px 2px 8px rgba(196, 30, 58, 0.3)",
            lineHeight: "1.2",
          }}
        >
          ❤️ Happy Valentine's Day, Love ❤️
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8 flex items-center justify-center gap-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.25rem, 4vw, 2rem)",
            color: "#d84b6d",
          }}
        >
          Celebrating our 5th Valentine's Day together
          <Sparkles className="text-yellow-500" size={28} />
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="backdrop-blur-md bg-white/40 rounded-3xl p-8 shadow-2xl border border-white/50"
          style={{
            boxShadow: "0 8px 32px rgba(196, 30, 58, 0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              lineHeight: "1.8",
              color: "#7d3a4a",
            }}
          >
            Love is not just a feeling, it's a promise that grows stronger with
            every sunrise and sunset we share. Through laughter and tears,
            through silence and conversations, through distance and closeness —
            we've built a universe of our own. Every memory we've created is a
            star in the constellation of us. Valentine's Day is not just about
            celebrating love; it's about celebrating the journey, the growth,
            the transformation we've experienced together. It's about
            recognizing that the best part of my life is the part I share with
            you. Here's to our connection, our bond, and the beautiful future
            that awaits us. ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-red-400"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M12 5L12 19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <p
            className="mt-2 text-red-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Scroll to explore our memories
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
