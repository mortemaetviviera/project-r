import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../components/LogoIcon';
import { triggerHaptic } from '../utils/haptics';
import {
  STORAGE_KEY_LEADER,
  divisionsOverview,
  workflowPipeline,
  leadershipPillars,
  checklistPhases
} from '../data/leadershipData';
import '../styles/LeadershipPage.css';

const LeadershipPage = () => {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LEADER);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LEADER, JSON.stringify(progress));
    } catch (err) {
      console.error('Failed to save leadership progress:', err);
    }
  }, [progress]);

  const allItems = useMemo(() => {
    return checklistPhases.flatMap(p => p.items);
  }, []);

  const totalItems = allItems.length;
  const completedCount = useMemo(() => {
    return allItems.filter(item => !!progress[item.id]).length;
  }, [allItems, progress]);

  const percentage = Math.round((completedCount / totalItems) * 100);

  const toggleItem = (id) => {
    triggerHaptic(20);
    setProgress(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetProgress = () => {
    if (window.confirm('Yakin mau reset semua checklist kesiapan Wakanit luv?')) {
      triggerHaptic(30);
      setProgress({});
    }
  };

  const getEncouragementText = () => {
    if (percentage === 0) return 'Pondasi awal nih, pelan-pelan pelajari dan susun rencananya yaa luv 🌱';
    if (percentage <= 25) return 'Mulai bergerak! Struktur 3 divisi mulai terbaca ritmenya.';
    if (percentage <= 50) return 'Setengah jalan nieh! Koordinasi Media, Informasi, dan Humas makin matang.';
    if (percentage <= 75) return 'Dikit lagi siap tempur! Tim 20+ orang bakal aman dan terarah di tangan kamu.';
    return 'Lengkap sudah! Siap memimpin 3 divisi jadi unit terbaik, proud of u luvv! 👑✨';
  };

  return (
    <div className="leadership-page animate-fade-in">
      <img
        className="leadership-bg"
        src="/gambar-1.jpeg"
        alt="Mountain background"
      />
      <div className="leadership-backdrop" />

      {/* Navigation Header */}
      <div className="header-nav header-nav--split">
        <Link to="/" className="btn btn-secondary">
          &larr; Balik ke Home
        </Link>
        <LogoIcon size={36} staticColor={false} />
      </div>

      {/* Main Header */}
      <header className="leadership-header">
        <div className="leadership-badge-tag">
          <span>🏛️</span> PANDUAN STRATEGIS WAKIL KETUA UNIT
        </div>
        <h1 className="leadership-title">Jadi Wakanit Nieh</h1>
        <p className="leadership-subtitle">
          Pedoman taktis memimpin & mengawal <strong>Divisi Media</strong>, <strong>Divisi Informasi</strong>, dan <strong>Divisi Humas</strong> (total 20+ orang) tanpa pusing dan tanpa burnout.
        </p>
      </header>

      {/* Section 1: Interactive Readiness Dashboard */}
      <section className="leadership-section">
        <div className="readiness-dashboard">
          <div className="dashboard-top">
            <div>
              <div className="dashboard-title">Kesiapan Memimpin Kamu</div>
              <div className="dashboard-subtitle">{getEncouragementText()}</div>
            </div>
            <div className="dashboard-stats">
              <span className="dashboard-score">{percentage}%</span>
              <span className="dashboard-total">({completedCount}/{totalItems} Selesai)</span>
            </div>
          </div>

          <div className="readiness-progress-track">
            <div
              className="readiness-progress-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {completedCount > 0 && (
              <button
                type="button"
                onClick={resetProgress}
                className="btn-reset-leader"
              >
                Reset Checklist Kesiapan
              </button>
            )}
          </div>
        </div>

        {/* 4 Phases Checklist Grid */}
        <div className="checklist-phases-container">
          {checklistPhases.map((phase) => {
            const phaseDoneCount = phase.items.filter(it => !!progress[it.id]).length;
            return (
              <div className="phase-card" key={phase.id}>
                <h3 className="phase-title">
                  <span>{phase.phaseTitle}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--theme-accent)', fontWeight: '600' }}>
                    {phaseDoneCount}/{phase.items.length}
                  </span>
                </h3>
                <div className="phase-items-list">
                  {phase.items.map((item) => {
                    const isDone = !!progress[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`checklist-item-row ${isDone ? 'is-done' : ''}`}
                        onClick={() => toggleItem(item.id)}
                        role="checkbox"
                        aria-checked={isDone}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === ' ' || e.key === 'Enter') {
                            e.preventDefault();
                            toggleItem(item.id);
                          }
                        }}
                      >
                        <div className="custom-checkbox">
                          {isDone ? '✓' : ''}
                        </div>
                        <span className="checklist-text">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: 3 Divisions Overview */}
      <section className="leadership-section">
        <div className="section-headline">
          <div className="section-eyebrow">STRUKTUR INTERNAL 3 DIVISI</div>
          <h2 className="section-main-title">Peta Tanggung Jawab & Titik Rawan</h2>
        </div>

        <div className="divisions-grid">
          {divisionsOverview.map((div) => (
            <div className="division-card" key={div.id}>
              <div className="division-header">
                <div className="division-icon-badge">{div.icon}</div>
                <div>
                  <h3 className="division-name">{div.name}</h3>
                  <p className="division-tagline">{div.tagline}</p>
                </div>
              </div>

              <p className="division-desc">{div.desc}</p>

              <div className="division-list-title">Tugas Kunci Divisi</div>
              <ul className="division-checklist">
                {div.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>

              <div className="division-bottleneck">
                <strong>Titik Rawan / Kendala:</strong> {div.bottlenecks}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Estafet Pipeline */}
      <section className="leadership-section">
        <div className="section-headline">
          <div className="section-eyebrow">ALUR KERJA HARIAN</div>
          <h2 className="section-main-title">Estafet Kerja: Informasi ➔ Media ➔ Humas</h2>
        </div>

        <div className="workflow-pipeline-grid">
          {workflowPipeline.map((step, idx) => (
            <div className="workflow-card" key={idx}>
              <span className="workflow-step-num">{step.step}</span>
              <span className="workflow-owner">{step.owner}</span>
              <p className="workflow-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: 5 Pillars Bento Playbook */}
      <section className="leadership-section">
        <div className="section-headline">
          <div className="section-eyebrow">5 PILAR KEPEMIMPINAN TAKTIS</div>
          <h2 className="section-main-title">Prinsip Komando & Manajemen 20+ Orang</h2>
        </div>

        <div className="pillars-grid">
          {leadershipPillars.map((pillar) => (
            <div className="pillar-box" key={pillar.id}>
              <div className="pillar-header">
                <div>
                  <span className="pillar-badge">{pillar.badge}</span>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <div className="pillar-subtitle">{pillar.subtitle}</div>
                </div>
                <div className="pillar-number">{pillar.number}</div>
              </div>

              <p className="pillar-desc">{pillar.desc}</p>

              <ul className="pillar-bullets">
                {pillar.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
