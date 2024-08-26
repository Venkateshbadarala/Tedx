import React from 'react';
import tedx from '../../assets/images/teamphotos/Akash.png'; 
import FlickityCarouselGallery from './Scrolling';

const Announcements = [
    { id: 1, src: tedx },
];

const Announce = () => {
  return (
    <div className="gallery-container">
      {Announcements.map((item) => (
        <div key={item.id} className="gallery-item">
          <FlickityCarouselGallery
            images={[{ image: item.src, alt: `Announcement ${item.id}` }]}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Announce;
