import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddImageIntervention from "./AddImageIntervention";

function AddComprendreMonOpération({ underProtocols }) {
  const [showImage, setShowImage] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setShowImage(true);
  };

  return (
    <div className="mt-20 h-[800px]">
      {showImage ? (
        <AddImageIntervention />
      ) : (
        <div className="flex justify-around">
          <button
            type="button"
            className="h-44 w-44 bg-gray-300 rounded-lg"
            onClick={handleImageClick}
          >
            Ajouter une image
          </button>
          <div className="flex items-center">
            <p className="">Ou</p>
          </div>
          <button type="button" className="h-44 w-44 bg-gray-300 rounded-lg">
            Ajouter une vidéo
          </button>
        </div>
      )}
    </div>
  );
}

export default AddComprendreMonOpération;
