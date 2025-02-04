import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "./logo.jpg";
import { IoClose, IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const SpeakersCard = ({
  name,
  image,
  MailLink,
  InstagramLink,
  LinkedInLink,
  role,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("touchmove", handleTouchMove);
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
    }

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        className="team-cards-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="border border-red-600 card">
          <div
            className="top-section"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="cardborder"></div>
            <div className="icons">
              <div className="logo">
                <img src={logo} alt="log" className="w-[6.8rem]" />
              </div>
              <div className="flex space-x-2 social-media">
                <a
                  href={`mailto:${MailLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600"
                >
                  <IoMailOutline size={20} />
                </a>
                <a
                  href={InstagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href={LinkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bottom-section">
            <div className="text-[2.5rem] font-bold text-red-600 title md:text-2xl">
              {name}
            </div>
            <div className="text-sm text-center text-white md:text-base">
              {role}
            </div>
            <div className="text-sm font-normal text-center text-white line-clamp-2 md:text-base">
              {description}
            </div>

            {description.length > 100 && (
              <button
                className="px-3 py-1 mt-2 text-sm text-red-600 rounded-md md:text-base hover:text-red-700"
                onClick={() => setIsModalOpen(true)}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center min-h-screen p-4 bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="flex flex-col w-[90vw] md:w-[60vw] p-6 bg-black rounded-lg gap-6 items-center justify-center relative border border-red-500 md:flex-row"
            onClick={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="w-full md:w-1/2">
              <img
                src={image}
                alt="Speaker"
                className="w-full h-[25vh] md:h-[32vh] object-cover rounded-lg"
              />
            </div>
            <div className="w-full text-center md:w-1/2 md:text-left">
              <h2 className="text-xl font-bold text-red-600 md:text-2xl">
                {name}
              </h2>
              <p className="mt-2 text-sm font-normal text-white md:text-base">
                {description}
              </p>
              <button
                className="absolute p-2 text-white rounded-md top-4 right-4"
                onClick={() => setIsModalOpen(false)}
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
