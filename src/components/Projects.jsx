import React from 'react';

const Projects = () => {
    const projectData = [
        {
            title: "Career AI Advisor",
            description: "An intelligent iOS application designed to guide freshers and students towards suitable career paths using AI-driven recommendations.",
            tech: ["Swift", "CoreML", "iOS SDK", "SwiftUI"],
            link: "#"
        },
        {
            title: "Intelli Credit",
            description: "A comprehensive application streamlining credit assessment and financial analysis for loan officers.",
            tech: ["React", "FastAPI", "Python", "OpenAI"],
            link: "#"
        },
        {
            title: "Legacy Portfolio",
            description: "My first iteration of a personal portfolio, built from scratch without frameworks to establish strong fundamental web skills.",
            tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section container" style={{ position: 'relative' }}>
            <div className="bg-glow-2"></div>
            <h2 className="text-gradient" style={{ display: 'inline-block', marginBottom: '3rem' }}>Selected Projects</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {projectData.map((project, index) => (
                    <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontSize: '1.4rem' }}>{project.title}</h3>
                        <p style={{ margin: '1rem 0', flexGrow: 1 }}>{project.description}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            {project.tech.map(t => (
                                <span key={t} style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 500 }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
