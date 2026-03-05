import React from 'react';

const Certifications = () => {
    const certs = [
        {
            name: "IT Specialist - HTML and CSS",
            issuer: "Pearson VUE / Certiport",
            link: "/certificates/html_css_cert.png"
        },
        {
            name: "Certificate of Participation - Hackwise 2026",
            issuer: "IRIS 2026, IIM Indore",
            link: "/certificates/hackwise_cert.png"
        }
    ];

    return (
        <section id="certifications" className="section container">
            <h2 className="text-gradient" style={{ display: 'inline-block', marginBottom: '3rem' }}>Certifications & Participations</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {certs.map((cert, index) => (
                    <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                            <div style={{
                                width: '40px', height: '40px',
                                borderRadius: '50%',
                                background: 'rgba(168, 85, 247, 0.1)',
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                color: 'var(--accent-secondary)',
                                flexShrink: 0
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{cert.name}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', margin: 0 }}>{cert.issuer}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                <em>Click on the cards to view the certificates.</em>
            </p>
        </section>
    );
};

export default Certifications;
