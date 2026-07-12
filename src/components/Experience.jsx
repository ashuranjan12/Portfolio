import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { portfolioData as data } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="experience-grid">
        <div>
          <SectionHeading eyebrow="05 · Journey" title="Growing with every build." />
          <Reveal>
            <p className="body-copy">I care about the small decisions that make a site feel considered: a swift load, a useful state, and a layout that holds up everywhere.</p>
          </Reveal>
        </div>

        <Reveal className="timeline">
          <div className="timeline-line" />
          <article>
            <div className="timeline-dot" />
            <p>{data.experience.period}</p>
            <h3>{data.experience.title}</h3>
            <span>{data.experience.text}</span>
            <div className="timeline-pills">
              <span>React.js</span>
              <span>WordPress</span>
              <span>Shopify</span>
              <span>APIs</span>
            </div>
          </article>

          <article className="education-card">
            <GraduationCap />
            <p>Education</p>
            <h3>{data.education}</h3>
            <span>{data.university}</span>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
