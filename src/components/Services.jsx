import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { portfolioData as data } from '../data/portfolio';

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading eyebrow="03 · What I do" title="Built to look right. Built to work hard." />
      <div className="services-grid">
        {data.services.map(({ title, text, icon: Icon }, index) => (
          <Reveal key={title} delay={(index % 3) * 0.08}>
            <article className="service-card">
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <span className="service-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact" aria-label={`Ask about ${title}`}>
                Explore service <ArrowUpRight size={16} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
