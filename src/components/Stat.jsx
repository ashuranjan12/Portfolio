import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function useCount(target, isActive) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return undefined;
    let frame;
    const started = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      setCount(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, isActive]);

  return count;
}

export default function Stat({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useCount(stat.value, inView);

  return (
    <div className="stat" ref={ref}>
      <strong>{value}{stat.suffix}</strong>
      <span>{stat.label}</span>
    </div>
  );
}
