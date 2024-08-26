import React from 'react';
import banner from './mediaImg/banner.png';
import sitaudi from './mediaImg/sitaaudi1.png';
import sitaudi1 from './mediaImg/sitaaudi2.png';
import sitaudi2 from './mediaImg/sitaaudi3.png';
import sitaudi3 from './mediaImg/sitaaudi4.png';
import image from './mediaImg/imgm2.png';
import LightGalleryWrapper from '../LightGallery';

const Media = () => {
  const mediaData = [
    { id: 1, src: banner },
    { id: 2, src: sitaudi },
    { id: 3, src: sitaudi1 },
    { id: 4, src: sitaudi2 },
    { id: 5, src: sitaudi3 },
    { id: 6, src: image },
  ];
  
  const videoData = [
    { id: 1, src: 'https://www.youtube.com/embed/lmyZMtPVodo' },
    { id: 2, src: 'https://www.youtube.com/embed/iCvmsMzlF7o' },
    { id: 3, src: 'https://www.youtube.com/embed/wX78iKhInsc' },
    { id: 4, src: 'https://www.youtube.com/embed/hg3umXU_qWc' },
    { id: 5, src: 'https://www.youtube.com/embed/0NV1KdWRHck' },
    { id: 6, src: 'https://www.youtube.com/embed/sNbGU_I9HWw' },
    { id: 7, src: 'https://www.youtube.com/embed/LTnI7cmpDZI' },
    { id: 8, src: 'https://www.youtube.com/embed/cdZZpaB2kDM' },
  ];

  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-red-600">MEDIA</h2>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-12 sm:grid-cols-2 lg:grid-cols-3">
        {mediaData.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group"
          >
            <LightGalleryWrapper
              images={[{ image: item.src, alt: `Image ${item.id}` }]}
              className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105 group-hover:opacity-90"
            />
            <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-40"></div>
          </div>
        ))}
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-red-600">VIDEOS</h2>
      </div>

      <div className="grid grid-cols-3 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videoData.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group"
          >
            <iframe
              src={item.src}
              title={`video-${item.id}`}
              className="w-full h-[15rem] object-cover transition-transform duration-500 transform group-hover:scale-105"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-40"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
