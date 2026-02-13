import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function MusicToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    // Using a romantic background music from a free source
    // This is a placeholder - you can replace with your own music file
    audio.src = "https://www.bensound.com/bensound-music/bensound-romantic.mp3";
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch((err) => {
          console.log("Audio play failed:", err);
        });
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/40 cursor-pointer"
      style={{
        background: "linear-gradient(135deg, rgba(255, 107, 157, 0.9) 0%, rgba(196, 30, 58, 0.9) 100%)",
        boxShadow: "0 8px 24px rgba(196, 30, 58, 0.4)",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 12px 32px rgba(196, 30, 58, 0.5)",
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      title={isMuted ? "Play romantic music" : "Pause music"}
    >
      {isMuted ? (
        <VolumeX className="text-white" size={24} />
      ) : (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          <Volume2 className="text-white" size={24} />
        </motion.div>
      )}
    </motion.button>
  );
}
