import { GalleryCategories } from './GalleryData';
import LightGalleryWrapper from '../LightGallery';


export default function Gallery() {
   

   
    const categories = GalleryCategories ? Object.keys(GalleryCategories) : [];

    return (
        <div className="px-10 pt-20 gallery-container">
            
            {categories.length > 0 ? (
                categories.map(category => (
                    <div key={category} className="gallery-category">
                        <h2 className="text-2xl font-bold">{category}</h2>
                        <div className="gallery-items">
                            {GalleryCategories[category] && GalleryCategories[category].length > 0 && (
                                <LightGalleryWrapper images={GalleryCategories[category]}  />
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p>No categories available.</p>
            )}
        </div>
    );
}
