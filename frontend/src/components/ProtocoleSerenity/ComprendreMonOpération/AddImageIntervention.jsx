import React, { useEffect, useRef, useState } from "react";

function AddImageIntervention() {
  const inputRef = useRef(null);
  const [surgery, setSurgery] = useState([]);
  const [dataForm, setDataForm] = useState({
    title: "",
    image: null,
    surgery_id: null,
    description: "",
  });

  const fetchSurgery = () => {
    fetch("http://localhost:5000/surgeries")
      .then((response) => response.json())
      .then((data) => setSurgery(data));
  };

  useEffect(() => {
    fetchSurgery();
  }, []);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setDataForm({ ...dataForm, image: e.target.files[0] });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (dataForm.image) {
      const myHeaders = new Headers();
      const pipin = JSON.stringify(dataForm);
      const formData = new FormData();
      formData.append("pipin", pipin);
      formData.append("picture", inputRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };

      fetch("http://localhost:5000/steps-infos", requestOptions)
        .then((response) => response.json())
        .then((result) => console.warn(result))
        .catch((error) => console.error("error", error));
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="ml-5">
          <p className="ml-2 mb-3">Titre</p>
          <input
            type="text"
            placeholder="Titre.."
            className="h-10 w-92 rounded-md px-2"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="ml-20">
          <input
            type="file"
            id="file-input"
            ref={inputRef}
            className="hidden"
            name="image"
            onChange={handleImageChange}
          />
          <label
            htmlFor="file-input"
            className="cursor-pointer border h-44 w-44 bg-[#f3d03d] hover:scale-110 rounded-2xl flex items-center justify-center"
          >
            <span>Attribuer une photo</span>
          </label>
        </div>
      </div>
      <select
        name="surgery_id"
        id="surgeries"
        value={dataForm.surgery_id}
        onChange={handleChange}
        className="h-10 w-80 rounded-md mt-5 ml-5 px-2 bg-[#f3d03d]"
      >
        <option value="">Sélectionner une opération</option>
        {surgery.map((surgeryItem) => (
          <option key={surgeryItem.id} value={surgeryItem.id}>
            {surgeryItem.name}
          </option>
        ))}
      </select>
      <div className="ml-5">
        <p className="mt-3">Résumé synthétique de l'opération</p>
        <textarea
          name="description"
          id="description"
          cols="40"
          rows="8"
          className="rounded-md mt-5"
          onChange={handleChange}
        />
      </div>
      <button
        onClick={handleUpload}
        type="button"
        className="h-12 w-28 px-5 bg-[#f3d03d] hover:bg-[#d7ba46] text-white rounded-md mt-5 ml-10"
      >
        Créer
      </button>
    </div>
  );
}

export default AddImageIntervention;
