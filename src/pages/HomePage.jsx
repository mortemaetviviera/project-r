import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const heroBgRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroBgRef.current) {
            heroBgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.5}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mntn-container">
      <header className="mntn-header">
        <div className="mntn-logo">LYCORIS</div>
      </header>

      <section className="mntn-hero">
        <div
          ref={heroBgRef}
          className="mntn-hero-bg"
        ></div>
        <div className="mntn-hero-overlay"></div>
        <div className="mntn-hero-content">
          <div className="mntn-hero-subtitle">COMPILATION OF SOMETHING I CANT NAME IT HERE</div>
          <h1 className="mntn-hero-title">BONJOUR MON AMOUR</h1>
          <p style={{ letterSpacing: '1px', fontSize: '14px', fontWeight: '500', color: '#f2f2f2' }}>Ini Apa?? Scroll Ajah Dulu</p>
        </div>
      </section>

      <section className="mntn-section mntn-section-01" id="about">
        <div className="mntn-section-content">
          <div className="mntn-section-text">
            <div className="mntn-section-number">01</div>
            <div className="mntn-section-subtitle">APA HAYO LUV</div>
            <h2 className="mntn-section-title">WEB APALAGI???</h2>
            <p className="mntn-section-description">
              gampangnya kalo kamu nyari sesuatu tinggal buka web ini ajah. tinggal simpen linknya, bookmark atau yaa leave it opened on ur chrome (kalo berani mwehehehe)
            </p>
          </div>
          <div className="mntn-section-image-wrapper">
            <img
              src="/gambar-4.jpeg"
              alt="Beach"
              className="mntn-section-image"
            />
          </div>
        </div>
      </section>

      <section className="mntn-section mntn-section-02" id="design">
        <div className="mntn-section-content">
          <div className="mntn-section-text">
            <div className="mntn-section-number">02</div>
            <div className="mntn-section-subtitle">DESIGN</div>
            <h2 className="mntn-section-title">Design nieh...</h2>
            <p className="mntn-section-description">
              kalo ke page design yang kemaren ntu tinggal klik dibawah ajah luv.
            </p>
            <Link to="/rules" className="mntn-btn-primary" style={{ display: 'inline-block', textAlign: 'center' }}>
              Click Sini Design Yee
            </Link>
          </div>
          <div className="mntn-section-image-wrapper">
            <img
              src="/gambar-5.jpeg"
              alt="Drawing"
              className="mntn-section-image"
            />
          </div>
        </div>
      </section>

      <section className="mntn-section mntn-section-03" id="master">
        <div className="mntn-section-content">
          <div className="mntn-section-text">
            <div className="mntn-section-number">03</div>
            <div className="mntn-section-subtitle">MASTERAN</div>
            <h2 className="mntn-section-title">Inih Masteran</h2>
            <p className="mntn-section-description">
              Gampangnya semua yang ku punya dari semester dulu (iyee TUA) ada disini, mostly mix sieh dan random. jadi gaa semua yang ku kerjain ada disini semua.
            </p>
            <Link to="/masteran" className="mntn-btn-primary" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
              Masteran Click sini yaa
            </Link>
          </div>
          <div className="mntn-section-image-wrapper">
            <img
              src="/gambar-6.jpeg"
              alt="Store"
              className="mntn-section-image"
            />
          </div>
        </div>
      </section>

      <footer className="mntn-footer">
        <div className="mntn-logo">LYCORIS</div>
        <p className="mntn-footer-desc">
          napa nama webnya inih?? aku pun bingung kasih namanya apah. so yeah ku taro nama bunga favorit mu ajah
        </p>
        <div className="mntn-footer-copyright">
          © 2026 LYCORIS. Everything remind me of u. hehehe... have a nice day luv
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

