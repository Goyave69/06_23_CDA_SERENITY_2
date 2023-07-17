import axios from "axios";
import React, { useState } from "react";

function ModalAddSurgery({ setModalSurgery }) {
  const [surgeryToAdd, setSurgeryToAdd] = useState();
  const handleSubmit = () => {
    const { name, location } = surgeryToAdd;
    axios
      .post("http://localhost:5000/surgeries", {
        name,
        location,
      })
      .then((res) => console.warn(res))
      .catch((err) => console.warn(err));
  };
  return (
    <div classNameName="absolute w-screen h-screen bg-black/25">
      <div className="absolute left-1/2 transform -translate-x-1/2 container mx-auto py-8">
        <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="flex justify-between">
            <h5 className="">Ajouter une chirurgie</h5>
            <button
              type="button"
              onClick={() => setModalSurgery(false)}
              className="text-xl align-center cursor-pointer alert-del"
            >
              &times;
            </button>
          </div>
          <label htmlFor="name">Nom de la chirurgie</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) =>
              setSurgeryToAdd((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
          <label htmlFor="location">Localisation de la chirurgie</label>
          <input
            type="text"
            name="location"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) =>
              setSurgeryToAdd((prevState) => ({
                ...prevState,
                location: e.target.value,
              }))
            }
          />
          <button
            className="mt-4 w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="button"
            onClick={handleSubmit}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddSurgery;
