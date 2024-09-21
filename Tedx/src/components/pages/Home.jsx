import React, { useRef } from 'react';
import Timer from '../Timer';
import PricingCards from '../PricingCards';
import background from '../../assets/images/home/background.png';
import planet1 from '../../assets/images/home/planet1.png';
import planet2 from '../../assets/images/home/planet2.png';
import planet3 from '../../assets/images/home/planet3.png';
import sky from '../../assets/images/home/sky1.jpg';
import Announce from '../Announcement/Announcement';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.5, 0.2, 0]);
  const planet1Y = useTransform(scrollYProgress, [0, 1], ['10%', '420%']);
  const planet2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);
  const planet3Y = useTransform(scrollYProgress, [0, 8], ['0%', '2000%']);
  const scroll1 = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.2, 1]);
  const textScrollY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 10, -50]); 
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);



  return (
    <div className="flex flex-col overflow-x-hidden text-white">
      <motion.div
        ref={container}
        className="parallex relative flex flex-col items-center justify-center md:h-[150vh] text-white x-sm:h-[120vh] sm:h-[160vh]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="pt-[9%] flex flex-col justify-between items-center">
          <motion.h1
            className="font-bold md:text-[9rem] uppercase asteriod x-sm:text-[5rem] sm:text-[5rem] text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ scale, opacity }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          >
            <p className="z-30 x-sm:hidden sm:flex">Cosmic connections</p>
            <div>
              <p className="z-30 sm:hidden">Cosmic</p>
              <p className="z-30 -mt-10 sm:hidden">connections</p>
            </div>
          </motion.h1>
          <motion.h1
            className="flex flex-col items-center md:-mt-10 x-sm:text-[15px] text-center sm:text-[12px] md:text-[18px] font-normal x-sm:-mt-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
          >
            The hidden ties that bind us, resonating with the universe's delicate web of connections.
          </motion.h1>
        </div>

     
        <motion.div
          className="absolute md:-mt-[30%] flex justify-center items-center x-sm:-mt-[100%] sm:-mt-[60%]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <motion.img
            src={background}
            alt="background"
            style={{ scale, opacity }}
            className="md:w-[80%] x-sm:w-[1000%]"
          />
        </motion.div>

        <div
          className="absolute top-0 left-0 w-full h-full mix-blend-screen"
          style={{
            backgroundImage: `url(${sky})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <motion.img
            src={planet1}
            alt="planet1"
            className="absolute md:-left-[8rem] transform -translate-y-1/2 md:top-[10%] sm:-left-[34%] sm:top-[0%] x-sm:-left-[8rem] x-sm:top-[0%] z-50"
            style={{ y: planet1Y }}
          />
          <motion.img
            src={planet2}
            alt="planet2"
            className="absolute md:-right-[20%] transform -translate-y-1/2 md:bottom-[20%] sm:-right-[34%] sm:bottom-[15%] x-sm:-right-[40%] x-sm:bottom-[15%] z-50"
            style={{ y: planet2Y }}
          />
          <motion.img
            src={planet3}
            alt="planet3"
            className="absolute z-50 w-1/4 md:right-0 md:bottom-0 x-sm:bottom-10 sm:hidden md:flex"
            style={{ y: planet3Y }}
          />
        </div>
      </motion.div>

    
      <motion.div
        className="flex flex-col items-center justify-around p-10 sm:space-y-44 x-sm:space-y-44 x-sm:-mt-[10rem] md:mt-[1rem]"
        style={{
          backgroundImage: `url(${sky})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <motion.div className="flex flex-col items-center justify-center font-extrabold uppercase">
          <motion.p 
          style={{
            opacity:scroll1
          }}
          className="md:text-[15rem] absolute md:-mt-64 z-20 opacity-80 shadow-xl asteriod x-sm:text-[6rem] x-sm:-mt-36 sm:text-[9rem]">
            countdown
          </motion.p>
          <div className="relative">
            <Timer />
          </div>
        </motion.div>
      </motion.div>

      
      <motion.div
        style={{
          backgroundImage: `url(${sky})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: scrollYProgress,
        }}
        className="flex flex-col items-center justify-center text-center h-[80vh] overflow-hidden -z-50 x-sm:h-[30vh] sm:h-[40vh] md:h-[60vh] "
      >
       <motion.h1
  className="md:text-[4rem] font-extrabold x-sm:text-[2rem] sm:text-[3rem] "
  style={{ opacity: textOpacity, y: textScrollY }}
>
  4th JANUARY 2025
</motion.h1>
<motion.p
  className="md:text-[20px] text-red-600 montserrat tracking-widest uppercase x-sm:text-[15px] sm:text-[20px]"
  style={{ opacity: textOpacity, y: textScrollY }}
>
  Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh.
</motion.p>

      </motion.div>

      <div
        className="flex flex-col justify-center items-center x-sm:h-[80vh] sm:h-[100vh]"
        style={{
          backgroundImage: `url(${sky})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="md:text-[7rem] font-extrabold asteriod x-sm:text-[4rem] sm:text-[6rem]">Announcements</h1>
        <PricingCards />
        <div>
          <Announce />
        </div>
      </div>
    </div>
  );
};

export default Home;
