import React from 'react'
import pic14 from '../../components/Gallery/GalleryImages/The Organizing Commitee.webp';
const GalleryHeroImage = () => {
  return (
    <div className='pt-10'>
       
      <div
        className="
          relative col-span-1 sm:col-span-2 lg:col-span-3 overflow-hidden 
          rounded-lg shadow-lg cursor-pointer hover:scale-102 hover:z-10 aspect-[16/9]
        "
      >
        <img
          alt="The Organizing Committee"
          src={pic14}
          loading="lazy"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  )
}

export default GalleryHeroImage