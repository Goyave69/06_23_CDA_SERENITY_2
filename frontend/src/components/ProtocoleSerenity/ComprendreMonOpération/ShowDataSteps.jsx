import React from "react";

const { VITE_BACKEND_URL } = import.meta.env;

function ShowDataSteps({ data, setShowModal }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="hover:scale-[1.1]"
      >
        {data?.image && (
          <img
            className="h-40 w-40 rounded-lg"
            src={`${VITE_BACKEND_URL}/uploads/${data.image}`}
            alt=""
          />
        )}
      </button>
      {data?.title && <p className="text-center">{data.title}</p>}
    </div>
  );
}

export default ShowDataSteps;
