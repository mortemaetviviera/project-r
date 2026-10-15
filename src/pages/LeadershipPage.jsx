import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../components/LogoIcon';
import { triggerHaptic } from '../utils/haptics';
import {
  GDU_DRIVE_URL,
  gduArchiveFiles,
  cabinetComparison,
  valuesCulture2026,
  divisionsOverview,
  workPrograms2026,
  workPrograms2025,
  workflowPipeline,
  leadershipPillars
} from '../data/leadershipData';
import '../styles/LeadershipPage.css';

/* Minimalist Monochrome B&W SVG Icons */
const Icons = {
  Shield: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Folder: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
  ExternalLink: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Sparkle: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  Compare: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Check: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Layers: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Zap: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Target: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Clock: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  FileText: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
};

const LeadershipPage = () => {
  const [activeYear, setActiveYear] = useState('2026');

  const activePrograms = activeYear === '2026' ? workPrograms2026 : workPrograms2025;

  return (
    <div className="leadership-page animate-fade-in">
      <img
        className="leadership-bg"
        src="/gambar-1.jpeg"
        alt="Mountain background"
      />
      <div className="leadership-backdrop" />

      {/* Navigation Header */}
      <div className="header-nav header-nav--split" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto 2rem' }}>
        <Link to="/" className="btn btn-secondary">
          &larr; Balik ke Home
        </Link>
        <LogoIcon size={36} staticColor={false} />
      </div>

      {/* Main Header */}
      <header className="leadership-header">
        <div className="leadership-badge-tag">
          <Icons.Shield size={14} /> PANDUAN STRATEGIS WAKIL KETUA UNIT
        </div>
        <h1 className="leadership-title">Jadi Wakanit Nieh</h1>
        <p className="leadership-subtitle">
          Pedoman taktis memimpin & mengawal <strong>Divisi Media</strong>, <strong>Divisi Informasi</strong>, dan <strong>Divisi Humas</strong> (total 20+ orang) tanpa pusing dan tanpa burnout.
        </p>
      </header>

      {/* Creative Bento Grid Architecture */}
      <div className="creative-bento-layout">
        
        {/* Bento 1: Hero GDU Archive Card (Span 2) */}
        <div className="bento-card bento-hero-archive">
          <div className="bento-card-meta">
            <span className="bento-pill-tag">
              <Icons.Folder size={12} /> ARSIP DOKUMEN RESMI GDU
            </span>
            <span className="bento-badge-outline">DRIVE HIMASKOM</span>
          </div>

          <h2 className="bento-card-title">Grand Design Unit (GDU) Infokom</h2>
          <p className="bento-card-desc">
            Akses langsung blueprint resmi 2 generasi kepengurusan: dokumen evaluasi Kabinet Sinergi Pradipa 2025 dan fondasi operasional Kabinet Eskalasi Karya 2026.
          </p>

          <div className="bento-archive-files-row">
            {gduArchiveFiles.map((file, idx) => (
              <div key={idx} className="bento-file-mini-chip">
                <div className="bento-file-mini-header">
                  <Icons.FileText size={16} />
                  <span className="bento-file-year">{file.year}</span>
                  <span className="bento-file-badge">{file.badge}</span>
                </div>
                <div className="bento-file-name">{file.name}</div>
                <div className="bento-file-sub">{file.cabinet} &bull; {file.size}</div>
              </div>
            ))}
          </div>

          <div className="bento-card-action">
            <a
              href={GDU_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-action-btn"
              onClick={() => triggerHaptic(15)}
            >
              <Icons.Folder size={18} />
              <span>Buka Folder Google Drive GDU</span>
              <Icons.ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Bento 2: 4 Values & Culture (Span 1) */}
        <div className="bento-card bento-values-card">
          <div className="bento-card-meta">
            <span className="bento-pill-tag">
              <Icons.Sparkle size={12} /> NILAI UNIT
            </span>
          </div>
          <h3 className="bento-card-title">4 Pilar Budaya 2026</h3>
          <p className="bento-card-desc-compact">
            Prinsip kerja tim Divisi Media, Informasi, dan Humas.
          </p>

          <div className="bento-values-matrix">
            {valuesCulture2026.map((val, idx) => (
              <div key={idx} className="bento-value-tile">
                <div className="bento-value-icon-box">
                  <Icons.Sparkle size={16} />
                </div>
                <div className="bento-value-content">
                  <div className="bento-value-title">{val.title}</div>
                  <p className="bento-value-text">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento 3: Cabinet Evolution Table (Span 3) */}
        <div className="bento-card bento-cabinet-card">
          <div className="bento-card-meta">
            <span className="bento-pill-tag">
              <Icons.Compare size={12} /> STRUKTUR & ESTAFET
            </span>
            <span className="bento-badge-outline">2 GENERASI</span>
          </div>
          <h3 className="bento-card-title">Evolusi Kepengurusan Unit Infokom</h3>
          <p className="bento-card-desc">
            Komparasi struktur pimpinan dari Kabinet Sinergi Pradipa (2025) ke Kabinet Eskalasi Karya (2026).
          </p>

          <div className="bento-table-scroll">
            <table className="bento-data-table">
              <thead>
                <tr>
                  <th>Posisi / Amanah</th>
                  <th>2025: Sinergi Pradipa</th>
                  <th className="th-highlight">2026: Eskalasi Karya</th>
                </tr>
              </thead>
              <tbody>
                {cabinetComparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className="td-role">{row.role}</td>
                    <td className="td-past">{row.y2025}</td>
                    <td className="td-current">{row.y2026}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Full Row Header: 3 Divisi */}
        <div className="bento-full-row-header">
          <span className="bento-pill-tag">
            <Icons.Layers size={12} /> STRUKTUR INTERNAL 3 DIVISI
          </span>
          <h2 className="bento-row-title">Peta Tanggung Jawab & Titik Rawan</h2>
        </div>

        {/* Bento 4: 3 Divisions Grid (Span 1 Each) */}
        {divisionsOverview.map((div) => (
          <div key={div.id} className="bento-card bento-division-card">
            <div className="bento-division-header">
              <div className="bento-division-icon">
                <Icons.Layers size={22} />
              </div>
              <div>
                <h3 className="bento-division-name">{div.name}</h3>
                <div className="bento-division-tagline">{div.tagline}</div>
              </div>
            </div>

            <p className="bento-division-desc">{div.desc}</p>

            <div className="bento-sub-title">Tugas Kunci Divisi</div>
            <ul className="bento-bullet-list">
              {div.responsibilities.map((resp, i) => (
                <li key={i}>
                  <Icons.Check size={14} />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div className="bento-bottleneck-box">
              <div className="bento-bottleneck-title">
                <Icons.Zap size={13} />
                <span>Titik Rawan / Kendala</span>
              </div>
              <p className="bento-bottleneck-desc">{div.bottlenecks}</p>
            </div>
          </div>
        ))}

        {/* Full Row Header: Workflow */}
        <div className="bento-full-row-header">
          <span className="bento-pill-tag">
            <Icons.Clock size={12} /> ALUR KERJA HARIAN
          </span>
          <h2 className="bento-row-title">Estafet Kerja: Informasi ➔ Media ➔ Humas</h2>
        </div>

        {/* Bento 5: Operational Pipeline (Span 3) */}
        <div className="bento-card bento-pipeline-card">
          <div className="bento-card-meta">
            <span className="bento-pill-tag">
              <Icons.Clock size={12} /> 4 TAHAP PIPELINE
            </span>
            <span className="bento-badge-outline">STANDAR OPERASIONAL</span>
          </div>
          <h3 className="bento-card-title">Alur Publikasi Cepat & Terkoordinasi</h3>
          <p className="bento-card-desc">
            Satu alur komando tanpa bolak-balik: dari tangkap bahan, visualisasi, rilis, hingga monitoring respon.
          </p>

          <div className="bento-pipeline-timeline">
            {workflowPipeline.map((step, idx) => (
              <div key={idx} className="bento-pipeline-step">
                <div className="bento-pipeline-step-top">
                  <span className="bento-pipeline-index">Langkah 0{idx + 1}</span>
                  <span className="bento-pipeline-owner">{step.owner}</span>
                </div>
                <h4 className="bento-pipeline-name">{step.step}</h4>
                <p className="bento-pipeline-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Row Header: Work Programs */}
        <div className="bento-full-row-header">
          <span className="bento-pill-tag">
            <Icons.Target size={12} /> PROGRAM KERJA
          </span>
          <h2 className="bento-row-title">Katalog Program Kerja Unit Infokom</h2>
        </div>

        {/* Bento 6: Work Programs Mosaic (Span 3) */}
        <div className="bento-card bento-proker-card">
          <div className="bento-proker-header-flex">
            <div>
              <div className="bento-card-meta" style={{ marginBottom: '0.4rem' }}>
                <span className="bento-pill-tag">
                  <Icons.Target size={12} /> KATALOG PROKER
                </span>
                <span className="bento-badge-outline">{activePrograms.length} PROGRAM</span>
              </div>
              <h3 className="bento-card-title">
                {activeYear === '2026' ? 'Kabinet Eskalasi Karya (2026)' : 'Kabinet Sinergi Pradipa (2025)'}
              </h3>
              <p className="bento-card-desc" style={{ marginBottom: 0 }}>
                {activeYear === '2026'
                  ? 'Fokus pada automasi data, konten multimedia kreatif, dan digitalisasi layanan HIMASKOM.'
                  : 'Fokus pada perintisan identitas media visual, podcast, dan restrukturisasi database unit.'}
              </p>
            </div>

            <div className="bento-year-toggle">
              <button
                type="button"
                className={`bento-year-btn ${activeYear === '2026' ? 'active' : ''}`}
                onClick={() => {
                  triggerHaptic(10);
                  setActiveYear('2026');
                }}
              >
                2026 (Eskalasi Karya)
              </button>
              <button
                type="button"
                className={`bento-year-btn ${activeYear === '2025' ? 'active' : ''}`}
                onClick={() => {
                  triggerHaptic(10);
                  setActiveYear('2025');
                }}
              >
                2025 (Sinergi Pradipa)
              </button>
            </div>
          </div>

          <div className="bento-proker-mosaic">
            {activePrograms.map((proker, idx) => (
              <div key={idx} className="bento-proker-tile">
                <div className="bento-proker-tile-header">
                  <span className="bento-scale-badge">{proker.scale}</span>
                  <span className="bento-budget-badge">{proker.budget}</span>
                </div>
                <h4 className="bento-proker-name">{proker.name}</h4>
                <div className="bento-proker-pj">PJ: {proker.pj}</div>
                <div className="bento-proker-target">Target: {proker.target}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Row Header: Tactical Pillars */}
        <div className="bento-full-row-header">
          <span className="bento-pill-tag">
            <Icons.Shield size={12} /> 5 PILAR KEPEMIMPINAN TAKTIS
          </span>
          <h2 className="bento-row-title">Prinsip Komando & Manajemen 20+ Orang</h2>
        </div>

        {/* Bento 7: 5 Tactical Pillars (Span 3 Each) */}
        {leadershipPillars.map((pillar) => (
          <div key={pillar.id} className="bento-card bento-pillar-card">
            <div className="bento-pillar-header">
              <div>
                <span className="bento-pill-tag" style={{ marginBottom: '0.4rem' }}>
                  {pillar.badge}
                </span>
                <h3 className="bento-pillar-title">{pillar.title}</h3>
                <div className="bento-pillar-subtitle">{pillar.subtitle}</div>
              </div>
              <div className="bento-pillar-num">{pillar.number}</div>
            </div>

            <p className="bento-pillar-desc">{pillar.desc}</p>

            <ul className="bento-bullet-list">
              {pillar.bullets.map((b, i) => (
                <li key={i}>
                  <Icons.Check size={14} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
};

export default LeadershipPage;