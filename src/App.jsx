import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sections = ['home', 'about', 'skills', 'services', 'work', 'experience', 'contact'];

function BackgroundScene() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <div className="particle p-one" />
      <div className="particle p-two" />
      <div className="particle p-three" />
      <div className="noise" />
    </div>
  );
}

function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(finePointer.matches && !reduceMotion);
    update();
    finePointer.addEventListener('change', update);
    return () => finePointer.removeEventListener('change', update);
  }, [reduceMotion]);

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-glow"
      aria-hidden="true"
      onPointerMove={() => {}}
      ref={(node) => {
        if (!node || node.dataset.bound) return;
        node.dataset.bound = 'true';
        const move = (event) => {
          node.style.transform = `translate(${event.clientX - 13}px, ${event.clientY - 13}px)`;
        };
        window.addEventListener('pointermove', move);
        node.cleanup = () => window.removeEventListener('pointermove', move);
      }}
    />
  );
}

function Loader({ onDone }) {
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => setProgress((v) => Math.min(v + 8, 100)), 80);
    const done = setTimeout(onDone, 1200);
    return () => {
      clearInterval(timer);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <motion.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.45 } }}>
      <div className="loader-mark">AR</div>
      <p>Building a better web experience</p>
      <div className="progress-track">
        <span style={{ width: `${progress}%` }} />
      </div>
      <button onClick={onDone}>Skip intro</button>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      }),
      { rootMargin: '-38% 0px -55% 0px' },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      <BackgroundScene />
      <Cursor />
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <div className={loading ? 'app app-loading' : 'app'}>
        <Header active={active} open={menuOpen} setOpen={setMenuOpen} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Work />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
