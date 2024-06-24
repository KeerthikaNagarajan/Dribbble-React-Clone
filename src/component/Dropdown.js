//Dropdown.js
import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import './Dropdown.css';

const Dropdown = ({ onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Following');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelectOption(option); // Call the passed prop function with the selected option
  };

  const options = ['Following', 'Popular', 'New & Noteworthy'];

  return (
    <div className='space'>
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {selectedOption}
          <span className="arrow">{isOpen ? <HiChevronUp/> : <HiChevronDown />}</span>
        </button>
        {isOpen && (
          <div className="dropdown-options">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className="dropdown-option"
              >
                {option}
                {selectedOption === option && <span className="tick">✓</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
