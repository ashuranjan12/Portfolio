import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialIcon({ kind }) {
  if (kind === 'github') return <Github />;
  if (kind === 'linkedin') return <Linkedin />;
  return <Mail />;
}
