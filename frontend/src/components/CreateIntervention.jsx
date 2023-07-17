import React, { useState } from "react";
import ModalAddSurgery from "./ModalAddSurgery";

function CreateIntervention({ interventions }) {
  const [modalSurgery, setModalSurgery] = useState(false);
  const handleModalSurgery = () => {
    setModalSurgery(true);
  };
  console.warn(interventions);
  return (
    <div>
      <h3>interventions</h3>
      <div className="flex justify-between w-full m-5">
        <button
          onClick={handleModalSurgery}
          type="button"
          className="mb-2 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ajouter une chirurgie
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
        <button
          type="button"
          className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ajouter une interventions
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      {modalSurgery ? (
        <ModalAddSurgery setModalSurgery={setModalSurgery} />
      ) : null}
    </div>
  );
}

export default CreateIntervention;
