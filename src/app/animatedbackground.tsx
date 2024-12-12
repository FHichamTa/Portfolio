'use client';

import React, { useState, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    top: number;
    speed: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 50 }, (_, index) => ({
        id: index,
        size: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        speed: Math.random() * 20 + 10,
        opacity: Math.random() * 0.3 + 0.1
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] bg-black"
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-purple-500/20 blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            opacity: bubble.opacity,
            animation: `bubble ${bubble.speed}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes bubble {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, -50px) scale(1.2);
          }
          50% {
            transform: translate(50px, 50px) scale(0.8);
          }
          75% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;