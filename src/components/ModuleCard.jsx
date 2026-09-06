import React from 'react';

const ModuleCard = ({ number, moduleLink, submissionLink, isCompleted, onToggleComplete }) => {
  return (
    <div className={`module-card ${isCompleted ? 'is-completed' : ''}`}>
      <div className="module-card-header">
        <h4>Modul {number}</h4>
        <button
          type="button"
          onClick={() => onToggleComplete(number)}
          className={`completion-badge ${isCompleted ? 'completed' : ''}`}
          title={isCompleted ? "Klik untuk tandai belum selesai" : "Klik untuk tandai selesai"}
          aria-label={`Status modul ${number}: ${isCompleted ? 'Selesai' : 'Belum selesai'}`}
        >
          {isCompleted ? '✓ Selesai' : 'Belum'}
        </button>
      </div>

      <div className="module-actions">
        <a
          href={moduleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small btn-module"
        >
          Modul Disini
        </a>
        <a
          href={submissionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small btn-submission"
        >
          Kumpul Sini
        </a>
      </div>
    </div>
  );
};

export default ModuleCard;
