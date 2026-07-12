import { ExternalLink, Github } from 'lucide-react';

export default function ProjectActions({ project }) {
  return (
    <div className="project-actions">
      {project.github ? (
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub <Github size={15} />
        </a>
      ) : (
        <span title="Project link coming soon" aria-label="GitHub link coming soon">
          GitHub <Github size={15} />
        </span>
      )}
      {project.demo ? (
        <a href={project.demo} target="_blank" rel="noreferrer">
          Live demo <ExternalLink size={15} />
        </a>
      ) : (
        <span title="Live demo coming soon" aria-label="Live demo coming soon">
          Live demo <ExternalLink size={15} />
        </span>
      )}
    </div>
  );
}
