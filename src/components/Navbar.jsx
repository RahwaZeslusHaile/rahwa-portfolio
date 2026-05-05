import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      background: isScrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
          Rahwa<span className="gradient-text">.dev</span>
        </a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, transition: '0.2s' }} onMouseOver={(e) => e.target.style.color='var(--accent-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-primary)'}>About</a>
          <a href="#projects" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, transition: '0.2s' }} onMouseOver={(e) => e.target.style.color='var(--accent-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-primary)'}>Projects</a>
          <a href="#contact" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, transition: '0.2s' }} onMouseOver={(e) => e.target.style.color='var(--accent-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-primary)'}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
