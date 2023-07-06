import React, { useState } from "react";

function ProtocolAdd({ task }) {
  // on définit l'état pour le composant sélectionné
  const [selectedComponent, setSelectedComponent] = useState(null);

  // le tableau de boutons
  const buttons = [1, 2, 3];

  const handleClick = (index) => {
    // ici, on vérifie d'abord que l'objet "task" a bien un composant à l'index spécifié
    if (task.components && task.components[index]) {
      setSelectedComponent(task.components[index]);
    }
  };

  const ComponentToRender = selectedComponent
    ? task.components[selectedComponent]
    : null;

  return (
    <div>
      <div>
        <div className={`${task.className}`}>
          <p className="w-60 ">{task.title}</p>
          <p>10</p>
        </div>
        <div className="flex justify-between gap-5 mt-5 px-5 rounded-lg">
          {buttons.map((_, index) => (
            <button
              key={_}
              type="button"
              className={`${task.className} px-5 h-20 rounded-lg`}
              onClick={() => handleClick(index)}
            >
              Ajouter
            </button>
          ))}
        </div>
      </div>
      {ComponentToRender && <ComponentToRender />}
    </div>
  );
}

export default ProtocolAdd;
