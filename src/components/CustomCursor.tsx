import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Premium custom cursor:
 * • Precise glowing dot  (no lag)
 * • Trailing ring        (spring physics)
 * • Spotlight glow       (very smooth spring)
 * • Hover states on interactive elements (links, buttons, inputs)
 * • Click burst animation
 * • Hidden on touch devices
 */
export default function CustomCursor() {
  // Raw position
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Dot follows instantly (stiff spring ≈ instant)
  const dotX = useSpring(rawX, { stiffness: 2000, damping: 80, mass: 0.1 });
  const dotY = useSpring(rawY, { stiffness: 2000, damping: 80, mass: 0.1 });

  // Ring lags behind (loose spring)
  const ringX = useSpring(rawX, { stiffness: 180, damping: 28, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 180, damping: 28, mass: 0.6 });

  // Spotlight follows very smoothly
  const glowX = useSpring(rawX, { stiffness: 60, damping: 20, mass: 1 });
  const glowY = useSpring(rawY, { stiffness: 60, damping: 20, mass: 1 });

  const [hovered, setHovered]   = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible]   = useState(false);
  const [isTouch, setIsTouch]   = useState(false);

  // Track whether we're on a touch device
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest('a, button, input, textarea, select, [role="button"], label');
      setHovered(!!interactive);
    };

    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mouseover',  onEnter);
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnterWindow);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseover',  onEnter);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnterWindow);
    };
  }, [rawX, rawY, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* ── Global style: hide default cursor ── */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* ── Spotlight glow (large ambient blob) ── */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9990]"
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(500px circle at ${glowX}px ${glowY}px, rgba(37,99,235,0.07) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)`,
        }}
      />

      {/* ── Trailing ring ── */}
      <motion.div
        className="pointer-events-none fixed z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width:  hovered ? 52 : clicking ? 20 : 36,
          height: hovered ? 52 : clicking ? 20 : 36,
        }}
        transition={{ opacity: { duration: 0.2 }, width: { duration: 0.18 }, height: { duration: 0.18 } }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{
            borderColor: hovered
              ? 'rgba(99,102,241,0.9)'
              : clicking
              ? 'rgba(96,165,250,0.9)'
              : 'rgba(96,165,250,0.5)',
            boxShadow: hovered
              ? '0 0 16px 2px rgba(99,102,241,0.35)'
              : clicking
              ? '0 0 12px 2px rgba(59,130,246,0.5)'
              : '0 0 8px 1px rgba(59,130,246,0.2)',
            scale: clicking ? 0.85 : 1,
          }}
          transition={{ duration: 0.15 }}
          style={{ border: '1.5px solid', borderRadius: '50%' }}
        />
      </motion.div>

      {/* ── Precise dot ── */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity:  visible ? 1 : 0,
          width:    hovered ? 8 : clicking ? 10 : 6,
          height:   hovered ? 8 : clicking ? 10 : 6,
          backgroundColor: hovered
            ? 'rgba(129,140,248,1)'
            : clicking
            ? 'rgba(96,165,250,1)'
            : 'rgba(255,255,255,1)',
          boxShadow: hovered
            ? '0 0 10px 3px rgba(99,102,241,0.7)'
            : clicking
            ? '0 0 14px 4px rgba(59,130,246,0.8)'
            : '0 0 6px 2px rgba(255,255,255,0.4)',
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
