import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'var(--color-bg-main)',
            color: 'var(--color-text-main)'
        }}>
            <h1 style={{ fontSize: '6rem', color: 'var(--color-gold-base)', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
            <p style={{ maxWidth: '500px', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
    );
};

export default NotFound;
