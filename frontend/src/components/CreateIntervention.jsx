import React, { useState } from "react";
import ModalAddSurgery from "./ModalAddSurgery";
import ModalAddInterventions from "./ModalAddInterventions";

function CreateIntervention({
  interventions,
  patients,
  clinics,
  surgerys,
  setInterventions,
}) {
  const [modalSurgery, setModalSurgery] = useState(false);
  const [modalInterventions, setModalInterventions] = useState(false);
  const handleModalSurgery = () => {
    setModalInterventions(false);
    setModalSurgery(true);
  };
  const handleModalInterventions = () => {
    setModalSurgery(false);
    setModalInterventions(true);
  };

  return (
    <div>
      <div className="flex w-full p-5">
        <button
          onClick={handleModalSurgery}
          type="button"
          className="ml-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          onClick={handleModalInterventions}
          type="button"
          className="ml-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ajouter une intervention
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
      {modalInterventions ? (
        <ModalAddInterventions
          interventions={interventions}
          patients={patients}
          clinics={clinics}
          surgerys={surgerys}
          setModalIntervention={setModalInterventions}
          setInterventions={setInterventions}
        />
      ) : null}
    </div>
  );
}

export default CreateIntervention;
