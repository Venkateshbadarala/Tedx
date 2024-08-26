import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Burgermenu from './Burgermenu';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import logo from '../assets/images/home/logo.jpg';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';


import { Link as ScrollLink } from 'react-scroll'; 

const Navbar = () => {
  const [isEditionsOpen, setIsEditionsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const header = [
    { name: 'Home', link: '/', active: pathname === '/' },
    { name: 'About', link: '/About', active: pathname === '/About' },
    { name: 'Speakers', link: '/Speakers', active: pathname === '/Speakers' },
    { name: 'Team', link: '/Team', active: pathname === '/Team' },
    { name: 'Venue', link: 'footer', active: pathname === '/Venue' }, // Removed the route navigation
    { name: 'Gallery', link: '/Gallery', active: pathname === '/Gallery' },
    { name: 'Editions', link: '#' },
  ];

  const Editions = [{ name: 'Season 1', link: '/Courses/1' }];

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: '-145%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed z-50 flex flex-col"
    >
      <div className="flex flex-row items-center justify-around font-bold text-white bg-black tablet:p-4 rounded-[10px] w-[100vw] ">
        <div className="laptop:text-[] tablet:w-[20rem] ">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex flex-row justify-center items-center tablet:text-[15px] tablet:space-x-10 phone:space-x-2 phone:text-[10px]">
          {header.map((item, index) => (
            <div
              key={index}
              className="relative tablet:hidden laptop:flex "
              onMouseEnter={() => {
                if (item.name === 'Editions') {
                  setIsEditionsOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item.name === 'Editions') {
                  setIsEditionsOpen(false);
                }
              }}
            >
             
              {item.name === 'Venue' ? (
                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={500}
                  className="text-white cursor-pointer hover:text-red-600"
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                  to={item.link}
                  className={`text-white hover:text-red-600 ${
                    item.active ? 'text-red-600 dark:text-red-600' : 'text-white dark:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {item.name === 'Editions' && (
                <>
                  <button
                    onClick={() => setIsEditionsOpen(!isEditionsOpen)}
                    className="ml-2 text-lg text-white focus:outline-none"
                  >
                    {isEditionsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {isEditionsOpen && (
                    <div className="absolute z-10 flex flex-col p-3 mt-2 bg-white text-[15px] text-black w-[15rem] shadow-lg top-[1rem] left-1/2 transform -translate-x-1/2 rounded-[10px]">
                      {Editions.map((season, idx) => (
                        <Link
                          key={idx}
                          to={season.link}
                          className="block p-3 transition hover:bg-gray-200"
                        >
                          {season.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <div className="bg-red-600 p-2 rounded-[5px]">
          <h1>Buy Tickets</h1>
        </div>
        <div className="laptop:hidden">
          <Burgermenu header={header} Editions={Editions} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
