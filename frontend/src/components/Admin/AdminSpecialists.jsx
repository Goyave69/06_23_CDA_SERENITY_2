import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiHelper from "../../services/ApiHelper";
import ConfirmModal from "../ConfirmModal";

function AdminSpecialists({
  specialists,
  setSpecialists,
  clinics,
  speciality,
}) {
  const [editMode, setEditMode] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setConfirm(true);
    setDeleteId(id);
  };
  const deleteSpecialist = (id, confirmer) => {
    if (confirmer) {
      ApiHelper(`specialists/${id}`, "DELETE")
        .then(() => {
          axios
            .get("http://localhost:5000/specialists")
            .then((res) => setSpecialists(res.data));
        })
        .catch((error) => console.error(error));
    }
  };

  const handleEdit = (id) => {
    const specialist = specialists.find((item) => item.id === id);
    setSelectedSpecialist(specialist);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setSelectedSpecialist(null);
    setEditMode(false);
  };

  const handleSaveEdit = async (id, updatedSpecialist) => {
    try {
      const { firstname, lastname, email, clinic_id, speciality_id } =
        updatedSpecialist;

      await Promise.all([
        axios.put(`http://localhost:5000/users/${id}`, {
          firstname,
          lastname,
          email,
        }),
        axios.put(`http://localhost:5000/specialists/speciality/${id}`, {
          speciality_id,
        }),
        axios.put(`http://localhost:5000/specialists/clinic/${id}`, {
          clinic_id,
        }),
      ]);

      const updatedSpecialists = await axios.get(
        "http://localhost:5000/specialists"
      );
      setSpecialists(updatedSpecialists.data);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {confirm && (
        <ConfirmModal
          setConfirm={setConfirm}
          deleteId={deleteId}
          handleDelete={deleteSpecialist}
        />
      )}
      <div className="flex flex-col mt-8 max-w-full ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-5">
          <div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "ID",
                      "First name",
                      "Last name",
                      "Email",
                      "Specialité",
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
                  {specialists &&
                    specialists.map((specialist) => (
                      <tr key={specialist.id}>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {specialist.id}
                          </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                          {!editMode ? (
                            <div className="text-sm text-gray-900">
                              {specialist.firstname}
                            </div>
                          ) : (
                            <input
                              type="text"
                              value={selectedSpecialist?.firstname || ""}
                              onChange={(e) =>
                                setSelectedSpecialist((prevState) => ({
                                  ...prevState,
                                  firstname: e.target.value,
                                }))
                              }
                            />
                          )}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                          {!editMode ? (
                            <div className="text-sm text-gray-900">
                              {specialist.lastname}
                            </div>
                          ) : (
                            <input
                              type="text"
                              value={selectedSpecialist?.lastname || ""}
                              onChange={(e) =>
                                setSelectedSpecialist((prevState) => ({
                                  ...prevState,
                                  lastname: e.target.value,
                                }))
                              }
                            />
                          )}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                          {!editMode ? (
                            <div className="text-sm text-gray-900">
                              {specialist.email}
                            </div>
                          ) : (
                            <input
                              type="text"
                              value={selectedSpecialist?.email || ""}
                              onChange={(e) =>
                                setSelectedSpecialist((prevState) => ({
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
                              {specialist.name}
                            </div>
                          ) : (
                            <select
                              value={selectedSpecialist?.name || ""}
                              onChange={(e) =>
                                setSelectedSpecialist((prevState) => ({
                                  ...prevState,
                                  speciality_id: e.target.value,
                                }))
                              }
                            >
                              <option value="">Select speciality</option>
                              {speciality &&
                                speciality.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                            </select>
                          )}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                          {!editMode ? (
                            <div className="text-sm text-gray-900">
                              {specialist.clinic_name}
                            </div>
                          ) : (
                            <select
                              value={selectedSpecialist?.clinic_id || ""}
                              onChange={(e) =>
                                setSelectedSpecialist((prevState) => ({
                                  ...prevState,
                                  clinic_id: e.target.value,
                                }))
                              }
                            >
                              <option value="">Select clinic</option>
                              {clinics &&
                                clinics.map((clinic) => (
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
                                onClick={() => handleDelete(specialist.id)}
                                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                              >
                                Supprimer
                              </button>

                              <button
                                type="button"
                                onClick={() => handleEdit(specialist.id)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
                              >
                                Modifier
                              </button>
                            </td>
                          ) : (
                            <td className="m-auto">
                              <button
                                type="button"
                                onClick={() => handleCancelEdit()}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded "
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  handleSaveEdit(
                                    specialist.id,
                                    selectedSpecialist
                                  )
                                }
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
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
    </>
  );
}

export default AdminSpecialists;
