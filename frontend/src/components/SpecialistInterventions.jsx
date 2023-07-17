import React from "react";
import moment from "moment";
import CreateIntervention from "./CreateIntervention";

function SpecialistInterventions({
  interventions,
  patients,
  clinics,
  surgerys,
}) {
  return (
    <div>
      <CreateIntervention
        interventions={interventions}
        patients={patients}
        clinics={clinics}
        surgerys={surgerys}
      />
      <div className="flex ">
        {interventions.map((element) => (
          <div className="bg-white rounded overflow-hidden shadow-lg m-5 p-5">
            <h5> {`${element.firstname} ${element.lastname}`}</h5>
            <strong>{moment(element.date).format("LLL")}</strong>
            <p>{element.surgery_name}</p>
            <p>{element.clinic_name}</p>
            <p>
              {element.anaesthesia === 1
                ? "Anesthésie locale"
                : "Anesthésie générale"}
            </p>
            <p>{element.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialistInterventions;
