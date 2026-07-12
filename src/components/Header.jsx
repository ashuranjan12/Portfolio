import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['services', 'Services'], ['work', 'Work'], ['contact', 'Contact']];

export default function Header({ active, open, setOpen }) {
  return (
    <header className="site-header">
      <a href="#home" className="wordmark" aria-label="Ashutosh Ranjan, home">
        AR<span>.</span>
      </a>

      <nav className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        {navItems.map(([id, label]) => (
          <a className={active === id ? 'active' : ''} href={`#${id}`} key={id} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
