import React, { useState, useEffect } from "react";

const { VITE_BACKEND_URL } = import.meta.env;

function ProtocolAdd({ task, selectedComponent, setSelectedComponent }) {
  const [stepsSurgeries, setStepsSurgeries] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const fetchData = () => {
    switch (task.id) {
      case 1:
        fetch("http://localhost:5000/steps-infos")
          .then((res) => res.json())
          .then((response) => setCurrentData(response))
          .catch((err) => console.error(err));
        break;
      case 2:
        fetch("http://localhost:5000/users")
          .then((res) => res.json())
          .then((response) => setCurrentData(response))
          .catch((err) => console.error(err));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    fetchData();
  }, [task]);

  const buttons = [1];

  const handleClick = (index) => {
    if (task && task.component && task.component[index]) {
      setSelectedComponent(index);
    } else {
      setSelectedComponent(null);
    }
  };

  return (
    <div className=" bg-gray-100 rounded-md shadow-lg shadow-gray-500/100 h-[43rem]">
      <div>
        <div className={`${task.className} mx-5 mt-3 `}>
          <p className="w-[30rem] ml-5 text-white text-2xl">{task.title}</p>
          <p className="mr-5 text-white">{currentData.length}</p>
        </div>
        {selectedComponent !== null && task.component[selectedComponent] ? (
          task.component[selectedComponent]
        ) : (
          <div className="flex gap-5 mt-5 px-5 rounded-lg">
            {buttons.map((_, index) => (
              <button
                key={_}
                type="button"
                className={`${task.className} px-5  h-40 w-40  rounded-lg`}
                onClick={() => handleClick(index)}
              >
                Ajouter
              </button>
            ))}
            {currentData.map((steps) => (
              <div key={steps.id}>
                <img
                  className="h-20 w-20"
                  src={`${VITE_BACKEND_URL}/uploads/${steps?.image}`}
                  alt=""
                />

                <p>{steps.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProtocolAdd;
