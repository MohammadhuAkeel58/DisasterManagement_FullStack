import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import img from '../IMG/1326355.jpeg';

function Home() {
  return (
    <div className='Home relative h-screen text-white'>
      <div className="overlay absolute w-full h-full bg-black opacity-10"></div>
      <img src={img} alt="img" className=' w-full h-full object-cover  ' />
      <div className="content absolute top-0 left-0 h-full flex flex-col justify-center items-center w-full mx-auto p-4">
        <h1 className="text-6xl font-extrabold mb-4 font-serif"> Natural Disaster Managment</h1>
        <h2 className="text-3xl mb-8 font-semibold">Save Your Self</h2>
        <form className="form flex justify-between items-center border border-gray-300 p-4 rounded-md max-w-screen-md w-full mx-auto bg-opacity-75">
          <div className="search-input mr-2 flex-grow">
            <input type="text" placeholder='Search Natural Disasters' className="w-full p-4 bg-gray-800 border-none text-white" />
          </div>
          <div className="search-button">
            <button type="submit" className="search-btn p-4 rounded-md bg-blue-500 hover:bg-blue-800">
              <AiOutlineSearch className='icon text-white'/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
