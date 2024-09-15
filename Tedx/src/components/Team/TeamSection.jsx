import React from 'react';
import { teamCategories } from './TeamData';
import { TeamCards } from './TeamCards';

const TeamSection = () => {
  return (
    <div className="pt-28">
        <div className='flex flex-col items-center justify-center gap-4 pb-10 text-center'>
             <h1 className='text-red-600 uppercase sm:text-5xl x-sm:text-3xl'>Meet our Core team</h1>
             <p className='font-normal text-white text-large x-sm:text-[14px] x-sm:px-3'>The Core team here at TEDx Vishnu Institute is made up of a diverse bunch of awesome humans!  </p>
             <p className='font-normal text-white text-large x-sm:text-[14px] x-sm:px-3'>We are driven by passion and curiosity. We are inspired by ideas. And we want to leave the world better than we found it.</p>
            
        </div>
      {Object.keys(teamCategories).map(category => (
        <div key={category} className="flex items-center justify-center mb-8 x-sm:flex-col">
          <h2 className="mb-4 sm:text-3xl font-bold text-center text-red-600 underline text- underline-offset-8 decoration-white x-sm:text-[1.2rem] ">{category}</h2>
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
          
        </div>
      ))}
    </div>
  );
}

export default TeamSection;
