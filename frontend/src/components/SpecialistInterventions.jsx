import moment from "moment";
import axios from "axios";
import CreateIntervention from "./CreateIntervention";

function SpecialistInterventions({
  interventions,
  patients,
  clinics,
  surgerys,
  setInterventions,
}) {
  const sortedInterventions = interventions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/interventions/${id}`)
      .then(() => axios.get("http://localhost:5000/interventions"))
      .then((res) => setInterventions(res.data));
  };
  return (
    <div>
      <CreateIntervention
        interventions={interventions}
        patients={patients}
        clinics={clinics}
        surgerys={surgerys}
      />
      <div className="flex">
        {sortedInterventions.map((element) => (
          <div
            className="bg-white rounded overflow-hidden shadow-lg m-5 p-5"
            key={element.id}
          >
            <h5>{`${element.firstname} ${element.lastname}`}</h5>
            <strong>{moment(element.date).format("LLL")}</strong>
            <p>{element.surgery_name}</p>
            <p>{element.clinic_name}</p>
            <p>
              {element.anaesthesia === 1
                ? "Anesthésie locale"
                : "Anesthésie générale"}
            </p>
            <p>{element.duration}</p>
            <div>
              <button
                type="button"
                onClick={() => handleDelete(element.id)}
                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Supprimer
              </button>

              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
              >
                Modifier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialistInterventions;
