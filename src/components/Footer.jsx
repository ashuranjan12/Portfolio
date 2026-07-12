import { ArrowDown } from 'lucide-react';
import SocialIcon from './SocialIcon';
import { portfolioData as data } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="wordmark">
          AR<span>.</span>
        </a>
        <p>Thoughtful frontend work, from first pixel to final polish.</p>
        <a href="#home" className="back-top">
          Back to top <ArrowDown />
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ashutosh Ranjan. Made with care.</span>
        <div>
          {data.social.filter((item) => item.url).map((item) => (
            <a key={item.label} href={item.url} aria-label={item.label}>
              <SocialIcon kind={item.kind} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
