import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

export function HeartCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-50 mix-blend-difference"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            {/* Main cursor heart */}
            <motion.div
              className="text-red-400"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              ❤️
            </motion.div>
          </div>
        </motion.div>
      )}

      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
