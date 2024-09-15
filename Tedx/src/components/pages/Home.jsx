import React from 'react';
import Timer from '../Timer';
import PricingCards from '../PricingCards';
import background from '../../assets/images/home/background.png';
import planet1 from '../../assets/images/home/planet1.png';
import planet2 from '../../assets/images/home/planet2.png';
import planet3 from '../../assets/images/home/planet3.png';
import sky from '../../assets/images/home/sky1.jpg';
import Announce from '../Announcement/Announcement';


const Home = () => {
  return (
    <div className='flex flex-col overflow-x-hidden text-white'
     
    >
      <div className='parallex relative flex flex-col items-center justify-center md:h-[150vh] text-white  x-sm:h-[120vh] sm:h-[160vh]'>
        <div className='pt-[10%] flex flex-col justify-between items-center'>
          <h1 className='font-bold md:text-[9rem] uppercase asteriod x-sm:text-[5rem] sm:text-[5rem] text-center'>
            <p className='z-30 x-sm:hidden sm:flex'>Cosmic connections</p>
            <div>
            <p className='z-30 sm:hidden'>Cosmic</p>
            <p className='z-30 -mt-10 sm:hidden'>connections</p>
            </div>
            
          </h1>
          <h1 className='flex flex-col items-center md:-mt-10  x-sm:text-[15px] text-center sm:text-[12px] md:text-[18px] font-normal x-sm:-mt-3 '>
            The hidden ties that bind us, resonating with the universe's delicate web of connections.
          </h1>
        </div>

        <div className='absolute md:-mt-[30%] flex justify-center items-center x-sm:-mt-[100%] sm:-mt-[60%]'>
          <img src={background} alt="background" className='md:w-[85%] x-sm:w-[1000%]' />
        </div>

        <div className='absolute top-0 left-0 w-full h-full mix-blend-screen'
          style={{
            backgroundImage: `url(${sky})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            
          }}
        >
          <img src={planet1} alt="planet1" className='absolute md:-left-[8rem] transform -translate-y-1/2 md:top-[20%] sm:-left-[34%] sm:top-[15%] x-sm:-left-[6rem] x-sm:top-[10%]' />
          <img src={planet2} alt="planet2" className='absolute md:-right-[20%] transform -translate-y-1/2 md:bottom-[20%] sm:-right-[34%] sm:bottom-[15%] x-sm:-right-[40%] x-sm:bottom-[5%]' />
          <img src={planet3} alt="planet3" className='absolute w-1/4 md:right-0 md:bottom-0 x-sm:bottom-10' />
        </div>
      </div>

      <div className='flex flex-col items-center justify-around p-10 sm:space-y-44 x-sm:space-y-44 x-sm:-mt-[10rem] md:mt-[1rem] '
        style={{
          backgroundImage: `url(${sky})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div className='flex flex-col items-center justify-center font-extrabold uppercase'>
          <p className='md:text-[15rem] absolute md:-mt-64 z-10 opacity-50 shadow-xl asteriod x-sm:text-[6rem] x-sm:-mt-36 sm:text-[9rem] '>
            countdown
          </p>
          <div className='relative'>
            <Timer />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center text-center '>
          <h1 className='md:text-[4rem] font-extrabold x-sm:text-[2rem] sm:text-[3rem]'>4th JANUARY 2025</h1>
          <p className='md:text-[20px] text-red-600 montserrat tracking-widest uppercase x-sm:text-[15px] sm:text-[20px]  '>
            Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh.
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center  x-sm:h-[80vh] sm:h-[100vh]'
       style={{
        backgroundImage: `url(${sky})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      >
        <h1 className='md:text-[7rem] font-extrabold asteriod x-sm:text-[4rem] sm:text-[6rem]'>Announcements</h1>
        <PricingCards />
        <div className=''>
          <Announce/>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
