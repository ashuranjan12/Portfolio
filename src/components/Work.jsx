import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectActions from './ProjectActions';
import { portfolioData as data } from '../data/portfolio';

export default function Work() {
  return (
    <section id="work" className="section">
      <SectionHeading eyebrow="04 · Selected work" title="Designed with intent, delivered with care." text="Concept projects that illustrate the kinds of experiences I enjoy bringing to life." />

      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="project-card">
              <div className={`project-image ${project.gradient}`}>
                <div className="project-browser"><span /><span /><span /></div>
                <div className="project-art">
                  <small>{project.type}</small>
                  <strong>
                    {project.title.split(' ')[0]}<br />
                    {project.title.split(' ').slice(1).join(' ')}
                  </strong>
                  <i />
                </div>
                <div className="project-number">0{index + 1}</div>
              </div>

              <div className="project-content">
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <ProjectActions project={project} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
