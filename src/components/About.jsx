import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Stat from './Stat';
import { portfolioData as data } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div>
          <SectionHeading eyebrow="01 · About me" title="Good interfaces feel obvious. Great ones feel inevitable." />
          <Reveal delay={0.08}>
            <p className="body-copy">{data.summary}</p>
            <div className="fact-row">
              <GraduationCap />
              <div>
                <small>Education</small>
                <strong>{data.education}</strong>
                <span>{data.university}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="about-visual" delay={0.12}>
          <div className="quote-card">
            <span>“</span>
            <p>Every interaction is a chance to make someone’s day a little easier.</p>
            <div className="signature">AR</div>
          </div>
          <div className="orbital-line" />
        </Reveal>
      </div>

      <div className="stats-grid">
        {data.stats.map((stat) => (
          <Stat key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
