import { TimePicker } from "@mui/x-date-pickers";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function ModalAddInterventions({
  setModalIntervention,
  patients,
  clinics,
  surgerys,
}) {
  const [interventionToAdd, setInterventionToAdd] = useState([]);

  const handleSubmit = () => {
    const { anaesthesia, clinic_id, date, user_id, surgery_id, duration } =
      interventionToAdd;
    axios
      .post("http://localhost:5000/interventions", {
        anaesthesia,
        clinic_id,
        date: moment(date).utc().format("YYYY-MM-DD HH:mm:ss"),
        user_id,
        surgery_id,
        duration,
      })
      .then((res) => console.warn(res))
      .catch((err) => console.warn(err));
  };
  return (
    <div>
      <div classNameName="absolute w-screen h-screen bg-black/25">
        <div className="absolute left-1/2 transform -translate-x-1/2 container mx-auto py-8">
          <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="flex justify-between">
              <h5 className="">Ajouter une Intervention</h5>
              <button
                type="button"
                onClick={() => setModalIntervention(false)}
                className="text-xl align-center cursor-pointer alert-del"
              >
                &times;
              </button>
            </div>

            <select
              className="px-2 py-1 w-full mt-2 border-2 whitespace-nowrap"
              onChange={(e) =>
                setInterventionToAdd((prevState) => ({
                  ...prevState,
                  user_id: e.target.value,
                }))
              }
            >
              <option value="">Patients</option>
              {patients?.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {`${patient.firstname} ${patient.lastname}`}
                </option>
              ))}
            </select>
            <select
              className="px-2 py-1 w-full mt-2 border-2 whitespace-nowrap"
              onChange={(e) =>
                setInterventionToAdd((prevState) => ({
                  ...prevState,
                  surgery_id: e.target.value,
                }))
              }
            >
              <option value="">Chirurgie</option>
              {surgerys?.map((surgery) => (
                <option key={surgery.id} value={surgery.id}>
                  {surgery.name}
                </option>
              ))}
            </select>
            <select
              className="px-2 py-1 w-full mt-2 border-2 whitespace-nowrap"
              onChange={(e) =>
                setInterventionToAdd((prevState) => ({
                  ...prevState,
                  clinic_id: e.target.value,
                }))
              }
            >
              <option value="">Cabinet</option>
              {clinics?.map((clinic) => (
                <option key={clinic.id} value={clinic.id}>
                  {clinic.name}
                </option>
              ))}
            </select>
            <select
              className="px-2 py-1 w-full mt-2 border-2 whitespace-nowrap"
              onChange={(e) =>
                setInterventionToAdd((prevState) => ({
                  ...prevState,
                  anaesthesia: e.target.value,
                }))
              }
            >
              <option value="1">Anesthésie locale</option>
              <option value="2">Anesthésie Genérale</option>
            </select>
            <p>Date</p>
            <div className="mt-2 text-sm text-gray-900 w-full">
              <DateTimePicker
                disableClock
                disableCalendar
                value={moment.utc().toDate()}
                onChange={(value) =>
                  setInterventionToAdd((prevState) => ({
                    ...prevState,
                    date: moment(value)
                      .utc()
                      .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
                  }))
                }
              />
            </div>
            <p>Durée</p>
            <div className="mt-2">
              <TimePicker
                disableClock
                disableCalendar
                onChange={(value) =>
                  setInterventionToAdd((prevState) => ({
                    ...prevState,
                    duration: moment(value).utc().format("HH:mm:ss.SSS"),
                  }))
                }
              />
            </div>
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
    </div>
  );
}

export default ModalAddInterventions;
