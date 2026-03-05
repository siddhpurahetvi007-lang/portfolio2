import React from 'react';

const Skills = () => {
    const technicalSkills = [
        { category: "Programming Languages", items: ["C++", "Python", "Java", "JavaScript"] },
        { category: "Web Development", items: ["HTML", "CSS", "React", "Node.js"] },
        { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
        { category: "Tools", items: ["Git", "VS Code", "Docker", "Kubernetes"] }
    ];

    const softSkills = ["Communication", "Problem Solving", "Teamwork", "Leadership", "Time Management"];

    return (
        <section id="skills" className="section container">
            <h2 className="text-gradient" style={{ display: 'inline-block', marginBottom: '3rem' }}>Skills</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>Technical Skills</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {technicalSkills.map((st, idx) => (
                            <div key={idx}>
                                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', fontSize: '1rem' }}>{st.category}</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {st.items.map(skill => (
                                        <span key={skill} style={{
                                            padding: '0.4rem 0.8rem',
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            border: '1px solid var(--border-glow)',
                                            borderRadius: '6px',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-primary)'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>Soft Skills</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                        {softSkills.map(skill => (
                            <span key={skill} style={{
                                padding: '0.5rem 1rem',
                                background: 'rgba(255, 255, 255, 0.03)',
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

export default Skills;
