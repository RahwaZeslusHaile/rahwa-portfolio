import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 className="section-title fade-in-up">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="glass fade-in-up delay-100" style={{ padding: '3rem', borderRadius: '16px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:rahwazeslase@gmail.com" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', fontSize: '1.1rem', alignItems: 'center' }}>
            <FaEnvelope size={20} /> Say Hello <FaArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
