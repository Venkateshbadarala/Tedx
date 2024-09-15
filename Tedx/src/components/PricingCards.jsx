import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pricing = [
  {
    name: "Early Bird",
    price: "150",
    plan: "1 per head",
  },
  {
    name: "Regular",
    price: "200",
    plan: "1 per head",
  },
  {
    name: "Group",
    price: "600",
    plan: "3+1",
  },
];

const PricingCards = () => {
  const [isOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className="flex flex-wrap items-center justify-center gap-6 p-6 text-white">
          {pricing.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
              className="rounded-lg shadow-lg overflow-hidden w-80 h-[20rem] p-6 border border-red-600"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4 mt-4 text-2xl font-bold text-center">
                  <p className='border-b'>Plan</p>
                  <p className='text-red-500'>{item.name}</p>
                </div>
                <h2 className="flex flex-row gap-2 mt-2">
                  <p>Persons:</p>
                  <p>{item.plan}</p>
                </h2>
                <div className="mt-4">
                  <span className="flex gap-2 text-3xl font-bold">
                    <p>Price:</p>
                    <p>{item.price}/-</p>
                  </span>
                </div>
                <button className="px-4 py-2 mt-6 text-white transition duration-300 bg-red-500 rounded hover:bg-red-600">
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className='text-[3.5rem] text-red-600 flex flex-col justify-center items-center font-bold p-4'>
          {/* <h1 className='uppercase'>#season 02</h1> */}
          <h1 className='sm:text-[20px] montserrat tracking-widest uppercase x-sm:text-[13px]'>Stay tuned for more updates...</h1>
        </div>
      )}
    </>
  );
};

export default PricingCards;
