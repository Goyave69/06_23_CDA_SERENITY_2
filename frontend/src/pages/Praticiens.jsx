import React, { useState, useEffect } from "react";
import { Box, Button, Typography, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";

import { NavLink } from "react-router-dom";
import ApiHelper from "../services/ApiHelper";

function Praticiens() {
  const [praticiens, setPraticiens] = useState([]);
  const handleDelete = (id) => {
    ApiHelper(`specialists/${id}`, "DELETE")
      .then((res) => console.warn(res))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const getSpecialists = async () => {
      try {
        const response = await ApiHelper("specialists", "GET");
        const data = await response.json();
        setPraticiens(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSpecialists();
  }, []);
  const data = [
    {
      image1: "https://file.rendit.io/n/s9tgA372Fug9qnCZ2qBf.svg",
      image2: "https://file.rendit.io/n/OlpKQOSR5l2nkOJgC7m2.svg",
      name: "Sahrane",
      patients: 254,
      interventions: 5,
      satisfaction: 5.0,
      votes: 45,
    },
    {
      image1: "https://file.rendit.io/n/SNC88nILdwdN1uDyl6nW.svg",
      image2: "https://file.rendit.io/n/VHyfcKy91IYX3Qj5H7uR.svg",
      name: "Dr Sanchez",
      patients: 342,
      interventions: 9,
      satisfaction: 4.8,
      votes: 45,
    },
  ];

  return (
    <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] relative flex flex-col justify-start w-full items-stretch">
      <h3 className="font-semibold text-4xl">Chirurgiens</h3>
      <div className="w-[991px] h-[529px]  absolute top-10 left-8 rounded-[24px]" />
      <div className=" relative flex flex-col justify-start gap-6 h-[572px] shrink-0 items-stretch pt-8 pb-6 px-8 rounded-[24px]">
        <div className="flex flex-row justify-start mb-4 gap-6 relative items-center">
          <input
            type="text"
            placeholder="Search"
            className=" flex flex-row justify-start gap-4 relative h-12 items-center mb-1 mr-[527px] pl-4 pr-56 py-4 rounded-lg border border-grey-600"
          />

          <button
            type="button"
            className="flex flex-col justify-start relative w-12 shrink-0 h-12 items-center py-3"
          >
            <img
              src="https://file.rendit.io/n/mI4zQUEgynitZlnj8Abx.svg"
              alt=""
              className="min-h-0 min-w-0 relative w-6"
            />
          </button>
          <button
            type="button"
            className="flex flex-col justify-start relative w-12 shrink-0 items-center"
          >
            <button
              type="button"
              className="bg-[url(https://file.rendit.io/n/lVexqjHqp87ggSJa7LEX.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-start relative w-12 h-12 shrink-0 items-center py-3"
            >
              <img
                alt=""
                src="https://file.rendit.io/n/TmAcdXbcqWpNykwgOxnQ.svg"
                className="min-h-0 min-w-0 relative w-6"
              />
            </button>
          </button>
        </div>
        <div className="flex flex-row justify-start mr-20 gap-3 relative items-center">
          <img
            alt=""
            src="https://file.rendit.io/n/SNC88nILdwdN1uDyl6nW.svg"
            className="min-h-0 min-w-0 relative w-5 shrink-0"
          />
          <div className="text-xs font-['Inter'] font-medium leading-[18px] text-[#b2b3bd] mr-[397px] relative w-16 shrink-0">
            Sélection
          </div>
          <div className="text-xs font-['Inter'] font-medium leading-[18px] text-[#b2b3bd] mr-24 relative w-12 shrink-0">
            Patients
          </div>
          <div className="text-xs font-['Inter'] font-medium leading-[18px] text-[#b2b3bd] mr-16 relative w-20 shrink-0">
            Interventions
          </div>
          <div className="text-xs font-['Inter'] font-medium leading-[18px] text-[#b2b3bd] relative w-20 shrink-0">
            Satisfaction
          </div>
        </div>
        <div className="bg-[rgba(228,_228,_228,_0.1)] mb-2 relative h-px shrink-0" />

        {data.map((item, index) => (
          <div className="shadow-[inset_0px_-1px_0px_0px_#e4e4e4] bg-black/0 flex flex-row justify-start gap-2 relative items-start">
            <img
              alt=""
              src={item.image1}
              className="min-h-0 min-w-0 relative w-5 shrink-0 mt-6 mr-2"
            />
            <img
              alt=""
              src={item.image2}
              className="min-h-0 min-w-0 relative w-24 shrink-0 mb-6 mr-4"
            />
            <div className="font-['Inter'] font-semibold text-black relative w-40 shrink-0 mt-3 mr-48">
              {item.name}
            </div>
            <div className="text-sm font-['Inter'] leading-[24px] text-white relative w-6 shrink-0 mt-3 mr-40">
              {item.patients}
            </div>
            <div className="text-sm font-['Inter'] leading-[24px] text-[#5f75ee] relative w-2 shrink-0 mt-3 mr-[116px]">
              {item.interventions}
            </div>
            <div className="text-sm font-['Inter'] leading-[24px] text-[#7fb97a] mt-3 relative w-5 shrink-0">
              {item.satisfaction}
            </div>
            <div className="whitespace-nowrap text-sm font-['Inter'] leading-[24px] text-[#808191] mt-3 relative w-16 shrink-0">
              ({item.votes} votes)
            </div>
          </div>
        ))}

        <button
          type="button"
          className="self-center flex flex-col justify-start relative items-stretch"
        >
          <div className="bg-[#6c5dd3] flex flex-col justify-center relative h-12 shrink-0 items-stretch px-5 rounded-lg">
            <NavLink to="/add-praticien">
              <button
                type="button"
                className="text-center whitespace-nowrap text-sm font-['Inter'] font-bold leading-[20px] text-white ml-px relative"
              >
                Nouveau praticien
              </button>
            </NavLink>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Praticiens;
