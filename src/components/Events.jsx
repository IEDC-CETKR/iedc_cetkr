import React, { useState, useCallback, useEffect } from 'react';
import eventsData from '../data/events.json';

const ImageViewer = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev, onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
    >
      {/* Navigation and Close Buttons */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <button 
          onClick={onClose}
          className="text-white text-3xl hover:text-gray-300 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Image Navigation */}
      {images.length > 1 && (
        <>
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 
              bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
          >
            ←
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 
              bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
          >
            →
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="relative max-w-full max-h-full">
        <img 
          src={images[currentIndex]} 
          alt={`Image ${currentIndex + 1}`}
          className="object-contain max-w-full max-h-[90vh]"
        />
      </div>

      {/* Image Info */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
          bg-white/20 text-white px-4 py-2 rounded-full"
        >
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

const EventCard = ({ event }) => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState([]);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openImageViewer = (images, startIndex = 0) => {
    setViewerImages(images);
    setInitialImageIndex(startIndex);
    setIsImageViewerOpen(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full flex flex-col">
      {/* Full Poster Image */}
      <div 
        className="w-full cursor-pointer"
        onClick={() => openImageViewer([event.poster])}
      >
        <img 
          src={event.poster} 
          alt={`${event.title} Poster`} 
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-[#e85a4f] mb-2">
          {event.title}
        </h3>
        <div className="mb-4 text-[#8e8d8a]">
          <p className="text-sm">
            <i className="fas fa-calendar mr-2"></i>{event.date}
          </p>
          <p className="text-sm">
            <i className="fas fa-map-marker-alt mr-2"></i>{event.location}
          </p>
        </div>
        <p className="text-[#8e8d8a] mb-4">
          {event.description}
        </p>
        <div className="mb-4">
          <h4 className="text-base font-semibold text-[#e85a4f] mb-2">
            Event Highlights
          </h4>
          <ul className="list-disc list-inside text-[#8e8d8a]">
            {event.highlights.map((highlight, index) => (
              <li key={index} className="text-sm">{highlight}</li>
            ))}
          </ul>
        </div>

        {/* Gallery Preview */}
        <div className="mt-auto">
          {event.images.length > 0 && (
            <div className="flex space-x-2 mb-4">
              {event.images.slice(0, 2).map((image, index) => (
                <div 
                  key={index} 
                  className="w-1/2 h-24 relative"
                  onClick={() => openImageViewer(event.images, index)}
                >
                  <img 
                    src={image} 
                    alt={`Event Preview ${index + 1}`} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {event.images.length > 2 && index === 1 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-lg">
                        +{event.images.length - 2} More
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Gallery Button */}
          {event.images.length > 0 && (
            <button 
              onClick={() => openImageViewer(event.images)}
              className="w-full bg-[#e85a4f] text-white py-2 rounded-lg hover:bg-[#c0392b] transition-colors"
            >
              View Event Gallery
            </button>
          )}
        </div>
      </div>

      {/* Image Viewer Modal */}
      {isImageViewerOpen && (
        <ImageViewer 
          images={viewerImages}
          initialIndex={initialImageIndex}
          onClose={() => setIsImageViewerOpen(false)}
        />
      )}
    </div>
  );
};

const EventsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-36">
      <h1 className="text-3xl md:text-4xl font-bold text-[#e85a4f] text-center mb-16">
        Completed Events
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.events.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;