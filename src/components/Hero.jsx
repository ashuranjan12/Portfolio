import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Sparkles, MousePointer2, Code2 } from 'lucide-react';
import ButtonLink from './ButtonLink';
import SocialIcon from './SocialIcon';
import { portfolioData as data } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }}>
          <Sparkles size={15} /> Available for meaningful projects
        </motion.p>
        <motion.p className="intro-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.38 }}>
          Hi, I’m
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.42, duration: 0.8 }}>
          Ashutosh<br />
          <span>Ranjan.</span>
        </motion.h1>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.62 }}>
          Frontend Developer <span>·</span> UI thinker
        </motion.h2>
        <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.76 }}>
          {data.intro}
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }}>
          <ButtonLink href="#contact" className="primary">
            Start a project <ArrowUpRight size={18} />
          </ButtonLink>
          <ButtonLink href="/resume.pdf" className="secondary" disabled={!data.resumeAvailable} title="Résumé download will be available soon">
            <Download size={17} /> Résumé soon
          </ButtonLink>
        </motion.div>

        <motion.div className="social-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.08 }}>
          {data.social.map((item) =>
            item.url ? (
              <a href={item.url} key={item.label} aria-label={item.label} target={item.kind !== 'mail' ? '_blank' : undefined} rel="noreferrer">
                <SocialIcon kind={item.kind} />
              </a>
            ) : (
              <span key={item.label} className="social-disabled" aria-label={`${item.label} link coming soon`} title={`${item.label} coming soon`}>
                <SocialIcon kind={item.kind} />
              </span>
            ),
          )}
        </motion.div>
      </div>

      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.28, duration: 0.9 }}>
        <div className="profile-ring ring-a" />
        <div className="profile-ring ring-b" />
        <motion.div className="profile-monogram" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}>
          <div className="mini-spark one" />
          <div className="mini-spark two" />
          <span>AR</span>
        </motion.div>
        <div className="profile-tag">
          <span className="status-dot" /> 2 years of craft
        </div>
        <div className="floating-chip chip-one">
          <Code2 size={17} /> React
        </div>
        <div className="floating-chip chip-two">
          <MousePointer2 size={17} /> Detail-led
        </div>
      </motion.div>

      <a className="scroll-indicator" href="#about">
        <span>Scroll to explore</span>
        <ArrowDown size={17} />
      </a>
    </section>
  );
}
