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
    <>
      <h1>Admin CheckList</h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="flex flex-col">
          Nom de la liste :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-80 mx-auto"
          />
        </label>
        <label className="flex flex-col">
          Sous-texte :
          <input
            type="text"
            value={subtext}
            onChange={(e) => setSubtext(e.target.value)}
            required
            className="w-80 mx-auto"
          />
        </label>
        <button type="submit" className="bg-blue-600 w-44 px-3">
          Créer la check list
        </button>
      </form>
    </>
  );
}

export default AdminCheckList;
