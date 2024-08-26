import React from 'react';
import Timer from '../Timer';
import PricingCards from '../PricingCards';
import background from '../../assets/images/home/background.png';
import planet1 from '../../assets/images/home/planet1.png';
import planet2 from '../../assets/images/home/planet2.png';
import planet3 from '../../assets/images/home/planet3.png';
import sky from '../../assets/images/home/sky1.jpg';

import Feedback from '../Feedback';

const Home = () => {
  return (
    <div className='overflow-x-hidden text-white'
      style={{
        backgroundImage: `url(${sky})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className='parallex relative flex flex-col items-center justify-center h-[150vh] text-white'>
        <div className='pt-[10%]'>
          <h1 className='font-bold text-[9rem] uppercase asteriod'>
            <p className='z-30'>Cosmic connections</p>
          </h1>
          <h1 className='flex flex-col items-center -mt-10'>
            The hidden ties that bind us, resonating with the universe's delicate web of connections.
          </h1>
        </div>

        <div className='absolute -mt-[30%] flex justify-center items-center'>
          <img src={background} alt="background" className='w-[85%]' />
        </div>

        <div className='absolute top-0 left-0 w-full h-full mix-blend-screen'
          style={{
            backgroundImage: `url(${sky})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <img src={planet1} alt="planet1" className='absolute -left-[5%] transform -translate-y-1/2 top-[20%]' />
          <img src={planet2} alt="planet2" className='absolute -right-[20%] transform -translate-y-1/2 bottom-[20%]' />
          <img src={planet3} alt="planet3" className='absolute bottom-0 right-0 w-1/4' />
        </div>
      </div>

      <div className='flex flex-col items-center justify-around p-10 space-y-44'
        style={{
          backgroundImage: `url(${sky})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div className='flex flex-col items-center justify-center font-extrabold uppercase'>
          <p className='text-[15rem] absolute -mt-64 z-10 opacity-50 shadow-xl asteriod'>
            countdown
          </p>
          <div className='relative'>
            <Timer />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[4rem] font-extrabold'>4th JANUARY 2025</h1>
          <p className='text-[20px] text-red-600 montserrat tracking-widest uppercase'>
            Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh.
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center h-[80vh]'>
        <h1 className='text-[7rem] font-extrabold asteriod'>Announcements</h1>
        <PricingCards />
        <div>
          <Feedback/>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
