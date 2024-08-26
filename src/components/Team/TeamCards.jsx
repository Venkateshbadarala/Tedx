import React from 'react';
import {  FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import icons
import logo from './logo.jpg';
import { IoMailOutline } from "react-icons/io5";

export const TeamCards = ({ name, image,  MailLink, InstagramLink, LinkedInLink, role }) => {
  return (
    <div className="team-cards-container">
      <div className="border border-red-600 card">
        <div
          className="top-section"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            
          }}
        >
          <div className="cardborder"></div>
          <div className="icons">
            <div className="logo">
              <img src={logo} alt="log" className="w-[6.8rem] " />
            </div>
            <div className="flex space-x-2 social-media">
              
              <a href={`mailto:${MailLink}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
                <IoMailOutline  size={20} />
              </a>
              <a href={InstagramLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
                <FaInstagram size={20} />
              </a>
              <a href={LinkedInLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bottom-section">
          <div className="text-red-600 title">{name}</div>
          <div className="text-center text-white">{role}</div>
        </div>
      </div>
    </div>
  );
};
