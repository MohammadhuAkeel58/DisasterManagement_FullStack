import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alert() {
  const [disasterType, setDisasterType] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/disaster/add", {
        disasterType: disasterType,
        address: address,
        date: date,
        people_count: peopleCount,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber
      });
      navigate("/manage");
    } catch (error) {
      console.error("Error adding Disaster:", error);
    }
  };

  const handleCancel = () => {
    setDisasterType('');
    setAddress('');
    setDate('');
    setPeopleCount('');
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  };

  return (
    <div className="container mx-auto mt-24">
      <form onSubmit={handleSubmit} className="bg-blue-200 p-6 rounded shadow-lg max-w-md mx-auto landscape-form">
        <h2 className="text-3xl font-bold mb-6 text-center">Enter the Disaster details</h2>

        <div className="mb-4">
          <label htmlFor="disaster" className="block text-gray-700 text-sm font-bold mb-2">Disaster</label>
          <select
            id="disaster"
            className="block w-full p-2 border rounded"
            value={disasterType}
            onChange={(e) => setDisasterType(e.target.value)}
          >
            <option value="Fire">Fire</option>
            <option value="Tornado">Tornado</option>
            <option value="Flood">Flood</option>
            <option value="Land Slide">Land Slide</option>
            <option value="Tsunami">Tsunami</option>
            <option value="Earthquake">Earthquake</option>
            <option value="Cyclone">Cyclone</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            id="address"
            className="block w-full p-2 border rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input
            type="date"
            id="date"
            className="block w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="peopleCount" className="block text-gray-700 text-sm font-bold mb-2">Number Of People</label>
          <input
            type="text"
            id="peopleCount"
            className="block w-full p-2 border rounded"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            className="block w-full p-2 border rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="block w-full p-2 border rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            className="block w-full p-2 border rounded"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 mr-2">Submit</button>
          <button type="button" onClick={handleCancel} className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-700 ml-2">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Alert;
