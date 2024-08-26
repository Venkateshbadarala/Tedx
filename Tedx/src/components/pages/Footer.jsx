import React from 'react';
import {  FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import {Link} from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
const socailmedia=[
 
  {
    link:"",
    icon:<FaTwitter className='w-6 h-6'/>
 },
 {
  link:"",
  icon:<FaInstagram className='w-6 h-6'/>
},
{
  link:"",
  icon:<FaLinkedinIn className='w-6 h-6'/>
},
]

const contact = [
  {
    icon:<IoLocationOutline className='w-5 h-5'/>,
    name:"Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh"
  },
 
  {
    icon:<LuPhoneCall className='w-5 h-5'/>,
    name:"+91-8106505362"
},
{
  icon:<TfiEmail className='w-5 h-5'/>,
  name:"tedxvishnu@vishnu.edu.in"
},

]

const Footer = () => {
  return (
    <footer className="py-10 text-white " id='footer'>
      <div className="flex flex-row gap-4 justify-evenly ">
        
        <div className='flex flex-col gap-10'>
        <div className="flex flex-col gap-3">
          <h3 className="text-[2rem] font-bold  text-red-600 border-b">Contact Info</h3>
          <h2 className='font-medium'>
            {
              contact.map((item,index)=>(
                <div key={index} className='flex flex-col m-2'>
                  <div className='flex gap-2'>
                  <p className='text-red-600'>{item.icon}</p> 
                 { item.name === "tedxvishnu@vishnu.edu.in" ? (
                  <a href={`mailto:${item.name}`}>{item.name}</a>
                 ):(
                  <p>{item.name}</p>
                 )
                    
                  
                    
                  }
                  </div>
                     
                </div>
              ))
            }
            
          </h2>
          
        </div>

         {/* Social Media */}
         <div className="flex flex-col">
          <h3 className="text-[2rem] font-bold text-red-600 mb-4 border-b">Follow Us</h3>
          <div className="flex space-x-4">
           
           {
            socailmedia.map((item, index) => (
              <div key={index} className=''>
                <Link href={item.link} className='hover:text-red-600'>
                <p className=''>{item.icon}</p>
                </Link>
              </div>
            ))
           }
           
          </div>
        </div>
        </div>
      
        {/* <div className="flex flex-col">
          <h3 className="mb-4 text-2xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Ticket</a></li>
          </ul>
        </div> */}

      
        <div className="flex flex-col ">
          <h3 className="text-[2rem] font-bold text-red-600 mb-4 border-b">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2093775535222!2d81.52251249999998!3d16.565965300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4e8d1d1d8d%3A0xab52da15615ac690!2sVishnu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1724255495953!5m2!1sen!2sin"
            width="600"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="border-0 rounded-lg"
            title="Vishnu Institute Of Technology"
          ></iframe>
        </div>

       
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center">
        <p>© Copyright 2023 - TEDx Vishnu Institute</p>
      </div>
    </footer>
  );
};

export default Footer;
