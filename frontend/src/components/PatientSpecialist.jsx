import moment from "moment";
import React, { useState } from "react";
import ModalAppointment from "./ModalAppointment";

function PatientSpecialist({
  patients,
  clinics,
  specialistId,
  interventions,
  setAppointement,
  setInterventions,
}) {
  const [modal, setModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState([]);

  const handleClick = (patient) => {
    setSelectedPatient(patient);
    setModal(true);
  };
  return (
    <div>
      {modal ? (
        <ModalAppointment
          patient={selectedPatient}
          clinics={clinics}
          specialistId={specialistId}
          interventions={interventions}
          setModal={setModal}
          setAppointement={setAppointement}
        />
      ) : null}
      <h2 className="text-3xl m-5">Liste des patients</h2>
      <div className="flex ">
        {patients?.map((patient) => (
          <div className="bg-white rounded overflow-hidden shadow-lg m-5">
            <div className="text-center p-6  border-b">
              <img
                className="h-24 w-24 rounded-full mx-auto"
                src={
                  patient.gender === "Male"
                    ? "src/assets/img/homme.png"
                    : "src/assets/img/femme.png"
                }
                alt={patient.firstname}
              />
              <p className="pt-2 text-lg font-semibold">
                {`${patient.firstname} ${patient.lastname}`}
              </p>
              <p className="text-sm text-gray-600">{patient.email}</p>
              <div className="mt-5">
                {patient.intervention_date ? (
                  <button
                    type="button"
                    className="border rounded-full py-2 px-4 text-xs font-semibold text-green-500"
                  >
                    Rendez-vous
                    {patient.intervention_date` ${moment(
                      patient.intervention_date
                    )
                      .endOf("day")
                      .fromNow()}`}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleClick(patient)}
                    className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
                  >
                    Ajouter rendez-vous
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientSpecialist;
