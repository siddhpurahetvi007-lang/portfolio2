import React from 'react';

const Achievements = () => {
    const achievementsData = [
        {
            title: "First Place - Global AI Hackathon",
            description: "Developed a winning AI solution out of 500+ competing teams.",
            date: "Nov 2025"
        },
        {
            title: "Academic Excellence Award",
            description: "Awarded for securing top 1% rank in the university for academic year 2024.",
            date: "Aug 2024"
        },
        {
            title: "Open Source Contributor",
            description: "Merged 10+ PRs into popular open-source React libraries.",
            date: "2024 - Present"
        }
    ];

    return (
        <section id="achievements" className="section container">
            <h2 className="text-gradient" style={{ display: 'inline-block', marginBottom: '3rem' }}>Achievements & Awards</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
                {achievementsData.map((item, index) => (
                    <div key={index} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{
                            fontSize: '2rem',
                            color: 'var(--accent-secondary)'
                        }}>
                            🏆
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{item.title}</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', padding: '2px 8px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}>
                                    {item.date}
                                </span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
