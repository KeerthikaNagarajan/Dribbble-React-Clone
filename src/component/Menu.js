// src/component/Menu.js
import React, { useState, useEffect } from 'react';
import './Menu.css';
import { getCategories } from '../data';

const Menu = ({ onSelectCategory }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const categories = ['Discover', ...getCategories()];
    setMenuItems(categories);
  }, []);

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div key={item} className="menu-item" onClick={() => onSelectCategory(item)}>
          {item}
        </div>
      ))}
      {/* <div className="bar2-right">
        <button className="bar2-button">☰ Filters</button>
      </div> */}


    </div>
    



  );
};

export default Menu;
