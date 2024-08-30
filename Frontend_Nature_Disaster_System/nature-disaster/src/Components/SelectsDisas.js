import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectsDisas({ bgImg, text }) {
  const navigate=useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/alert")}
  return (
    <div className='selects-location relative justify-items-center'>
      <img src={bgImg} alt='Location' className='w-full h-full object-cover' />
      <div className="overlay absolute inset-0 flex items-end p-4 bg-black bg-opacity-30">
        <p className="text-white text-2xl font-semibold">{text}</p>
        <button onClick={handleClick} className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Alert
        </button>
      </div>
    </div>
  );
}

export default SelectsDisas;
