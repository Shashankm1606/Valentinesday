import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronRight, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const memoryImage = (filename: string) => `/memories/${encodeURIComponent(filename)}`;

const memories = [
  {
    image: memoryImage("bike-ride.jpg"),
    description:
      "Our ride together day. Wind in our faces, big smiles, and that perfect feeling of going anywhere as long as we're together.",
  },
  {
    image: memoryImage("red-saree.jpg"),
    description:
      "A beautiful traditional-day photo of us - calm, confident, and happy just standing side by side.",
  },
  {
    image: memoryImage("cozy-selfie.jpg"),
    description:
      "That close selfie at home with your smile lighting everything up. One of my favorite simple, real moments.",
  },
  {
    image: memoryImage("garden-date.jpg"),
    description:
      "A soft, peaceful day in the greenery - just us, close and comfortable, exactly how love should feel.",
  },
];

interface MemorySlideshowProps {
  onComplete: () => void;
}

export function MemorySlideshow({ onComplete }: MemorySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < memories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16"
      style={{
        background: "linear-gradient(135deg, #ffc4df 0%, #ffb4d1 50%, #ffa4c8 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          color: "#c41e3a",
          marginBottom: "3rem",
        }}
      >
        Our Precious Moments {"<3"}
      </motion.h2>

      {/* Progress Indicator */}
      <div className="flex gap-2 mb-8">
        {memories.map((_, index) => (
          <motion.div
            key={index}
            className="h-2 rounded-full"
            style={{
              width: "60px",
              backgroundColor:
                index <= currentIndex
                  ? "#c41e3a"
                  : "rgba(196, 30, 58, 0.2)",
            }}
            initial={{ scale: 0.8 }}
            animate={{
              scale: index === currentIndex ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          {/* Memory Card */}
          <div
            className="backdrop-blur-lg bg-white/50 rounded-3xl p-6 md:p-10 shadow-2xl border border-white/60"
            style={{
              boxShadow: "0 20px 60px rgba(196, 30, 58, 0.2)",
            }}
          >
            {/* Image Container */}
            <motion.div
              className="relative rounded-2xl overflow-hidden mb-6"
              style={{
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3] w-full">
                <ImageWithFallback
                  src={memories[currentIndex].image}
                  alt={`Memory ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Decorative corner hearts */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Heart
                      className="text-white drop-shadow-lg"
                      size={32}
                      fill="currentColor"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: "1.8",
                color: "#5a2e3a",
                textAlign: "center",
              }}
            >
              {memories[currentIndex].description}
            </motion.p>
          </div>

          {/* Next Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={handleNext}
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold"
              style={{
                background: "linear-gradient(135deg, #ff6b9d 0%, #c41e3a 100%)",
                boxShadow: "0 8px 24px rgba(196, 30, 58, 0.3)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 32px rgba(196, 30, 58, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {currentIndex < memories.length - 1 ? (
                <>
                  Next Memory
                  <ChevronRight size={24} />
                </>
              ) : (
                <>
                  Read My Letter
                  <Heart size={24} fill="currentColor" />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-300/20"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Heart fill="currentColor" size={40} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
