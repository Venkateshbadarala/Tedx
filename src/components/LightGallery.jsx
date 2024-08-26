import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';



export default function LightGalleryWrapper({ images }) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, ]}
    >
      {images.map((galleryItem, index) => (
        <a href={galleryItem.image} key={index} >
          <img
            alt={galleryItem.alt}
            src={galleryItem.image}
            onInit={onInit}
            className="gallery-image"
          />
        </a>
      ))}
    </LightGallery>
  );
}
