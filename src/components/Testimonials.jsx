import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { useEffect, useState } from 'react';
import { portfolioData as data } from '../data/portfolio';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => setCurrent((v) => (v + 1) % data.testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const testimonial = data.testimonials[current];

  return (
    <section className="section testimonials">
      <SectionHeading eyebrow="06 · Kind words" title="Trusted to make the details count." />
      <Reveal>
        <div
          className="testimonial-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="testimonial-quote">“</div>
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              className="testimonial-card"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}</div>
              <blockquote>{testimonial.quote}</blockquote>
              <footer>
                <div className="client-avatar">{testimonial.initials}</div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </footer>
            </motion.article>
          </AnimatePresence>

          <div className="slider-controls">
            <button onClick={() => setCurrent((v) => (v - 1 + data.testimonials.length) % data.testimonials.length)} aria-label="Previous testimonial">
              <ChevronLeft />
            </button>
            <span>{String(current + 1).padStart(2, '0')} / {String(data.testimonials.length).padStart(2, '0')}</span>
            <button onClick={() => setCurrent((v) => (v + 1) % data.testimonials.length)} aria-label="Next testimonial">
              <ChevronRight />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
