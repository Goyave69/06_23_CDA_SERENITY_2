import React, { useState, useEffect } from "react";
import axios from "axios";
import MapData from "../MapData";

const { VITE_BACKEND_URL } = import.meta.env;

function ProtocolAdd({ task, selectedComponent, setSelectedComponent }) {
  const [stepsSurgeries, setStepsSurgeries] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
      case 5:
        fetch("http://localhost:5000/check-list")
          .then((res) => res.json())
          .then((response) => setCurrentData(response))
          .catch((err) => console.error(err));
        break;

      default:
        break;
    }
  };

  const handleDeleteSteps = (stepsId) => {
    axios
      .delete(`http://localhost:5000/steps-infos/${stepsId}`)
      .then(() => {
        axios
          .get(`http://localhost:5000/steps-infos`)
          .then((res) => setCurrentData(res.data));
      })
      .catch((error) => {
        console.error(error);
      });
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
          <div>
            <div className=" mt-5 px-5 mb-12">
              {buttons.map((_, index) => (
                <button
                  key={_}
                  type="button"
                  className={`${task.className} px-5 h-14 w-40  rounded-lg hover:scale-[1.15]`}
                  onClick={() => handleClick(index)}
                >
                  Ajouter<span className="text-2xl">+</span>
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-5 ml-5  ">
              {currentData.map((data) => (
                <MapData
                  key={data.id}
                  data={data}
                  deleteSteps={handleDeleteSteps}
                  protocole={task}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProtocolAdd;
