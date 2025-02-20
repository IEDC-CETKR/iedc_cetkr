import React, { useState } from 'react';
import eventsData from '../data/events.json';

const EventCard = ({ event, onImageClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={event.poster} 
          alt={`${event.title} Poster`} 
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-6">
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
        <div className="mb-4 grid grid-cols-2 gap-2">
          {event.images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`${event.title} Event Image`} 
              className="w-full h-24 object-cover rounded-lg grayscale hover:grayscale-0 transition-all cursor-pointer"
              onClick={() => onImageClick(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#e85a4f] text-center mb-12">
        Completed Events
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.events.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            onImageClick={openLightbox}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeLightbox}
        >
          <div className="max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Event Image" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;