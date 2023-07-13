import moment from "moment";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function ModalAppointment({ patient, clinics }) {
  const [selectedappointement, setSelectedappointement] = useState(null);

  return (
    <div classNameName="absolute w-screen h-screen bg-black/25">
      <div className="absolute left-1/2 transform -translate-x-1/2 container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Ajouter un rendez-vous
        </h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              value={`${patient.firstname} ${patient.lastname}`}
              readOnly
            />
          </div>

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>

          <DateTimePicker
            className="mb-4"
            disableClock
            disableCalendar
            value={moment.utc(selectedappointement?.date).toDate()}
            onChange={(value) =>
              setSelectedappointement((prevState) => ({
                ...prevState,
                date: moment(value).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
              }))
            }
          />
          <babel className="block text-gray-700 text-sm font-bold mb-2">
            Clinic
          </babel>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={selectedappointement?.clinic_id || ""}
            onChange={(e) =>
              setSelectedappointement((prevState) => ({
                ...prevState,
                clinic_id: e.target.value,
              }))
            }
          >
            {clinics?.map((clinic) => (
              <option key={clinic.id} value={clinic.id}>
                {clinic.name}
              </option>
            ))}
          </select>

          <button
            className="mt-4 w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalAppointment;
