import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Modal, Box } from "@mui/material";
import logo from "./logo.jpg";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

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
          <div className="flex flex-col items-center justify-center py-2">
            <div
              className="text-[2rem] font-bold text-red-600 tracking-wide md:text-base text-center"
              style={{
                fontSize: "17.5px",
              }}
            >
              {name}
            </div>
            <div className="text-sm text-center text-white md:text-base">
              {role}
            </div>

            <div className="text-[10px] font-thin text-white line-clamp-2 md:text-base inline-block relative">
              {description.length > 200 ? (
                <>
                  {description.slice(0, 100)}...
                  <button
                    className="text-[20px] text-red-600 font-semibold rounded-md md:text-base hover:text-red-700 inline"
                    onClick={handleModalOpen}
                    style={{ fontSize: "15px" }}
                  >
                    Show More
                  </button>
                </>
              ) : (
                description
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="speaker-modal-title"
        aria-describedby="speaker-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: "90%", // Small screens: 90% width
              sm: "80%", // Medium screens: 80% width
              md: "60%", // Large screens: 60% width
            },
            maxWidth: "900px",
            bgcolor: "black",
            color: "white",
            border: "2px solid #ff0000",
            boxShadow: 24,
            p: 2,
            borderRadius: "8px",
            outline: "none",
            maxHeight: {
              xs: "90vh", // Small screens: Allow more height
              md: "80vh", // Medium+ screens: Fixed height
            },
            overflow: "hidden", // Prevent modal overflow
          }}
        >
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row ">
            {/* Image Section */}
            <div className="w-full md:w-2/5">
              <img
                src={image}
                alt="Speaker"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col w-full gap-2 text-center md:text-left md:w-3/5">
              <h1
                id="speaker-modal-title"
                className="text-xl font-bold text-red-600"
              >
                {name}
              </h1>
              <div className="text-base md:text-lg">{role}</div>

              {/* Scrollable Description */}
              <Box
                id="speaker-modal-description"
                sx={{
                  maxHeight: {
                    xs: "30vh", // Small screens: More height for scrolling
                    md: "40vh", // Medium+ screens: Moderate height
                  },
                  overflowY: "auto",
                  paddingRight: "8px",
                }}
              >
                <p className="text-sm font-thin tracking-wide md:text-base">
                  {description}
                </p>
              </Box>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="absolute text-white top-4 right-4 hover:text-red-500"
            onClick={handleModalClose}
          >
            <IoClose size={24} />
          </button>
        </Box>
      </Modal>
    </>
  );
};
