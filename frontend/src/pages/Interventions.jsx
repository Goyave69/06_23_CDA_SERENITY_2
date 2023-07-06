import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import ProtocolAdd from "../components/ProtocoleSerenity/ProtocolAdd";
import ProtocolDashboard from "../components/ProtocoleSerenity/ProtocolDashboard";
import AddComprendreMonOpération from "../components/ProtocoleSerenity/AddComprendreMonOpération";
import AddFinirLesDemarches from "../components/ProtocoleSerenity/AddFinirLesDemarches";
import CurrentUserContext, {
  useCurrentUserContext,
} from "../Context/UserContext";

function Interventions() {
  const { user } = useCurrentUserContext(CurrentUserContext);
  const [selectedTask, setSelectedTask] = useState(null);
  const protocols = [
    {
      title: "Comprendre mon opération",
      className:
        "bg-[#f3d03d] relative flex flex-row justify-center gap-4 h-16 shrink-0 items-center rounded-lg mb-4",
      components: [AddComprendreMonOpération],
    },
    {
      title: "Finir les démarches",
      className:
        "bg-[#4ad1b7] relative flex flex-row justify-center gap-4 h-16 shrink-0 items-center rounded-lg mb-4",
      component: [AddFinirLesDemarches], // Chaque protocol peut avoir un composant unique
    },
    {
      title: "Préparer mon arrivée en toute sérénité",
      className:
        "bg-[#f85585] relative flex flex-row justify-center gap-4 h-16 shrink-0 items-center rounded-lg mb-4",
    },
    {
      title: "Anticiper ma sortie",
      className:
        "bg-[#baea64] relative flex flex-row justify-center gap-4 h-16 shrink-0 items-center rounded-lg mb-4",
    },
    {
      title: "Ma check-list avant le départ à la Clinique",
      className:
        "bg-[#635eec] relative flex flex-row justify-center gap-4 h-16 shrink-0 items-center rounded-lg mb-4",
    },
  ];
  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };
  return (
    <div>
      <h3>Bonjour Docteur {user.firstname}</h3>
      <div className="flex  w-[80%]">
        <ProtocolDashboard
          protocols={protocols}
          onTaskClick={handleTaskClick}
        />
        <div className="mt-20 ml-20">
          {selectedTask && <ProtocolAdd task={selectedTask} />}
        </div>
      </div>
    </div>
  );
}

export default Interventions;
