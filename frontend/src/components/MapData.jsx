import React, { useState } from "react";
import ModalComprendreMonOPérationDetails from "./ProtocoleSerenity/FinirLesDémarches/ModalComprendreMonOPérationDetails";
import ShowDataCheckList from "./ProtocoleSerenity/CheckList/ShowDataCheckList";
import ShowDataSteps from "./ProtocoleSerenity/ComprendreMonOpération/ShowDataSteps";

const { VITE_BACKEND_URL } = import.meta.env;

function MapData({ data, deleteSteps, protocole }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" cursor-pointer">
      {protocole.id === 1 && (
        <ShowDataSteps
          data={data}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {protocole.id === 5 && <ShowDataCheckList data={data} />}
      {showModal ? (
        <ModalComprendreMonOPérationDetails
          props={data}
          setShowModal={setShowModal}
          deleteSteps={deleteSteps}
        />
      ) : null}
    </div>
  );
}

export default MapData;
