import React, { useState, useEffect } from "react";
import axios from "axios";
import EditDisasterModal from "./EditDisasterModal";

function Manage() {
  const [disasters, setDisasters] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDisaster, setSelectedDisaster] = useState({});
  const url = "http://localhost:8080/disaster/getAll";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setDisasters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/disaster/deleteDisaster/${id}`);
      setDisasters((prevDisasters) =>
        prevDisasters.filter((disaster) => disaster.id !== id)
      );
    } catch (error) {
      console.error("Error deleting Disaster:", error);
    }
  };

  const handleEdit = (disaster) => {
    setSelectedDisaster(disaster);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setSelectedDisaster({});
  };

  const handleUpdateDisaster = (updatedDisaster) => {
    setDisasters((prevDisasters) =>
      prevDisasters.map((disaster) =>
        disaster.id === updatedDisaster.id ? updatedDisaster : disaster
      )
    );
  };

  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-4">Manage Disasters</h2>

      <table className="min-w-full bg-blue-100 shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="border-b-2 px-4 py-2">Id</th>
            <th className="border-b-2 px-4 py-2">Disaster Type</th>
            <th className="border-b-2 px-4 py-2">Address</th>
            <th className="border-b-2 px-4 py-2">Date</th>
            <th className="border-b-2 px-4 py-2">People Count</th>
            <th className="border-b-2 px-4 py-2">First Name</th>
            <th className="border-b-2 px-4 py-2">Last Name</th>
            <th className="border-b-2 px-4 py-2">Phone Number</th>
            <th className="border-b-2 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {disasters.map((disaster) => (
            <tr key={disaster.id}>
              <td className="border px-4 py-2">{disaster.id}</td>
              <td className="border px-4 py-2">{disaster.disasterType}</td>
              <td className="border px-4 py-2">{disaster.address}</td>
              <td className="border px-4 py-2">{disaster.date}</td>
              <td className="border px-4 py-2">{disaster.people_count}</td>
              <td className="border px-4 py-2">{disaster.first_name}</td>
              <td className="border px-4 py-2">{disaster.last_name}</td>
              <td className="border px-4 py-2">{disaster.phone_number}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(disaster)}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(disaster.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <EditDisasterModal
          isOpen={showEditModal}
          onClose={handleEditModalClose}
          selectedDisaster={selectedDisaster}
          onUpdate={handleUpdateDisaster}
        />
      )}
    </div>
  );
}

export default Manage;
