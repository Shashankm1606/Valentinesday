import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { useState } from "react";

interface EnvelopeSectionProps {
  onOpen: () => void;
}

export function EnvelopeSection({ onOpen }: EnvelopeSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
      style={{
        background: "linear-gradient(135deg, #ffe4f1 0%, #ffd4e8 50%, #ffc4df 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            color: "#c41e3a",
            marginBottom: "1rem",
          }}
        >
          Our Journey Together 💕
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#7d3a4a",
          }}
        >
          Click the envelope to unlock our precious memories
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05, y: -10 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="cursor-pointer relative"
      >
        {/* Envelope Container */}
        <div className="relative w-80 h-52 md:w-96 md:h-60">
          {/* Envelope Body */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #ff6b9d 0%, #c41e3a 100%)",
              boxShadow: isHovered
                ? "0 20px 60px rgba(196, 30, 58, 0.4)"
                : "0 10px 40px rgba(196, 30, 58, 0.3)",
            }}
            animate={{
              boxShadow: isHovered
                ? "0 20px 60px rgba(196, 30, 58, 0.4)"
                : "0 10px 40px rgba(196, 30, 58, 0.3)",
            }}
          >
            {/* Decorative Heart */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <Mail size={64} className="text-white/80" />
              </motion.div>
            </div>
          </motion.div>

          {/* Envelope Flap */}
          <motion.div
            className="absolute inset-x-0 top-0 h-32 origin-top"
            style={{
              background: "linear-gradient(135deg, #c41e3a 0%, #a01828 100%)",
              clipPath: "polygon(0 0, 50% 70%, 100% 0)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            animate={{
              rotateX: isHovered ? -25 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Seal */}
          <motion.div
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10"
            style={{
              background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
              boxShadow: "0 4px 15px rgba(255, 215, 0, 0.5)",
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl">💌</span>
          </motion.div>
        </div>

        {/* Floating sparkles */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-400"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [-20, -40],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                ✨
              </motion.div>
            ))}
          </>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-red-400"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.1rem",
        }}
      >
        Click to open 💝
      </motion.p>
    </section>
  );
}
