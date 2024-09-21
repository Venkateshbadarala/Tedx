import React from 'react'
import GalleryCards from '../Gallery/GalleryCards'
import GalleryVideos from '../Gallery/GalleryVideos'
import GalleryHeroImage from '../Gallery/GalleryHeroImage'

const Gallery = () => {
  return (
    <div>
      <GalleryHeroImage/>
      <GalleryCards/>
      <GalleryVideos/>
    </div>
  )
}

export default Gallery