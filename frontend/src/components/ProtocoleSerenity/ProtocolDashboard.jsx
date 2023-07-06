import React, { useState } from "react";

function ProtocolDashboard({ protocols, onTaskClick }) {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(true); // on affiche le formulaire lorsqu'on clique sur "Ajouter"
  };

  return (
    <div>
      <div className="relative flex flex-col justify-start pb-8 w-80  mt-9 items-stretch ml-20">
        <div className="w-64 h-[648px] bg-[#e2e6eb] absolute top-8 left-4 rounded-[24px]" />
        <div className="w-[298px] h-[648px] bg-white absolute top-2 left-0 rounded-[24px]" />
        <div className="bg-gray-200 relative flex flex-col justify-start gap-4 h-[648px] shrink-0 items-stretch p-8 rounded-[24px]">
          <div className="whitespace-nowrap text-lg font-['Poppins'] font-medium leading-[24px] text-[#11142d] self-start relative w-3/4 mb-10 ml-px">
            Protolcole Serenity
          </div>
          <div className="relative flex flex-col justify-start ml-px items-stretch">
            <div className="w-12 text-sm font-['Work_Sans'] font-medium tracking-[-0.46666663885116577] text-[#333333] absolute top-4 left-0 h-8">
              Post Total
            </div>
            <div className="w-24 h-2 bg-[#ff9cc0] absolute top-10 left-0 rounded" />

            {protocols.map((protocol, index) => (
              <button
                type="button"
                className={protocol.className}
                onClick={() => onTaskClick(protocol)}
              >
                <div className="text-sm font-['Work_Sans'] font-medium tracking-[-0.46666663885116577] text-[#fefffe] relative w-40">
                  {protocol.title}
                </div>
                <div className="text-right text-lg font-['Work_Sans'] font-medium tracking-[-0.5999999642372131] text-[#fefffe] relative w-8 shrink-0">
                  10
                </div>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="flex flex-col justify-start relative items-stretch mx-px"
          >
            <div className="bg-[#1b1d21] flex flex-col justify-center relative h-12 shrink-0 items-center roundedtl-lg roundedbl-lg">
              <div className="text-center whitespace-nowrap text-sm font-['Inter'] font-bold leading-[20px] text-white relative w-16">
                Add more
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProtocolDashboard;
