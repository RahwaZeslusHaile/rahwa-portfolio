import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tags, githubLink, liveLink, index }) => {
  return (
    <div className={`glass fade-in-up delay-${(index % 3 + 1) * 100}`} style={{
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.2)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
    }}>
      <div style={{ height: '240px', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ fontSize: '0.8rem', padding: '0.2rem 0.8rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--accent-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-primary)'}>
              <FaGithub size={24} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--accent-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-primary)'}>
              <FaExternalLinkAlt size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
