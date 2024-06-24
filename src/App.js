//App.js
import React, { useState } from 'react';
import Menu from './component/Menu';
import ImageGrid from './component/ImageGrid';
import { data } from './data';
import './App.css';
import Bar from './component/Bar';
import Dropdown from './component/Dropdown';
import Footer from './component/Footer';
import ColorFilter from './component/ColorFilter';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Discover');
  const [sortOption, setSortOption] = useState('Discover');
  const [selectedColor, setSelectedColor] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSortOptionSelect = (option) => {
    setSortOption(option);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const filteredImages = selectedCategory === 'Discover'
    ? data
    : data.filter(image => image.category === selectedCategory);

  const colorFilteredImages = selectedColor === ''
    ? filteredImages
    : filteredImages.filter(image => image.color === selectedColor);

  const sortedImages = [...colorFilteredImages].sort((a, b) => {
    if (sortOption === 'Popular') {
      return b.views - a.views;
    } else if (sortOption === 'New & Noteworthy') {
      return b.likes - a.likes;
    } else {
      return 0; // Default order
    }
  });

  return (
    <div>
      <Bar />
      <div className="app-container">
        <Dropdown onSelectOption={handleSortOptionSelect} />
        <Menu onSelectCategory={handleCategorySelect} />
        <ColorFilter onSelectColor={handleColorSelect} />
      </div>
      <div>
        <main>
          <ImageGrid images={sortedImages} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
