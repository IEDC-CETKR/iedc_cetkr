import React, { useState, useCallback, useEffect } from 'react';

const galleryItems = [
  { type: 'image', src: '/gallery/anukiedc1.jpg', alt: 'IEDC Event 1' },
  { type: 'image', src: '/gallery/anukiedc2.jpg', alt: 'IEDC Event 2' },
  { type: 'image', src: '/gallery/ysdhu2.jpg', alt: 'IEDC Event 3' },
  { type: 'video', src: '/gallery/video1.mp4', alt: 'IEDC Video 1' },
  { type: 'video', src: '/gallery/video2.mp4', alt: 'IEDC Video 2' },
  { type: 'video', src: '/gallery/yadhuviedo.mp4', alt: 'IEDC Video 3' }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Handle keyboard events for accessibility
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }, []);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedItem, handleKeyDown]);

  const openLightbox = (item) => {
    setSelectedItem(item);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-[#c0392b] mb-8">
        Our Recent Events
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {galleryItems.map((item, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(item)}
            role="button"
            aria-label={`Open ${item.type} ${index + 1}`}
            tabIndex={0}
          >
            {item.type === 'image' ? (
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <video 
                src={item.src}
                alt={item.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                preload="metadata"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.type === 'image' ? 'View Image' : 'Play Video'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-hidden"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className={`
              relative max-w-full max-h-full flex items-center justify-center
              ${isZoomed ? 'w-full h-full' : 'w-[90%] h-[90%]'}
              transition-all duration-300 ease-in-out
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'image' ? (
              <img 
                src={selectedItem.src} 
                alt={selectedItem.alt}
                className={`
                  object-contain rounded-lg
                  ${isZoomed ? 'w-full h-full' : 'max-w-full max-h-full'}
                  transition-all duration-300 ease-in-out
                `}
                onClick={toggleZoom}
              />
            ) : (
              <video 
                src={selectedItem.src} 
                controls 
                autoPlay
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
            
            {/* Control Buttons */}
            <div className="absolute top-4 right-4 flex space-x-4">
              {selectedItem.type === 'image' && (
                <button 
                  onClick={toggleZoom}
                  className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label={isZoomed ? 'Zoom Out' : 'Zoom In'}
                >
                  {isZoomed ? '↙ Zoom Out' : '↗ Zoom In'}
                </button>
              )}
              <button 
                onClick={closeLightbox} 
                className="text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;