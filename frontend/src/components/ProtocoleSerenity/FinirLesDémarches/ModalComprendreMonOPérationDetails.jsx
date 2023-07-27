import React from "react";

const { VITE_BACKEND_URL } = import.meta.env;

function ModalComprendreMonOPérationDetails({
  props,
  setShowModal,
  deleteSteps,
}) {
  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center ">
      <div className="w-[60rem] h-[45rem] bg-white rounded-lg">
        <div className="flex flex-row-reverse  ">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className=" text-4xl text-red-600 mr-5 mt-5"
          >
            X
          </button>
        </div>
        <p className="font-semibold text-4xl text-center mb-10 mt-5">
          {props?.title ? props.title : ""}
        </p>

        {props?.image && (
          <div className=" w-full ml-3 flex">
            <img
              className="h-[400px] w-[400px] rounded-lg mt-16"
              src={`${VITE_BACKEND_URL}/uploads/${props.image}`}
              alt=""
            />
            <div className="flex flex-col w-auto">
              <p className="mt-3 ml-12 underline text-2xl">
                Description de l'opération :
              </p>
              <div className="border-2 w-[500px] h-[400px] mx-auto rounded-lg border-gray-300 ml-5 mt-6">
                <p className="ml-5 mt-2">{props.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-5 gap-5">
          <button
            type="button"
            onClick={() => deleteSteps(props.id)}
            className="bg-red-500 text-white rounded-md px-3"
          >
            SUPPRIMER
          </button>
          <button
            type="button"
            className="bg-green-500 text-white rounded-md px-3"
          >
            MODIFIER
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalComprendreMonOPérationDetails;
