import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
// import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import Feedback from '../FeedbackModal/Feedback';

const socailmedia = [

  {
    link: "https://www.instagram.com/tedxvishnuinstitute?igsh=ZHN3NmU2YzV0OHdn",
    icon: <FaInstagram className='w-5 h-5' />
  },
  {
    link: "https://www.linkedin.com/company/tedxvishnuinstitute/",
    icon: <FaLinkedinIn className='w-5 h-5' />
  },
]

const contact = [
  {
    icon: <IoLocationOutline className='w-4 h-4' />,
    name: "Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh"
  },
  {
    icon: <LuPhoneCall className='w-4 h-4' />,
    name: "+91-8106505362"
  },
  {
    icon: <TfiEmail className='w-4 h-4' />,
    name: "tedxvishnu@vishnu.edu.in"
  },
]

const Footer = () => {
  return (
    <footer className="w-full py-4 text-white " id='footer'>
      <div className="flex flex-wrap justify-center gap-14 x-sm:pt-[12%] sm:pt-0">
        <div className='flex flex-col gap-16 x-sm:flex-col x-sm:gap-5 sm:flex-col'>
          <div className="flex flex-col gap-2 w-[20rem]">
            <h3 className="pb-1 font-bold text-red-600 border-b sm:text-xl x-sm:text-[18px]">Contact Info</h3>
            <h2 className='text-sm font-medium'>
              {
                contact.map((item, index) => (
                  <div key={index} className='flex items-center gap-2 mt-3'>
                    <p className='text-red-600'>{item.icon}</p>
                    {item.name === "tedxvishnu@vishnu.edu.in" ? (
                      <a href={`mailto:${item.name}`} className='text-sm'>{item.name}</a>
                    ) : (
                      <p className='text-sm'>{item.name}</p>
                    )}
                  </div>
                ))
              }
            </h2>
        
          </div>

        
          <div className="flex flex-col x-sm:mt-2">
            <h3 className="pb-1 mb-2 sm:text-xl font-bold text-red-600 border-b x-sm:text-[18px]">Follow Us</h3>
            <div className="flex mt-4 x-sm:items-center x-sm:justify-start sm:space-x-5 x-sm:flex-row sm:flex-row x-sm:gap-4 sm:justify-start">
              {
                socailmedia.map((item, index) => (
                  <div key={index}>
                    <a href={item.link} className='hover:text-red-600'>
                      <p>{item.icon}</p>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center -mt-2 x-sm:hidden sm:hidden md:flex'>
          <Feedback />
        </div>

        <div className="flex flex-col">
          <h3 className="pb-1 mb-2 text-xl font-bold text-red-600 border-b">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2093775535222!2d81.52251249999998!3d16.565965300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4e8d1d1d8d%3A0xab52da15615ac690!2sVishnu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1724255495953!5m2!1sen!2sin"
            width="500"
            height="280"
            allowFullScreen=""
            loading="lazy"
            className="border-0 rounded-lg x-sm:w-[20rem] sm:w-[20rem] md:w-[30rem] sm:h-[14rem] md:h-[16rem]"
            title="Vishnu Institute Of Technology"
          ></iframe>
        </div>
        
      </div>
      <div className='flex flex-col items-center justify-center x-sm:mt-4 md:hidden'>
          <Feedback />
        </div>

      {/* Copyright */}
      <div className="mt-6 text-sm text-center">
        <p>© Copyright 2023 - TEDx Vishnu Institute</p>
      </div>
    </footer>
  );
};

export default Footer;
