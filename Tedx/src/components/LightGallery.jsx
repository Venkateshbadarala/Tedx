import React, { useState, useEffect, useCallback } from 'react';

export default function LightGalleryWrapper({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1].image);
  }, [currentIndex, images]);

  const showPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1].image);
  }, [currentIndex, images]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        showNext();
      } else if (event.key === 'ArrowLeft') {
        showPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showNext, showPrev]);

  const openImage = (index) => {
    setSelectedImage(images[index].image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    
      <div
  className="
    relative col-span-1 sm:col-span-2 lg:col-span-3 overflow-hidden transition-transform duration-300 ease-in-out transform 
    rounded-lg shadow-lg cursor-pointer hover:scale-102 hover:z-10 sm:aspect-[16/9] lg:aspect-[16/7] aspect-[16/9] border border-red-600
  "
  onClick={() => openImage(0)}
>
  <img
    alt={images[0].alt}
    src={images[0].image}
    className="object-cover w-full h-full"
  />
  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black to-transparent hover:opacity-60"></div>
</div>

      {images.slice(1).map((galleryItem, index) => (
        <div
          key={index + 1}
          className="relative overflow-hidden transition-transform duration-300 ease-in-out transform border border-red-600 rounded-lg shadow-lg cursor-pointer hover:scale-102 hover:z-10 "
          style={{ aspectRatio: '1/1' }}
          onClick={() => openImage(index + 1)}
        >
          <img
            alt={galleryItem.alt}
            src={galleryItem.image}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black to-transparent hover:opacity-60"></div>
        </div>
      ))}

      
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <button
            className="absolute text-4xl font-bold text-white left-6 lg:left-12"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &lt;
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-screen rounded-lg shadow-lg"
          />
          <button
            className="absolute text-4xl font-bold text-white right-6 lg:right-12"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            &gt;
          </button>
          <button
            className="absolute text-3xl font-bold text-white top-4 right-4 lg:top-6 lg:right-6"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
