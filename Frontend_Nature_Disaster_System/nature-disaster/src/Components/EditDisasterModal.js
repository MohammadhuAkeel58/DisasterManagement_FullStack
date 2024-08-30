import React, { useState } from 'react';
import axios from 'axios';

function EditDisasterModal({ isOpen, onClose, selectedDisaster, onUpdate }) {
  const [editedDisaster, setEditedDisaster] = useState(selectedDisaster);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDisaster((prevDisaster) => ({
      ...prevDisaster,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/disaster/updateDisaster/${selectedDisaster.id}`, editedDisaster);
      onUpdate(editedDisaster);
      onClose();
    } catch (error) {
      console.error('Error updating disaster:', error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mt-20">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Edit Disaster</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="disasterType">
                  Disaster Type
                </label>
                <input
                  type="text"
                  id="disasterType"
                  name="disasterType"
                  value={editedDisaster.disasterType}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={editedDisaster.date}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={editedDisaster.address}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={editedDisaster.phoneNumber}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={editedDisaster.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={editedDisaster.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 mr-2"
                >
                  Close
                </button>
                <button type="submit"   onClick={onClose} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditDisasterModal;
