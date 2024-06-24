// ColorFilter.js
import React from 'react';
import './ColorFilter.css';

const ColorFilter = ({ onSelectColor }) => {
  const colors = ['Blue', 'Orange', 'Black', 'White', 'Purple', 'Green', 'Red', 'Yellow'];

  return (
    <div className='parent-container'>
    <div className="color-filter">
      <select onChange={(e) => onSelectColor(e.target.value)} defaultValue="">
        <option value="" disabled>☰ Filters</option>
        {colors.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
    </div>
    </div>
  );
};

export default ColorFilter;
