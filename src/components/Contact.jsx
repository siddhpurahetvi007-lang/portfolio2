import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
            <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem' }}>
                I'm currently looking for new opportunities and interested in connecting.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:hello@example.com" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                Say Hello
            </a>

            <div style={{ marginTop: '6rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                <p>Designed & Built by Hetvi</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
