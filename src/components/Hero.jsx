import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="section container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="bg-glow-1"></div>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '1.5rem', opacity: 0, animation: 'fadeInUp 0.8s ease forwards' }}>
                    Hi, I'm <span className="text-gradient">Hetvi Siddhpura</span><br />
                    Building digital experiences.
                </h1>
                <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0, animation: 'fadeInUp 0.8s ease 0.2s forwards' }}>
                    I'm a passionate developer focused on creating modern, scalable, and beautiful web applications. Turning complex problems into elegant solutions.
                </p>
                <div style={{ display: 'flex', gap: '1rem', opacity: 0, animation: 'fadeInUp 0.8s ease 0.4s forwards' }}>
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>

            <style>
                {`
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            `}
            </style>
        </section>
    );
};

export default Hero;
