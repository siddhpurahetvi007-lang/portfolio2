import React from 'react';

const Extracurricular = () => {
    const activities = [
        {
            role: "President",
            org: "University Coding Club",
            description: "Organized weekly workshops on web development and algorithms. Hosted a local hackathon with 200+ participants."
        },
        {
            role: "Core Member",
            org: "Technical Communities",
            description: "Active contributor and mentor in various online tech communities, helping beginners get started with open source."
        },
        {
            role: "Volunteer",
            org: "Tech for Good Initiative",
            description: "Developed free websites for local non-profit organizations to help them establish an online presence."
        }
    ];

    return (
        <section id="extracurricular" className="section container">
            <h2 className="text-gradient" style={{ display: 'inline-block', marginBottom: '3rem' }}>Extracurricular Activities</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {activities.map((act, index) => (
                    <div key={index} className="glass-card">
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{act.role}</h3>
                        <p style={{ color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '1rem', fontSize: '0.95rem' }}>{act.org}</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{act.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Extracurricular;
