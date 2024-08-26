import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import lightGallery from 'lightgallery';
import 'flickity/dist/flickity.min.css';
import 'lightgallery/css/lightgallery.css';

const FlickityCarouselGallery = ({ images, className }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize Flickity
    const flickityInstance = new Flickity(carouselRef.current, {
      cellAlign: 'center',
      pageDots: false,
      contain: true,
      autoPlay: true,
      wrapAround: true, // Ensures images continue to scroll infinitely
    });

    // Initialize LightGallery when Flickity is ready
    flickityInstance.on('ready', () => {
      lightGallery(carouselRef.current.querySelector('.flickity-slider'), {
        selector: '.carousel-cell',
      });
    });

    // Clean up Flickity instance on component unmount
    return () => {
      flickityInstance.destroy();
    };
  }, []);

  return (
    <div
      id="flickity-carousel-gallery-demo"
      className={`main-carousel ${className}`}
      ref={carouselRef}
    >
      {images.map((scrollingImage, index) => (
        <a
          key={index}
          data-lg-size="1600-1200"
          href={scrollingImage.image}
          className="carousel-cell"
        >
          <img 
            src={scrollingImage.image} 
            alt={scrollingImage.alt} 
            className="carousel-image"
            onLoad={(e) => e.currentTarget.style.visibility = 'visible'}
            onError={(e) => e.currentTarget.style.visibility = 'hidden'}
          />
        </a>
      ))}
    </div>
  );
};

export default FlickityCarouselGallery;
