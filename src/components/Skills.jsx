import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { portfolioData as data } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading eyebrow="02 · Capabilities" title="The tools behind the polish." text="A focused stack for shipping thoughtful, resilient digital experiences." />
      <div className="skill-grid">
        {data.skills.map((skill, index) => (
          <Reveal key={skill.name} delay={(index % 4) * 0.06}>
            <article className="skill-card">
              <div className="skill-top">
                <span>{skill.category}</span>
                <strong>{skill.level}%</strong>
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <motion.span initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.12 }} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
