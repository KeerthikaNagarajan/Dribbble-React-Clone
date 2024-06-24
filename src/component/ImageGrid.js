import React, { useState } from 'react';
import './ImageGrid.css';
import './ImageModal.css';

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState({}); // State to track liked images

  const handleImageClick = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const toggleLike = (index) => {
    setLikedImages((prevLikedImages) => ({
      ...prevLikedImages,
      [index]: !prevLikedImages[index],
    }));
  };

  return (
    <>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.image} alt={image.developer} onClick={() => handleImageClick(image, index)} />
            <div className="image-info">
              <img src={image.profile} alt={image.developer} className="profile-icon" />
              <span className="developer-name">{image.developer}</span>
              <span className="team-tag">TEAM</span>
              <div className="like-view">
                <span
                  className={`likes ${likedImages[index] ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}
                >
                  <span className="icon">❤️</span> {image.likes + (likedImages[index] ? 1 : 0)}
                </span>
                <span className="views">
                  <span className="icon">👁️</span> {image.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-header">
              <h2 className="modal-developer">{selectedImage.developer}</h2>
              <div className="modal-likes-views">
                <span
                  className={`likes ${likedImages[selectedImage.index] ? 'liked' : ''}`}
                  onClick={() => toggleLike(selectedImage.index)}
                >
                  <span className="icon">❤️</span> {selectedImage.likes + (likedImages[selectedImage.index] ? 1 : 0)}
                </span>
                <span className='icon'>👁️ {selectedImage.views}</span>
              </div>
            </div>
            <img src={selectedImage.image} alt={selectedImage.developer} />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;
