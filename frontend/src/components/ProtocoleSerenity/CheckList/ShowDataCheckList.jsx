import React from "react";
import select from "../../../assets/img/select.png";

function ShowDataCheckList({ data }) {
  return (
    <div className="">
      <div className="bg-[#eee8e8] rounded-lg w-[20rem] flex flex-col">
        <div className="flex justify-between">
          <h1 className=" px-5 ">{data.name}</h1>
          <img src={select} alt="" className="w-5 mr-3 mt-1" />
        </div>
        <p className="px-5 font-light italic">{data.subtext}</p>
      </div>
    </div>
  );
}

export default ShowDataCheckList;
