import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoClose } from 'react-icons/io5'; 

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      console.log(response.data);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setStatus('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 text-white transition duration-150 bg-red-500 rounded hover:text-black btn hover:bg-white"
          >
            Feedback
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="relative flex flex-col justify-center p-6 bg-black rounded shadow-lg w-80">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
                >
                  <IoClose className="w-6 h-6" />
                </button>
                <h3 className="text-[1rem] font-bold text-red-600 mb-4 border-b text-center ">Queries</h3>
                <form onSubmit={handleSubmit} className="flex flex-col ">
                  <div className="mt-2 wave-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder=" "
                      className="w-full editinput"
                      onChange={handleChange}
                    />
                    <span className="editbar"></span>
                    <label className="editlabel">
                      <span className="label-char" style={{ "--index": 0 }}>N</span>
                      <span className="label-char" style={{ "--index": 1 }}>a</span>
                      <span className="label-char" style={{ "--index": 2 }}>m</span>
                      <span className="label-char" style={{ "--index": 3 }}>e</span>
                    </label>
                  </div>
                  <div className="mt-4 wave-group">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      placeholder=" "
                      className="w-full bg-black editinput"
                      onChange={handleChange}
                    />
                    <span className="editbar"></span>
                    <label className="editlabel">
                      <span className="label-char" style={{ "--index": 0 }}>E</span>
                      <span className="label-char" style={{ "--index": 1 }}>m</span>
                      <span className="label-char" style={{ "--index": 2 }}>a</span>
                      <span className="label-char" style={{ "--index": 3 }}>i</span>
                      <span className="label-char" style={{ "--index": 4 }}>l</span>
                    </label>
                  </div>
                  <div className="mt-5 wave-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      placeholder=" "
                      className="w-full h-[100px] editinput"
                      onChange={handleChange}
                    />
                    <span className="editbar"></span>
                    <label className="editlabel">
                      <span className="label-char" style={{ "--index": 0 }}>F</span>
                      <span className="label-char" style={{ "--index": 1 }}>e</span>
                      <span className="label-char" style={{ "--index": 2 }}>e</span>
                      <span className="label-char" style={{ "--index": 3 }}>d</span>
                      <span className="label-char" style={{ "--index": 4 }}>b</span>
                      <span className="label-char" style={{ "--index": 5 }}>a</span>
                      <span className="label-char" style={{ "--index": 6 }}>c</span>
                      <span className="label-char" style={{ "--index": 7 }}>k</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="p-2 text-white transition duration-150 bg-red-500 rounded mt-7 hover:text-black btn hover:bg-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                  {status && <p className="mt-4 text-center text-red-500">{status}</p>}
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col justify-around w-[18rem] h-full">
          <div>
            <h3 className="text-[1.5rem] font-bold text-red-600 mb-4 border-b">Queries</h3>
          </div>
          <div className="mt-2 wave-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder=" "
              className="w-full editinput"
              onChange={handleChange}
            />
            <span className="editbar"></span>
            <label className="editlabel">
              <span className="label-char" style={{ "--index": 0 }}>N</span>
              <span className="label-char" style={{ "--index": 1 }}>a</span>
              <span className="label-char" style={{ "--index": 2 }}>m</span>
              <span className="label-char" style={{ "--index": 3 }}>e</span>
            </label>
          </div>
          <div className="mt-4 wave-group">
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder=" "
              className="w-full editinput"
              onChange={handleChange}
            />
            <span className="editbar"></span>
            <label className="editlabel">
              <span className="label-char" style={{ "--index": 0 }}>E</span>
              <span className="label-char" style={{ "--index": 1 }}>m</span>
              <span className="label-char" style={{ "--index": 2 }}>a</span>
              <span className="label-char" style={{ "--index": 3 }}>i</span>
              <span className="label-char" style={{ "--index": 4 }}>l</span>
            </label>
          </div>
          <div className="mt-5 wave-group">
            <textarea
              name="message"
              value={formData.message}
              placeholder=" "
              className="w-full h-[100px] editinput"
              onChange={handleChange}
            />
            <span className="editbar"></span>
            <label className="editlabel">
              <span className="label-char" style={{ "--index": 0 }}>F</span>
              <span className="label-char" style={{ "--index": 1 }}>e</span>
              <span className="label-char" style={{ "--index": 2 }}>e</span>
              <span className="label-char" style={{ "--index": 3 }}>d</span>
              <span className="label-char" style={{ "--index": 4 }}>b</span>
              <span className="label-char" style={{ "--index": 5 }}>a</span>
              <span className="label-char" style={{ "--index": 6 }}>c</span>
              <span className="label-char" style={{ "--index": 7 }}>k</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="p-2 text-white transition duration-150 bg-red-500 rounded hover:text-black btn hover:bg-white"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          {status && <p className="mt-4 text-center text-red-500">{status}</p>}
        </form>
      )}
    </>
  );
};

export default Feedback;
