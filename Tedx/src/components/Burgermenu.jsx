import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { RiTeamFill } from "react-icons/ri";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { RiGalleryView2 } from "react-icons/ri";
import logo from '../assets/images/home/logo.jpg';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosMicrophone } from "react-icons/io";
import { GrChapterAdd } from "react-icons/gr";

const iconMap = {
  Home: <FaHome className="mr-2" />,
  Speakers: <IoIosMicrophone className="mr-2" />,
  Editions: <GrChapterAdd className="mr-2" />,
  Team: <RiTeamFill className="mr-2" />,
  About: <HiMiniInformationCircle className="mr-2" />,
  Venue: <IoLocation className="mr-2" />,
  Gallery: <RiGalleryView2 className="mr-2" />
};

const socailmedia = [
  {
    link: "https://www.instagram.com/tedxvishnuinstitute?igsh=ZHN3NmU2YzV0OHdn",
    icon: <FaInstagram className='w-5 h-5' />
  },
  {
    link: "https://www.linkedin.com/company/tedxvishnuinstitute/",
    icon: <FaLinkedinIn className='w-5 h-5' />
  },
];

const Burgermenu = ({ header, Editions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditionsOpen, setIsEditionsOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <div>
      <div className="p-4 lg:hidden">
        <button
          className="text-2xl text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>
      <div
        className={`fixed inset-0 z-20 flex flex-col space-y-10 items-center p-5 text-white bg-black transition-transform transform shadow-new-shadow rounded-r-[30px] w-[16rem] ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="absolute top-0 right-0 p-5">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <RxCross2 />
          </button>
        </div>
        <div>
          <img src={logo} alt="pic1" />
        </div>
        <div className="flex flex-col space-y-3">
          {header.map((item, index) => (
            <div key={index} className="flex flex-col pt-2">
              <div className="flex items-center justify-between w-[190px] p-2 transition-transform transform hover:scale-105 hover:bg-slate-950 text-white rounded-lg bg-inherit shadow-custom">
                <Link
                  to={item.link}
                  className="flex items-center justify-center text-lg font-semibold text-center text-white hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {iconMap[item.name] || null}
                  {item.name}
                </Link>
                {item.name === 'Editions' && (
                  <button
                    onClick={() => setIsEditionsOpen(!isEditionsOpen)}
                    className="text-lg text-white focus:outline-none"
                  >
                    {isEditionsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                )}
              </div>
             
              {item.name === "Editions" && isEditionsOpen && (
                <div className="flex flex-col gap-4 pt-2 pl-5 rounded bg-slate-950">
                  {Editions.map((entry, idx) => (
                    <Link
                      key={idx}
                      to={entry.link}
                      className="text-sm text-gray-300 transition duration-200 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {entry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="fixed flex flex-col mr-8 bottom-9 x-sm:mt-2">
          <h3 className="pb-1 mb-2 sm:text-xl font-bold text-red-600 border-b x-sm:text-[18px]">Follow Us</h3>
          <div className="flex mt-4 x-sm:items-center x-sm:justify-start sm:space-x-5 x-sm:flex-row sm:flex-row x-sm:gap-4 sm:justify-start">
            {socailmedia.map((item, index) => (
              <div key={index}>
                <a href={item.link} className='hover:text-red-600'>
                  <p>{item.icon}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 transition-opacity duration-300 bg-black opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Burgermenu;
