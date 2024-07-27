import React, { useState } from 'react';

function FilterSection({ onFilter }) {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ type, location });
  };

  return (
    <form onSubmit={handleSubmit} className="filter-section">
      <select 
        value={type} 
        onChange={(e) => setType(e.target.value)}
        className="filter-select"
      >
        <option value="">All Types</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="filter-input"
      />
      <button type="submit" className="filter-button">
        Filter
      </button>
    </form>
  );
}

export default FilterSection;