import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { speakers } from './SpeakerData';
import { TeamCards } from '../Team/TeamCards';

const TeamSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const yTransform = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <div className="pt-28" ref={containerRef}>
      <motion.div
        style={{ y: yTransform }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-4 pb-10 text-center">
          <h1 className="text-red-600 uppercase sm:text-4xl x-sm:text-3xl">
            SPEAKERS
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-10 sm:grid-cols-2 lg:grid-cols-3 x-sm:grid-cols-1">
          {speakers.map((speaker, index) => (
            <TeamCards
              key={index}
              name={speaker.name}
              role={speaker.role}
              image={speaker.image}
              LinkedInLink={speaker.LinkedInLink || '#'}
              MailLink={speaker.MailLink || '#'}
              InstagramLink={speaker.InstagramLink || '#'}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamSection;
