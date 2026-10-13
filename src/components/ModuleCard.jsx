import React from 'react';

const ModuleCard = ({ number, moduleLink, submissionLink, isCompleted, onToggleComplete }) => {
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      className={`module-card bento-specular ${isCompleted ? 'is-completed' : ''}`}
      onPointerMove={handlePointerMove}
    >
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
