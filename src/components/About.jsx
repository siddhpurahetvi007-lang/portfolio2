import React from 'react';

const About = () => {
    const skills = ['React', 'JavaScript', 'Node.js', 'CSS/HTML', 'Kubernetes', 'Docker', 'Python', 'UI/UX Design'];

    return (
        <section id="about" className="section container">
            <h2 className="text-gradient" style={{ display: 'inline-block' }}>About Me</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
                <div>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I'm an aspiring software engineer with a keen eye for design and a strong foundation in modern web technologies. I thrive in environments where I can learn, build, and iterate quickly.
                    </p>
                    <p>
                        Currently, I'm learner and fresher in the tech world, looking to push the boundaries of what I can build and deliver under pressure. My goal is to build products that not only work flawlessly but also provide a delightful user experience.
                    </p>
                </div>
                <div>
                    <h3 style={{ marginBottom: '1.5rem' }}>Technologies I work with:</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                        {skills.map(skill => (
                            <span key={skill} style={{
                                padding: '0.5rem 1rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
