import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../components/LogoIcon';
import { handlePointerMove } from '../utils/pointerMove';
import '../styles/RulesPage.css';

const RulesPage = () => {
  return (
    <div className="app-container animate-fade-in" style={{ backgroundColor: '#040B16', color: '#f2f2f2', minHeight: '100vh', overflowX: 'hidden' }}>
      <div className="header-nav header-nav--split">
        <Link to="/" className="btn btn-secondary">
          &larr; balik ke page sebelumnya
        </Link>
        <LogoIcon size={36} staticColor={false} />
      </div>
      <section className="hero-section">
        <div 
          className="hero-background" 
          style={{ backgroundImage: "url('/gambar-1.jpeg')" }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content hero-content-right">
          <p className="hero-subtitle">belajar design nih yee</p>
          <h1 className="text-aurora-kinetic" style={{ fontSize: '4rem' }}>Hi Luvvv</h1>
        </div>
      </section>

      <section className="info-section bg-dark">
        <div className="info-text">
          <h2 style={{ color: '#f2f2f2', fontWeight: '500', marginBottom: '1.5rem' }}>Sebelum mulai nih...</h2>
          <p className="text-muted" style={{ margin: '1rem 0', fontSize: '0.75rem', lineHeight: '1.8', maxWidth: '400px' }}>
            u will learn figma and photoshop as based softwarenya.. jadi kamu wajib registrasi figma akun edu + adobe creative cloud. but dimulai dari figma soalnya kalo adobe opsional yaa
          </p>
          <div className="info-buttons">
            <a href="https://www.figma.com/education/" target="_blank" rel="noopener noreferrer" className="btn-info">Figma Sini</a>
            <a href="https://www.adobe.com/id_id/creativecloud/desktop-app.html" target="_blank" rel="noopener noreferrer" className="btn-info">Adobe Sini</a>
          </div>
        </div>
        <div className="info-images">
          <img src="/figma.png" alt="Figma logo" className="logo-figma logo-item" />
          <img src="/adobe.png" alt="Adobe logo" className="logo-adobe logo-item" />
        </div>
      </section>

      <section className="rules-section bg-darker">
        <h2 className="text-center" style={{ color: '#f2f2f2', fontWeight: '500' }}>Jadi gini rulesnya yaa</h2>
        <div className="rules-grid">
          <div className="rule-card" onPointerMove={handlePointerMove}>
            <h3 style={{ color: '#f2f2f2', fontSize: '1.1rem' }}>TANYA AKU</h3>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.2rem', fontWeight: '600' }}>(kalo gaa ngerti hehe)</p>
            <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#94A3B8', lineHeight: '1.8' }}>
              Kapan pun tanya aku, jangan mikir aku full sibuk sampe gaa bisa diganggu yaa. aku juga lebih seneng kalo kamu nanya loh
            </p>
          </div>
          <div className="rule-card" onPointerMove={handlePointerMove}>
            <h3 style={{ color: '#f2f2f2', fontSize: '1.1rem' }}>Waktunya 10 MINGGU</h3>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.2rem', fontWeight: '600' }}>(loh aku padahal kkn<br/>gaa selama ini)</p>
            <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#94A3B8', lineHeight: '1.8' }}>
              Jadi dalam 1 minggu kamu belajar 1 modul nih dan setiap modulnya ada tugas yaa. kerjain dan kalo selesai kumpulin di drive, pasti ku cek sama revisi nwehehe
            </p>
          </div>
          <div className="rule-card" onPointerMove={handlePointerMove}>
            <h3 style={{ color: '#f2f2f2', fontSize: '1.1rem' }}>Kalo bingung atau revisi nih</h3>
            <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#94A3B8', lineHeight: '1.8' }}>
              Kamu bisa nanya aku, bahkan aku mau kita do at least 1x per minggu khusus buat bahas belajar kamu dan revisi sampe progres tapi liat ajah yaa
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section padded-section">
        <div 
          className="cta-background" 
          style={{ backgroundImage: "url('/gambar-2.jpeg')" }}
        ></div>
        <div className="cta-overlay"></div>
        <h3 style={{ marginBottom: '0.5rem', color: '#f2f2f2', fontSize: '1.5rem', zIndex: 1, position: 'relative' }}>Kalo dah baca semua yang diatas nieh...</h3>
        <p style={{ marginBottom: '2rem', fontSize: '0.75rem', color: '#E2E8F0', zIndex: 1, position: 'relative' }}>klik button dibawah buat mulai belajar yaa</p>
        <Link to="/modules" style={{ backgroundColor: 'var(--theme-accent)', color: 'var(--theme-accent-text, #f2f2f2)', padding: '0.6rem 1.5rem', borderRadius: '4px', border: 'none', fontSize: '0.75rem', cursor: 'pointer', fontWeight: '600', zIndex: 1, position: 'relative', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.3s ease, color 0.3s ease' }}>KLIK SINI LUV</Link>
      </section>
    </div>
  );
};

export default RulesPage;

