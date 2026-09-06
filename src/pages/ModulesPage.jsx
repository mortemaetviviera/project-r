import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModuleCard from '../components/ModuleCard';

const linksData = {
  1: {
    module: "https://drive.google.com/drive/folders/1Kw2ZScwOXzsJOFSq-8HxrKynFN3EtT3R",
    submission: "https://drive.google.com/drive/folders/1h8Cr3hRUJHkyM0kkmywVL_qsolyo2cel"
  },
  2: {
    module: "https://drive.google.com/drive/folders/19soTOKpdoPQe21JMeql5vgfNSoMGUN73",
    submission: "https://drive.google.com/drive/folders/1AzL6ut9VJmGm2XmgjZT8hk39zwhdBrun"
  },
  3: {
    module: "https://drive.google.com/drive/folders/1wSDpkxCf7S0AgMkEninl8UfHA_DMrdNx",
    submission: "https://drive.google.com/drive/folders/1QCxz9VKfil0DfHX_qV7EEHxAIadW9kQi"
  },
  4: {
    module: "https://drive.google.com/drive/folders/1xJ4nexeOSCpU6P4tqwKF1d-3A6U0sZw6",
    submission: "https://drive.google.com/drive/folders/12auas7v3BnwCuPaPCx-PwDKC4MfnxB5u"
  },
  5: {
    module: "https://drive.google.com/drive/folders/1lhQcseZCYk0W4QFvTGo7eR0LtonhYRlj?usp=drive_link",
    submission: "https://drive.google.com/drive/folders/12pYflk_9pFUuWb4HlgmxVYwoGwSbUAKY?usp=drive_link"
  },
  6: {
    module: "https://drive.google.com/drive/folders/1-HFdsn_nDl8jESynlZEo9lZ0h2g8jG1Z?usp=drive_link",
    submission: "https://drive.google.com/drive/folders/1yOkUUhEmuiOgeLlzR00dj57Ub7g-pvsy"
  },
  7: {
    module: "https://drive.google.com/drive/folders/1UndNOx78eFKRnCV0RlF5lxM1eg1iUjet",
    submission: "https://drive.google.com/drive/folders/1IzDn7jnwQd8kMTWWBzBLZeufKMaoVBda"
  },
  8: {
    module: "https://drive.google.com/drive/folders/1GMGHdh97VbZkU7BTyFtlxnW68brD4w3Y",
    submission: "https://drive.google.com/drive/folders/1KwmeakJG9E1Vn-tlUq0p-wBk9KW0OCva"
  },
  9: {
    module: "https://drive.google.com/drive/folders/1oltkzC44zytX3ppqKJhM1iUvxz2baVj5",
    submission: "https://drive.google.com/drive/folders/1gUBW4fbcEuyQZP4Po89fEgIVMOlUUeLG"
  },
  10: {
    module: "https://drive.google.com/drive/folders/1OUrrDTnquCO277hJMQTGhD-OJk1zmBzK",
    submission: "https://drive.google.com/drive/folders/1C57ikqhh95zAWqhWKx4_WXF7aQGgJpvu"
  }
};

const STORAGE_KEY = 'lycoris_modules_progress';

const figmaModules = [1, 2, 3, 4, 5];
const psModules = [6, 7, 8, 9, 10];

const ModulesPage = () => {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [progress]);

  const toggleComplete = (num) => {
    setProgress(prev => ({
      ...prev,
      [num]: !prev[num]
    }));
  };

  const resetProgress = () => {
    if (window.confirm('Yakin mau reset semua progres belajar luv?')) {
      setProgress({});
    }
  };

  // Figma calculations
  const figmaCompleted = figmaModules.filter(n => progress[n]).length;
  const figmaPercent = Math.round((figmaCompleted / figmaModules.length) * 100);

  // Photoshop calculations
  const psCompleted = psModules.filter(n => progress[n]).length;
  const psPercent = Math.round((psCompleted / psModules.length) * 100);

  // Overall total
  const totalCompleted = figmaCompleted + psCompleted;

  const getEncouragementText = () => {
    if (totalCompleted === 0) return 'yuk belajar luv';
    if (totalCompleted <= 4) return 'goks, teruskan belajarnya yaa luv';
    if (totalCompleted <= 5) return 'setengah perjalanan nieh, jangan nyerah luv!';
    if (totalCompleted <= 9) return 'dikit lagi selesai semua modulnya, mangad!';
    return 'anjayyy kelarr!! Proud of u luvv🥳';
  };

  return (
    <div className="modules-page animate-fade-in">
      <img
        className="modules-bg"
        src="/gambar-3.jpeg"
        alt="Sunset background"
      />

      <div className="header-nav">
        <Link to="/rules" className="btn btn-secondary">
          &larr; balik ke page sebelumnya
        </Link>
      </div>

      <h1 className="modules-title">MANGAD BELAJARNYA LUV</h1>

      {/* Separated Dual Progress Dashboard */}
      <div className="progress-dashboard">
        <div className="progress-dashboard-top">
          <div>
            <div className="progress-title">Progres Belajar Kamu 🌸</div>
            <div className="progress-subtitle">{getEncouragementText()}</div>
          </div>
          {totalCompleted > 0 && (
            <button
              type="button"
              onClick={resetProgress}
              className="btn-reset-progress"
            >
              Reset Progres
            </button>
          )}
        </div>

        <div className="dual-progress-grid">
          {/* Figma Track Progress */}
          <div className="track-progress-card figma-track">
            <div className="track-header">
              <div className="track-icon-title">
                <img src="/figma.png" alt="Figma logo" width="22" height="22" />
                <span className="track-name">Figma Modul (1 - 5)</span>
              </div>
              <div className="track-stats">
                <span className="track-numbers">{figmaCompleted} / 5</span>
                <span className="track-percent">({figmaPercent}%)</span>
              </div>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill figma-fill"
                style={{ width: `${figmaPercent}%` }}
              />
            </div>
            <div className="track-status-text">
              {figmaCompleted === 5 ? 'master figma nieh' : `${5 - figmaCompleted} modul lagi nih luv`}
            </div>
          </div>

          {/* Adobe Photoshop Track Progress */}
          <div className="track-progress-card photoshop-track">
            <div className="track-header">
              <div className="track-icon-title">
                <img src="/adobe.png" alt="Adobe logo" width="22" height="22" />
                <span className="track-name">Photoshop Modul (6 - 10)</span>
              </div>
              <div className="track-stats">
                <span className="track-numbers">{psCompleted} / 5</span>
                <span className="track-percent">({psPercent}%)</span>
              </div>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill photoshop-fill"
                style={{ width: `${psPercent}%` }}
              />
            </div>
            <div className="track-status-text">
              {psCompleted === 5 ? 'master adobe beuhhh' : `${5 - psCompleted} modul lagi nih luv`}
            </div>
          </div>
        </div>
      </div>

      {/* Figma Modules Group */}
      <div className="module-group">
        <div className="group-header">
          <div className="group-icon" style={{ backgroundColor: '#2C2D33', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/figma.png" alt="Figma logo" width="24" height="24" />
          </div>
          <div>
            <h3>Nieh semua modul figma yee</h3>
            <p className="text-muted" style={{ fontSize: '0.875rem' }}>
              jangan di-skip belajarnya heiii ({figmaCompleted}/5 selesai)
            </p>
          </div>
        </div>
        <div className="modules-list">
          {figmaModules.map(num => (
            <ModuleCard
              key={`figma-${num}`}
              number={num}
              moduleLink={linksData[num].module}
              submissionLink={linksData[num].submission}
              isCompleted={!!progress[num]}
              onToggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>

      {/* Adobe Photoshop Modules Group */}
      <div className="module-group">
        <div className="group-header">
          <div className="group-icon" style={{ background: 'linear-gradient(135deg, #001E36 0%, #000000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/adobe.png" alt="Adobe logo" width="24" height="24" />
          </div>
          <div>
            <h3>Nieh semua modul adobe photoshop</h3>
            <p className="text-muted" style={{ fontSize: '0.875rem' }}>
              kalo nih opsional tapii kerjain yaa ({psCompleted}/5 selesai)
            </p>
          </div>
        </div>
        <div className="modules-list">
          {psModules.map(num => (
            <ModuleCard
              key={`ps-${num}`}
              number={num}
              moduleLink={linksData[num].module}
              submissionLink={linksData[num].submission}
              isCompleted={!!progress[num]}
              onToggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModulesPage;
