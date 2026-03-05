import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech in Computer Science (Microsoft Industry Embedded)",
            institution: "Parul Institute of Technology",
            duration: "First Year Student",
            score: "Present",
            coursework: "Core Engineering, Problem Solving, Programming Fundamentals"
        },
        {
            degree: "HSC (12th Grade) - GSEB",
            institution: "Baroda Public School",
            duration: "Completed",
            score: "Percentage: 88%",
            coursework: "Physics, Chemistry, Mathematics, Computer Science"
        }
    ];

    return (
        <section id="education" className="section container" style={{ position: 'relative' }}>
            <div className="bg-glow-1" style={{ top: '20%', left: 'auto', right: '-10%' }}></div>
            <h2 className="text-gradient" style={{ display: 'inline-block', marginBottom: '3rem' }}>Education</h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {educationData.map((edu, index) => (
                    <div key={index} className="glass-card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                                <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.1rem' }}>{edu.institution}</p>
                            </div>
                            <span style={{
                                padding: '0.4rem 1rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)'
                            }}>{edu.duration}</span>
                        </div>

                        <div style={{ marginTop: '1.5rem' }}>
                            <p style={{ marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{edu.score}</p>
                            <p style={{ fontSize: '0.95rem' }}><strong style={{ color: 'var(--text-primary)' }}>Relevant Coursework:</strong> {edu.coursework}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
