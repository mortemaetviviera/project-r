import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div 
      className="animate-fade-in"
      style={{
        minHeight: '100vh',
        backgroundColor: '#030811',
        color: '#f2f2f2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(164, 125, 171, 0.15) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '500px' }}>
        <div 
          style={{
            fontSize: '6rem',
            fontWeight: '800',
            letterSpacing: '-2px',
            color: '#141C2B',
            textShadow: '0 0 40px rgba(164, 125, 171, 0.3)',
            lineHeight: 1,
            marginBottom: '1rem'
          }}
        >
          404
        </div>
        <h1 
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#f2f2f2',
            marginBottom: '1rem'
          }}
        >
          Waduh, Nyasar Kemana Nih Luv? 🌸
        </h1>
        <p 
          style={{
            fontSize: '0.95rem',
            color: '#94A3B8',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}
        >
          Halaman yang kamu tuju gaa ada atau mungkin salah ketik linknya hehe. Yuk balik ajah ke halaman utama!
        </p>
        <Link 
          to="/" 
          className="btn-primary" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.75rem 2rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}
        >
          &larr; Balik ke Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
