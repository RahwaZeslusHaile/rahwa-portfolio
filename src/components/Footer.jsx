import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/RahwaZeslusHaile" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--accent-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/rahwa-haile" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--accent-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:rahwazeslase@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--accent-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>
            <FaEnvelope size={24} />
          </a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Designed & Built by Rahwa Haile &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
