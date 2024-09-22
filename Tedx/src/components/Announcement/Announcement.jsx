import React, { useState, useEffect } from 'react';
import tedx from './tedxannouncement.png';
import group from './group.JPG';
import group1 from '../Gallery/GalleryImages/IMG_5217.webp'
const Announcements = [
  { id: 1, src: tedx },
  { id: 2, src: group1 },
  { id: 3, src: group },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); 

  const handleThumbnailClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setTimeout(() => {
      setCurrentIndex(index);
      setDirection('');
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
    
      const nextIndex = (currentIndex + 1) % Announcements.length;

      setDirection('right');
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setDirection('');
      }, 300);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center carousel-container">
      
      <div className="flex justify-center w-full overflow-hidden carousel-image-container ">
        <img
          src={Announcements[currentIndex].src}
          alt={`Announcement ${currentIndex + 1}`}
          className={` md:w-[800px] md:h-[450px] sm:w-[600px] object-cover border-2 border-red-600 transition-transform duration-300 x-sm:w-[400px] x-sm:h-[300px] ${
            direction === 'right'
              ? 'translate-x-full'
              : direction === 'left'
              ? '-translate-x-full'
              : 'translate-x-0'
          }`}
        />
      </div>

      {Announcements.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2 carousel-thumbnails">
          {Announcements.map((item, index) => (
            <img
              key={item.id}
              src={item.src}
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer w-[50px] h-[50px] object-cover border-2 transition-all duration-300 ${
                currentIndex === index
                  ? 'border-red-500'
                  : 'border-transparent'
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
