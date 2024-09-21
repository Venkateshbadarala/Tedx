import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { teamCategories } from './TeamData';
import { TeamCards } from './TeamCards';

const TeamSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  const yTransform = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <div className="pt-28" ref={containerRef}>
      <motion.div style={{ y: yTransform }} className="flex flex-col items-center justify-center">
        <div className='flex flex-col items-center justify-center gap-4 pb-10 text-center'>
          <h1 className='text-red-600 uppercase sm:text-5xl x-sm:text-3xl'>Meet our Core Team</h1>
          <p className='font-normal text-white text-large x-sm:text-[14px] x-sm:px-3'>
            The Core team here at TEDx Vishnu Institute is made up of a diverse bunch of awesome humans!
          </p>
          <p className='font-normal text-white text-large x-sm:text-[14px] x-sm:px-3'>
            We are driven by passion and curiosity. We are inspired by ideas. And we want to leave the world better than we found it.
          </p>
        </div>

        {Object.keys(teamCategories).map(category => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center mb-8 x-sm:flex-col"
          >
            <h2 className="mb-4 sm:text-3xl font-bold text-center text-red-600 underline underline-offset-8 decoration-white x-sm:text-[1.2rem]">
              {category}
            </h2>
            <div className="grid grid-cols-3 gap-10 sm:grid-cols-2 lg:grid-cols-3 x-sm:grid-cols-1">
              {teamCategories[category].filter(member => member.name && member.image).map(member => (
                <TeamCards
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  LinkedInLink={member.LinkedInLink || '#'}
                  MailLink={member.MailLink || '#'}
                  InstagramLink={member.InstagramLink || '#'}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TeamSection;
