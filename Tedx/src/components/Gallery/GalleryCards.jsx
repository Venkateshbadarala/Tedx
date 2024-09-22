import React, { useState } from 'react';

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
import pic11 from './GalleryImages/sahitha.webp';
import pic12 from './GalleryImages/durgaglk.webp';
import pic13 from './GalleryImages/IMG_5217.webp';

const Announcements = [
  { id: 1, src: pic1 },
  { id: 2, src: pic3 },
  { id: 3, src: pic10 },
  { id: 8, src: pic8 },
  { id: 12, src: pic12 },
  { id: 4, src: pic2 },
  { id: 9, src: pic9 },
  { id: 5, src: pic5 },
  { id: 6, src: pic6 },
  { id: 11, src: pic11 },
  { id: 7, src: pic7 },
  { id: 10, src: pic4 },
  { id: 13, src: pic13 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="pb-10 text-2xl text-red-600 border-b border-red-700 sm:text-3xl md:text-4xl">
        Event SlideShow
      </h1>
      <div className="flex justify-center w-full overflow-hidden">
        <img
          src={Announcements[currentIndex].src}
          alt={`Announcement ${currentIndex + 1}`}
          className="object-cover border-2 border-red-600 md:w-[800px] md:h-[450px] sm:w-[600px] x-sm:w-[400px] x-sm:h-[300px]"
         
        />
      </div>

      {Announcements.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2 overflow-y-auto">
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
