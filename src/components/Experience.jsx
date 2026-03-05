import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section container" style={{ position: 'relative' }}>
            <div className="bg-glow-2" style={{ bottom: '40%', right: 'auto', left: '-10%' }}></div>
            <h2 className="text-gradient" style={{ display: 'inline-block', marginBottom: '3rem' }}>Experience</h2>

            <div className="glass-card" style={{ maxWidth: '800px', textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>First Year Student & Open to Opportunities</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    As a dedicated first-year computer science student, I am currently focusing on building strong fundamental skills through academic projects, hackathons, and self-directed learning. I am actively seeking my first internship opportunity to apply my skills in a real-world environment.
                </p>
            </div>
        </section>
    );
};

export default Experience;
