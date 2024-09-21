import React, { useState, useEffect } from 'react';

import pic1 from './GalleryImages/AdityaHassan.webp';
import pic2 from './GalleryImages/DSC02929.webp';
import pic3 from './GalleryImages/DSC03002.webp';
import pic4 from './GalleryImages/DSC03003.webp';
import pic5 from './GalleryImages/DSC03208.webp';
import pic6 from './GalleryImages/DSC03220.webp';
import pic7 from './GalleryImages/DSC03255.webp';
import pic8 from './GalleryImages/DSC03539.webp';
import pic9 from './GalleryImages/DSC03527.webp';
import pic10 from './GalleryImages/DSC03270.webp';


const Announcements = [
  { id: 1, src: pic1 },
  { id: 2, src: pic2 },
  { id: 3, src: pic3 },
  { id: 4, src: pic4 },
  { id: 5, src: pic5 },
  { id: 6, src: pic6 },
  { id: 7, src: pic7 },
  { id: 8, src: pic8 },
  { id: 9, src: pic9 },
  { id: 10, src: pic10 },

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
    <div className="flex flex-col items-center carousel-container pt-[10%]">
      <div className="flex justify-center w-full overflow-hidden carousel-image-container">
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
