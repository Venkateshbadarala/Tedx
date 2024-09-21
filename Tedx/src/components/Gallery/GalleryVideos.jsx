import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 'PqG9oPc4CnA', title: 'Video 1' },
  { id: 'I8TNQAdWcvs', title: 'Video 2' },
  { id: 'h9QGjQx9dSI', title: 'Video 3' },
  { id: 'buKowS0WB2o', title: 'Video 4' },
  { id: 'Ccd6XJ37lWA', title: 'Video 5' },
  { id: 'lwgFRfSOUB8', title: 'Video 6' },
];

const GalleryVideos = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-10 x-sm:pt-8 sm:pt-12">
      <h1 className="text-2xl text-red-600 border-b border-red-700 x-sm:text-xl sm:text-3xl md:text-4xl">
        SEASON 1 TALKS
      </h1>
      <div className="grid grid-cols-1 gap-4 p-2 x-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:w-[90%] ">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="relative overflow-hidden transition-transform duration-300 ease-in-out transform rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:z-10 w-full h-[14rem] x-sm:h-[16rem] sm:h-[18rem] md:h-[20rem]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              title={video.title}
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="object-cover w-full h-full"
            ></iframe>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryVideos;
