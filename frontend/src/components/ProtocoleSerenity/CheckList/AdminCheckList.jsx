import React, { useState } from "react";
import axios from "axios";

function AdminCheckList() {
  const [name, setName] = useState("");
  const [subtext, setSubtext] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const checkList = { name, subtext };

    try {
      const response = await axios.post(
        "http://localhost:5000/check-list",
        checkList
      );

      if (response.status === 201) {
        setName("");
        setSubtext("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">Admin CheckList</h1>
      <form
        onSubmit={handleSubmit}
        className="w-4/5 md:w-1/2 flex flex-col space-y-4"
      >
        <label className="flex flex-col">
          Nom de la liste :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
        </label>
        <label className="flex flex-col">
          Sous-texte :
          <input
            type="text"
            value={subtext}
            onChange={(e) => setSubtext(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
        </label>
        <button
          type="submit"
          className="py-2 px-4 rounded-md bg-[#635eec] text-white hover:bg-[#534ec0]"
        >
          Créer la check list
        </button>
      </form>
    </div>
  );
}

export default AdminCheckList;
