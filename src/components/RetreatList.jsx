// src/components/RetreatList.js
import React from 'react';
import RetreatCard from './RetreatCard';

function RetreatList({ retreats, currentPage, totalPages, onPageChange }) {
  const fillerCards = 6 - retreats.length;

  return (
    <div className="retreat-list">
      <div className="retreat-grid">
        {retreats.map(retreat => (
          <RetreatCard key={retreat.id} retreat={retreat} />
        ))}
        {[...Array(fillerCards)].map((_, index) => (
          <div key={`filler-${index}`} className="retreat-card filler"></div>
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-info">{currentPage} of {totalPages}</span>
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RetreatList;