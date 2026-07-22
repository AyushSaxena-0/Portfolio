import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MATH_TOKENS = ['∑', 'λ', 'AI', '{}', '<>', 'Tensor', '∇', '∫', 'σ', 'W_x'];

export const AiBackgroundSystem: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate 26 floating glowing particles positioned mostly on the right side (40% - 98%)
  const particles = Array.from({ length: 26 }).map((_, i) => ({
    id: i,
    size: (i % 4) + 2,
    x: 42 + ((i * 37) % 55),
    y: (i * 47) % 95,
    duration: 10 + (i % 8) * 3,
    delay: (i % 5) * 1.2,
    color: i % 3 === 0 ? 'rgba(37,99,235,0.6)' : i % 3 === 1 ? 'rgba(6,182,212,0.6)' : 'rgba(139,92,246,0.5)'
  }));

  // Generate 28 neural network nodes positioned mostly on the right side
  const neuralNodes = Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    cx: 40 + ((i * 2.1) % 58),
    cy: ((i * 19) % 90) + 5,
    opacity: (i % 3 === 0 ? 0.15 : 0.08)
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* LAYER 1: Dual-Zone Smooth Gradient Blend Canvas (Left Light ➔ Right Dark AI) */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg, 
              rgba(255, 255, 255, 0.98) 0%, 
              rgba(252, 253, 255, 0.95) 35%, 
              rgba(245, 249, 255, 0.70) 55%, 
              rgba(10, 14, 26, 0.65) 75%, 
              rgba(10, 14, 26, 0.98) 100%
            )
          `
        }}
      />

      {/* LAYER 2: GPU Radial Glow Orbs (Positioned strictly behind the Right GPU Panel) */}
      <div 
        className="absolute top-1/4 right-[-5%] w-[800px] h-[800px] rounded-full blur-[140px]"
        style={{ background: 'rgba(37,99,235,0.22)' }}
      />
      <div 
        className="absolute top-1/3 right-[10%] w-[650px] h-[650px] rounded-full blur-[130px]"
        style={{ background: 'rgba(6,182,212,0.18)' }}
      />
      <div 
        className="absolute bottom-10 right-[5%] w-[750px] h-[750px] rounded-full blur-[150px]"
        style={{ background: 'rgba(139,92,246,0.16)' }}
      />

      {/* LAYER 3: Engineering Grid Pattern (Masked to fade toward left reading area) */}
      <motion.div 
        animate={{ x: [0, 4, 0], y: [0, 4, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,1) 70%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,1) 70%)'
        }}
      />

      {/* LAYER 4: Floating Particles (Clustered on the right side) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: ['0%', '-30%', '0%'],
            x: ['0%', '15%', '0%'],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: '50%',
            boxShadow: `0 0 10px ${p.color}`
          }}
        />
      ))}

      {/* LAYER 5: Animated Neural Network Graph (Fades out toward left) */}
      <svg className="absolute inset-0 w-full h-full">
        {neuralNodes.map((node, idx) => {
          const nextNode = neuralNodes[(idx + 3) % neuralNodes.length];
          return (
            <g key={idx}>
              <line
                x1={`${node.cx}%`}
                y1={`${node.cy}%`}
                x2={`${nextNode.cx}%`}
                y2={`${nextNode.cy}%`}
                stroke="#3B82F6"
                strokeWidth="1"
                strokeOpacity={node.opacity}
              />
              <circle
                cx={`${node.cx}%`}
                cy={`${node.cy}%`}
                r="3"
                fill="#14B8A6"
                fillOpacity={node.opacity + 0.1}
              />
            </g>
          );
        })}
      </svg>

      {/* LAYER 6: Breathing Ambient GPU Glow */}
      <motion.div 
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[280px] right-[8%] w-[580px] h-[420px] rounded-full blur-[120px]"
        style={{ background: 'rgba(37,99,235,0.20)' }}
      />

      {/* MOUSE SPOTLIGHT (Subtle Cursor Glow) */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[90px] transition-transform duration-300 ease-out"
        style={{
          left: `${mousePos.x - 200}px`,
          top: `${mousePos.y - 200}px`,
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0.04) 50%, transparent 80%)'
        }}
      />

      {/* MICRO DETAILS: Floating Math & AI Tokens on Right Side */}
      {MATH_TOKENS.map((token, tIdx) => (
        <motion.span
          key={tIdx}
          animate={{
            y: ['0px', '-25px', '0px'],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 10 + (tIdx % 5) * 2,
            repeat: Infinity,
            delay: tIdx * 1.2,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${50 + ((tIdx * 9 + 5) % 45)}%`,
            top: `${(tIdx * 17 + 8) % 90}%`,
            fontSize: '12px',
            fontFamily: 'Space Grotesk, monospace',
            fontWeight: 700,
            color: '#14B8A6'
          }}
        >
          {token}
        </motion.span>
      ))}

    </div>
  );
};
