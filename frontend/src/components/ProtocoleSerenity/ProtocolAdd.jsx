import React from "react";

function ProtocolAdd({ task, selectedComponent, setSelectedComponent }) {
  const buttons = [1];

  const handleClick = (index) => {
    if (task && task.component && task.component[index]) {
      setSelectedComponent(index);
    } else {
      setSelectedComponent(null);
    }
  };

  return (
    <div>
      <div>
        <div className={`${task.className} mx-5`}>
          <p className="w-60 ml-5 ">{task.title}</p>
          <p className="mr-5">10</p>
        </div>
        {selectedComponent !== null && task.component[selectedComponent] ? (
          task.component[selectedComponent]
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default ProtocolAdd;
