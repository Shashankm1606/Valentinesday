import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

const letterContent = `Heyy Handi ❤️

It's been 5 years since we've been together in this beautiful relationship. For me, these 5 years felt like a breeze. Every happiness we shared, every sorrow, every pain, every problem, every smile — all of it was worth it because I had you by my side.

You came into my life like a gentle sunrise, slowly brightening every corner of my world. Before you, I didn't know that love could be this profound, this transformative, this real. You changed me in ways I never thought possible. You taught me patience, kindness, and what it means to truly care for someone beyond myself.

I am endlessly grateful for every moment we've shared — the quiet mornings, the late-night conversations, the silly fights, and the beautiful reconciliations. Thank you for believing in me when I doubted myself. Thank you for holding my hand through storms and celebrating with me in sunshine.

As I look toward the future, all I see is us — growing old together, building our dreams brick by brick, creating wealth not just in material terms but in memories, laughter, and love. I want to wake up next to you for the rest of my life. I want to be your support, your shelter, your strength, just as you are mine.

I promise to stand by you in every situation life throws our way. In happiness and in hardship, in health and in sickness, in abundance and in scarcity — I will be there. You are my peace when the world is chaotic, and my strength when I feel weak.

You are the poetry I could never write, the melody I could never compose, and the dream I never want to wake up from. You are my home, my heart, my everything.

I hope I get to spend the rest of my life with you, grow old with you, build dreams, wealth, happiness, and create a lifetime of beautiful memories together.

You are my today, my tomorrow, and my forever.

With all my love,
Shashank M ❤️`;

export function LoveLetter() {
  const [displayedText, setDisplayedText] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < letterContent.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + letterContent[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 30); // Typewriter speed
      return () => clearTimeout(timeout);
    } else {
      // Show confetti after letter is complete
      setTimeout(() => setShowConfetti(true), 500);
    }
  }, [currentIndex]);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16"
      style={{
        background: "linear-gradient(135deg, #ffa4c8 0%, #ff94be 50%, #ff84b4 100%)",
      }}
    >
      {/* Confetti Hearts */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
                fontSize: `${Math.random() * 20 + 20}px`,
              }}
              initial={{ y: 0, opacity: 1, rotate: 0 }}
              animate={{
                y: window.innerHeight + 100,
                opacity: [1, 1, 0],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            >
              {["❤️", "💕", "💖", "💗", "💝", "💓"][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        {/* Letter Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
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
              className="mx-auto mb-4 text-red-600"
              size={60}
              fill="currentColor"
            />
          </motion.div>
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              color: "#c41e3a",
            }}
          >
            A Letter From My Heart
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Sparkles className="text-yellow-500" size={24} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "#7d3a4a",
              }}
            >
              For the love of my life
            </p>
            <Sparkles className="text-yellow-500" size={24} />
          </div>
        </motion.div>

        {/* Letter Paper */}
        <motion.div
          className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/60 relative overflow-hidden"
          style={{
            boxShadow: "0 25px 70px rgba(196, 30, 58, 0.25)",
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Decorative paper texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 35px,
                rgba(196, 30, 58, 0.3) 35px,
                rgba(196, 30, 58, 0.3) 36px
              )`,
            }}
          />

          {/* Letter Content */}
          <div className="relative z-10">
            <pre
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                lineHeight: "2",
                color: "#4a2533",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-red-500 ml-1"
              />
            </pre>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 text-red-300/30">
            <Heart fill="currentColor" size={32} />
          </div>
          <div className="absolute top-4 right-4 text-red-300/30">
            <Heart fill="currentColor" size={32} />
          </div>
          <div className="absolute bottom-4 left-4 text-red-300/30">
            <Heart fill="currentColor" size={32} />
          </div>
          <div className="absolute bottom-4 right-4 text-red-300/30">
            <Heart fill="currentColor" size={32} />
          </div>
        </motion.div>

        {/* Footer */}
        {currentIndex >= letterContent.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center mt-12"
          >
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#c41e3a",
              }}
            >
              Forever Yours 💍
            </p>
            <motion.div
              className="mt-6"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.2rem",
                  color: "#7d3a4a",
                }}
              >
                Happy Valentine's Day, My Love ❤️✨
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Background decorative hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-200/20"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 20, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Heart fill="currentColor" size={50 + i * 5} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
