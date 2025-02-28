// import React, { useRef } from 'react';
// import Timer from '../Timer';
import PricingCards from '../PricingCards';
// import background from '../../assets/images/home/background.png';
// import planet1 from '../../assets/images/home/planet1.png';
// import planet2 from '../../assets/images/home/planet2.png';
// import planet3 from '../../assets/images/home/planet3.png';
import sky from '../../assets/images/home/sky1.jpg';
import Announce from '../Announcement/Announcement';
import Landing from '../Homepages/Landing'
// import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start start', 'end start'],
  // });

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.5, 0.2, 0]);
  // const planet1Y = useTransform(scrollYProgress, [0, 1], ['10%', '420%']);
  // const planet2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);
  // const planet3Y = useTransform(scrollYProgress, [0, 8], ['0%', '2000%']);
  // const scroll1 = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.2, 1]);
  // const textScrollY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 10, -50]); 
  // const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 2, 1]);



  return (
    <div className="flex flex-col overflow-x-hidden text-white">
      <div>
        <Landing/>
      </div>

      <div
        className="flex flex-col items-center justify-center lg:pb-10"
        style={{
          backgroundImage: `url(${sky})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="md:text-[7rem] font-extrabold asteriod x-sm:text-[3.8rem] sm:text-[6rem]">Schedule</h1>
        
     
          <Announce />
       
      </div>
    </div>
  );
};

export default Home;
