import React, { useState } from "react";
import moment from "moment";
import "moment/locale/fr";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";

export default function specialistAppointement({
  appointements,
  clinics,
  setAppointements,
}) {
  const [editMode, setEditMode] = useState(false);
  const [selectedappointement, setSelectedappointement] = useState(null);

  const handleEdit = (id) => {
    console.warn(id);
    const appoint = appointements.find((item) => item.id === id);
    setSelectedappointement(appoint);
    setEditMode(true);
  };

  const handleSaveEdit = async (id, updatedAppointment) => {
    try {
      const { clinic_id, speciality_id, intervention_id, date } =
        updatedAppointment;

      await Promise.all([
        axios.put(`http://localhost:5000/specialists/speciality/${id}`, {
          speciality_id,
        }),
        axios.put(`http://localhost:5000/interventions/${intervention_id}`, {
          date: moment(date).utc().format("YYYY-MM-DD HH:mm:ss"),
          clinic_id,
        }),
      ]);

      const updatedAppointements = await axios.get(
        "http://localhost:5000/appointments"
      );
      setAppointements(updatedAppointements.data);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col mt-8 max-w-full ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-5">
        <div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "ID",
                    "Patient",
                    "Date",
                    "Chirurgie",
                    "Cabinet",
                    "Actions",
                  ].map((header) => (
                    <th
                      scope="col"
                      className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      key={header}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointements?.map((appointement) => (
                  <tr key={appointement.id}>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {appointement.id}
                      </div>
                    </td>

                    <td className="px-2 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {`${appointement.firstname} ${appointement.lastname}`}
                      </div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap ">
                      {!editMode ? (
                        <div className="text-sm text-gray-900 w-full">
                          {moment(appointement.date).format("LLL")}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-900 w-full">
                          <DateTimePicker
                            disableClock
                            disableCalendar
                            value={moment
                              .utc(selectedappointement?.date)
                              .toDate()}
                            onChange={(value) =>
                              setSelectedappointement((prevState) => ({
                                ...prevState,
                                date: moment(value)
                                  .utc()
                                  .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
                              }))
                            }
                          />
                        </div>
                      )}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {!editMode ? (
                        <div className="text-sm text-gray-900">
                          {appointement.name}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={selectedappointement?.name || ""}
                          onChange={(e) =>
                            setSelectedappointement((prevState) => ({
                              ...prevState,
                              email: e.target.value,
                            }))
                          }
                        />
                      )}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {!editMode ? (
                        <div className="text-sm text-gray-900">
                          {appointement.clinic_name}
                        </div>
                      ) : (
                        <select
                          value={selectedappointement?.clinic_id || ""}
                          onChange={(e) =>
                            setSelectedappointement((prevState) => ({
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
                      )}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {!editMode ? (
                        <td className="px-2 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            type="button"
                            className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Delete
                          </button>

                          <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
                            onClick={() => handleEdit(appointement.id)}
                          >
                            Edit
                          </button>
                        </td>
                      ) : (
                        <td className="m-auto">
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded "
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
                            onClick={() =>
                              handleSaveEdit(
                                appointement.id,
                                selectedappointement
                              )
                            }
                          >
                            Save
                          </button>
                        </td>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
