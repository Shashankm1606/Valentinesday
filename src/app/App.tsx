import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HeroSection } from "./components/HeroSection";
import { EnvelopeSection } from "./components/EnvelopeSection";
import { MemorySlideshow } from "./components/MemorySlideshow";
import { LoveLetter } from "./components/LoveLetter";
import { FloatingHearts } from "./components/FloatingHearts";
import { MusicToggle } from "./components/MusicToggle";
import { HeartCursor } from "./components/HeartCursor";

export default function App() {
  const [showMemories, setShowMemories] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleEnvelopeOpen = () => {
    setShowMemories(true);
    // Smooth scroll to memories section
    setTimeout(() => {
      const memoriesSection = document.getElementById("memories-section");
      if (memoriesSection) {
        memoriesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleMemoriesComplete = () => {
    setShowLetter(true);
    // Smooth scroll to letter section
    setTimeout(() => {
      const letterSection = document.getElementById("letter-section");
      if (letterSection) {
        letterSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Custom Heart Cursor */}
      <HeartCursor />

      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Music Toggle */}
      <MusicToggle />

      {/* Hero Section */}
      <HeroSection />

      {/* Envelope Section */}
      <EnvelopeSection onOpen={handleEnvelopeOpen} />

      {/* Memory Slideshow */}
      {showMemories && (
        <motion.div
          id="memories-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MemorySlideshow onComplete={handleMemoriesComplete} />
        </motion.div>
      )}

      {/* Love Letter */}
      {showLetter && (
        <motion.div
          id="letter-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <LoveLetter />
        </motion.div>
      )}

      {/* Gradient Overlay for smooth transitions */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: linear-gradient(180deg, #ffeef8 0%, #ffe4f1 100%);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ff6b9d 0%, #c41e3a 100%);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #c41e3a 0%, #a01828 100%);
        }
      `}</style>
    </div>
  );
}
