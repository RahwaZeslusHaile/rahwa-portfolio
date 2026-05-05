import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="section-padding" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="fade-in-up">
          <p style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Hi, my name is
          </p>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
            Rahwa Haile.<br/>
            <span style={{ color: 'var(--text-secondary)' }}>I build things for the web.</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Full-Stack Software Engineer building accessible, human-centered web applications and digital experiences.
          </p>
        </div>

        <div className="fade-in-up delay-100" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">Check out my work!</a>
          <a href="https://linkedin.com/in/rahwa-haile" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem' }}>
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a href="mailto:rahwazeslase@gmail.com" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem' }}>
            <FaEnvelope size={20} /> Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
