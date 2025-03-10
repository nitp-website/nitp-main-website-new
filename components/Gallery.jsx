import React, { useState, useRef, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    // Add more images here
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPopup && popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="relative">
      {/* Main gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Popup overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[99999]" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div 
            ref={popupRef} 
            className="relative bg-white rounded-lg w-[90%] max-w-4xl mx-auto overflow-hidden"
            style={{ maxHeight: '90vh' }}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-[999999] bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-4">
              <img
                src={selectedImage}
                alt="Selected gallery image"
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>

            {/* Thumbnails */}
            <div className="bg-gray-100 p-4 overflow-x-auto">
              <div className="flex gap-2">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                      selectedImage === image ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 