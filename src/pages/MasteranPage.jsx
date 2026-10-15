import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../components/LogoIcon';
import { triggerHaptic } from '../utils/haptics';
import { playTick, playSuccessPop } from '../utils/audio';
import { semestersData, categoryTabs } from '../data/masteranData';
import '../styles/MasteranPage.css';

const MasteranPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const copyTimeoutRef = useRef(null);

  const cleanQuery = searchQuery.trim().toLowerCase();

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const handleCopyLink = async (id, link) => {
    if (!link) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(link);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = link;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      playSuccessPop();
      triggerHaptic(15); // light confirmation on copy
      setCopiedId(id);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.warn(`[Lycoris Masteran] Failed to copy link for "${id}" to clipboard:`, err);
    }
  };

  const filteredSemesters = useMemo(() => {
    return semestersData.filter((semester) => {
      // Category check
      if (activeCategory !== 'all' && semester.category !== activeCategory) {
        return false;
      }

      // Search query check
      if (!cleanQuery) return true;

      const titleMatch = semester.title.toLowerCase().includes(cleanQuery);
      const subjectMatch = semester.subjects.some(sub => sub.toLowerCase().includes(cleanQuery));
      const messageMatch = semester.customMessage && semester.customMessage.toLowerCase().includes(cleanQuery);

      return titleMatch || subjectMatch || messageMatch;
    });
  }, [cleanQuery, activeCategory]);

  return (
    <div className="modules-page animate-fade-in">
      <img
        className="modules-bg"
        src="/gambar-7.jpeg"
        alt="Masteran background"
      />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100dvh',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(4,11,22,0.9) 100%)',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />

      <div className="header-nav header-nav--split">
        <Link to="/" className="btn btn-secondary">
          &larr; balik ke page sebelumnya
        </Link>
        <LogoIcon size={36} staticColor={false} />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 className="modules-title text-aurora-kinetic" style={{ marginBottom: '1rem' }}>
          MASTERAN PUNYA KU NIEH
        </h1>
        <p style={{ color: '#f2f2f2', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6', textShadow: '0 2px 5px rgba(0, 0, 0, 0.8)' }}>
          cause of different curriculum, jadinya banyak yang beda tiap semesternya. tinggal cari-cari dah tuh mana matkul yang lagi kamu ambil. isinya dah jadi zip and sizenya beda-beda hehe. yaa siapa tau kepake luv nieh masteran.
        </p>
      </div>

      {/* Live Search & Filter Controls */}
      <div className="search-filter-container">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="cari matkul sini"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Cari mata kuliah"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              title="Hapus pencarian"
            >
              ✕
            </button>
          )}
        </div>

        <div className="category-tabs">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`category-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
              onClick={() => {
                playTick();
                triggerHaptic(12);
                setActiveCategory(tab.id);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Banner if searching */}
      {cleanQuery && (
        <div className="search-results-banner">
          Menampilkan hasil untuk: <strong>"{searchQuery}"</strong> ({filteredSemesters.length} semester ditemukan)
        </div>
      )}

      {/* Bento Grid */}
      {filteredSemesters.length === 0 ? (
        <div className="empty-search-state">
          <div className="empty-emoji">🌸</div>
          <h3>Gaa Nemu Matkul Itu Luv...</h3>
          <p>Coba cari dengan kata kunci lain atau pilih tab kategori yang berbeda yaa!</p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            style={{ marginTop: '1rem', padding: '0.6rem 1.5rem' }}
          >
            Tampilkan Semua Matkul
          </button>
        </div>
      ) : (
        <div className="masteran-bento">
          {filteredSemesters.map((semester) => (
            <div
              className="bento-box"
              key={semester.id}
            >
              <div className="bento-header">
                <div className="bento-title-area">
                  <div className="group-icon" style={{ backgroundColor: 'var(--theme-accent, #A47DAB)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '16px', transition: 'background-color 0.3s ease' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--theme-accent-text, #f2f2f2)', transition: 'color 0.3s ease' }}>{semester.id}</span>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f2f2f2' }}>{semester.title}</h3>
                    <p className="text-muted" style={{ fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
                      {semester.subjects.length > 0 ? `${semester.subjects.length} Mata Kuliah` : 'On Progress'}
                    </p>
                  </div>
                </div>

                <div className="bento-action-buttons">
                  {semester.link && (
                    <>
                      <a
                        href={semester.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-info"
                        style={{ textDecoration: 'none', padding: '0.6rem 1rem' }}
                      >
                        Buka Drive
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopyLink(semester.id, semester.link)}
                        className="btn-copy-link"
                        title="Salin Link Google Drive"
                        aria-label="Salin link Google Drive"
                      >
                        {copiedId === semester.id ? '✓ Disalin' : '📋'}
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="bento-subjects">
                {semester.customMessage ? (
                  <p
                    style={{
                      color: cleanQuery && semester.customMessage.toLowerCase().includes(cleanQuery) ? 'var(--theme-accent, #E2D1E5)' : '#E2D1E5',
                      fontSize: '0.875rem',
                      margin: '0.5rem 0',
                      fontWeight: cleanQuery && semester.customMessage.toLowerCase().includes(cleanQuery) ? '600' : 'normal'
                    }}
                  >
                    {semester.customMessage}
                  </p>
                ) : (
                  semester.subjects.map((subject, idx) => {
                    const isMatch = cleanQuery && subject.toLowerCase().includes(cleanQuery);
                    return (
                      <div
                        className={`bento-pill ${isMatch ? 'pill-highlight' : ''}`}
                        key={idx}
                      >
                        {subject}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MasteranPage;
