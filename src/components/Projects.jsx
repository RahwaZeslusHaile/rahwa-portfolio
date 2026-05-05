import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'LunchFlow',
    description: 'A full-stack lunch order management system with database optimizations. Built for the CodeYourFuture community.',
    image: '/images/lunchflow.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Coolify'],
    githubLink: 'https://github.com/RahwaZeslusHaile/LunchFlow'
  },
  {
    title: 'Events Platform',
    description: 'A comprehensive platform for discovering and managing events. Features secure authentication and real-time updates.',
    image: '/images/events.png',
    tags: ['React', 'Full-Stack', 'UI/UX'],
    githubLink: 'https://github.com/RahwaZeslusHaile/Events-platform'
  },
  {
    title: 'Real-time Chat App',
    description: 'A responsive real-time messaging application using long-polling for instant communication without WebSockets.',
    image: '/images/chat.png',
    tags: ['React', 'Long-polling', 'FastAPI','websockets','python'],
    githubLink: 'https://github.com/RahwaZeslusHaile/React-chat-app'
  },
  {
    title: 'Budgee',
    description: 'A personal finance frontend dashboard to track expenses and manage budgets effectively with beautiful visualizations.',
    image: '/images/budgee.png',
    tags: ['React', 'Dashboard', 'Data Viz'],
    githubLink: 'https://github.com/Max1357531/Budgee-App-Fe'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title fade-in-up">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
