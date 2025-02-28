// import React, { useState, useEffect } from 'react';
// import tedx from './tedxannouncement.png';
// import group from './group.JPG';
// import group1 from '../Gallery/GalleryImages/IMG_5217.webp'
// const Announcements = [
//   { id: 1, src: tedx },
//   { id: 2, src: group1 },
//   { id: 3, src: group },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(''); 

//   const handleThumbnailClick = (index) => {
//     setDirection(index > currentIndex ? 'right' : 'left');
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setDirection('');
//     }, 300);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
    
//       const nextIndex = (currentIndex + 1) % Announcements.length;

//       setDirection('right');
//       setTimeout(() => {
//         setCurrentIndex(nextIndex);
//         setDirection('');
//       }, 300);
//     }, 5000); 

//     return () => clearInterval(interval); 
//   }, [currentIndex]);

//   return (
//     <div className="flex flex-col items-center carousel-container">
      
//       <div className="flex justify-center w-full overflow-hidden carousel-image-container ">
//         <img
//           src={Announcements[currentIndex].src}
//           alt={`Announcement ${currentIndex + 1}`}
//           className={` md:w-[800px] md:h-[450px] sm:w-[600px] object-cover border-2 border-red-600 transition-transform duration-300 x-sm:w-[400px] x-sm:h-[300px] ${
//             direction === 'right'
//               ? 'translate-x-full'
//               : direction === 'left'
//               ? '-translate-x-full'
//               : 'translate-x-0'
//           }`}
//         />
//       </div>

//       {Announcements.length > 1 && (
//         <div className="flex justify-center mt-4 space-x-2 carousel-thumbnails">
//           {Announcements.map((item, index) => (
//             <img
//               key={item.id}
//               src={item.src}
//               alt={`Thumbnail ${index + 1}`}
//               className={`cursor-pointer w-[50px] h-[50px] object-cover border-2 transition-all duration-300 ${
//                 currentIndex === index
//                   ? 'border-red-500'
//                   : 'border-transparent'
//               }`}
//               onClick={() => handleThumbnailClick(index)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carousel;


import React from "react";

const scheduleData = [
  {
    sno: 1,
    action: (
      <>
        Prayer Song & Classical Dance
        <br />
        Address by Dr. M. Venu (Principal, Vishnu Institute of Technology)
        <br />
        Address by Mr. Suraj Lankey (Organizer, TEDxVishnu Institute)
        <br />
        Address by Ms. Vaishnavi Dasika (Co-Organizer, TEDxVishnu Institute)
      </>
    ),
    time: "9:30 AM - 10:00 AM",
  },
  { sno: 2, action: "Talk 1: Mr. Sandeep Israni (Partner, Tulip Group)", time: "10:00 AM - 10:20 AM" },
  { sno: 3, action: "Talk 2: Mr. Bijay Bairagi (Supply Chain Management Head, East West Seeds)", time: "10:20 AM - 10:40 AM" },
  { sno: 4, action: "Talk 3: Dr. JVS Bhaskar (Founder & CEO, Inspire International Foundation)", time: "10:40 AM - 11:00 AM" },
  { sno: 5, action: "Talk 4: Mr. Eswar Bolegar (Fitness Influencer)", time: "11:00 AM - 11:20 AM" },
  { sno: 6, action: "Talk 5: Mr. Ravi Mantri (Author)", time: "11:20 AM - 11:40 AM" },
  { sno: 7, action: "Talk 6: Dr. Moksha Kalyanram Abhiramula (Advocate)", time: "11:40 AM - 12:00 PM" },
  { sno: 8, action: "LUNCH BREAK", time: "12:00 PM - 1:00 PM" },
  { sno: 9, action: "Culturals", time: "1:00 PM - 1:10 PM" },
  { sno: 10, action: "Talk 7: Mr. Raul Handa (Founder & CEO, The Forttuna Group)", time: "1:10 PM - 1:30 PM" },
  { sno: 11, action: "Talk 8: Ms. Sahithi Divi (Consultant, Govt. of Andhra Pradesh - Tourism Dept.)", time: "1:30 PM - 1:50 PM" },
  { sno: 12, action: "Talk 9: Mr. Kowshik Maridi (Financial Expert)", time: "1:50 PM - 2:10 PM" },
  { sno: 13, action: "Address by Akash Rao Mallareddy (Curator, TEDxVishnu Institute)", time: "2:10 PM - 2:15 PM" },
  { sno: 14, action: "Vote Of Thanks by Ms. Srilakshmi (Faculty Coordinator, TEDxVishnu Institute)", time: "2:15 PM - 2:20 PM" },
  { sno: 15, action: "VALEDICTORY", time: "2:25 PM - 2:30 PM" },
  { sno: 16, action: "PHOTO SESSION", time: "2:35 PM - 2:40 PM" },
];

const ScheduleTable = () => {
  return (
    <div style={{ padding: "20px" }}>
      <table style={{ width: "80%", margin: "auto", borderCollapse: "collapse", border: "2px solid white" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid white" }}>
            <th style={{ border: "1px solid white", padding: "10px", textAlign: "left" }}>SNO</th>
            <th style={{ border: "1px solid white", padding: "10px", textAlign: "left" }}>PLAN OF ACTION</th>
            <th style={{ border: "1px solid white", padding: "10px", textAlign: "left" }}>TIME</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid white" }}>
              <td style={{ border: "1px solid white", padding: "10px", textAlign: "left" }}>{item.sno}</td>
              <td style={{ border: "1px solid white", padding: "10px", textAlign: "left" }}>{item.action}</td>
              <td style={{ border: "1px solid white", padding: "10px", textAlign: "left" }}>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;

