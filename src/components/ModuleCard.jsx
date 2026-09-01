import React from 'react';

const ModuleCard = ({ number, moduleLink, submissionLink }) => {
  return (
    <div className="module-card">
      <h4>modul {number}</h4>
      <div className="module-actions">
        <a href={moduleLink} target="_blank" rel="noopener noreferrer" className="btn-small" style={{ textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box' }}>Modul Disini</a>
        <a href={submissionLink} target="_blank" rel="noopener noreferrer" className="btn-small" style={{ textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box' }}>Kumpul Sini</a>
      </div>
    </div>
  );
};

export default ModuleCard;
