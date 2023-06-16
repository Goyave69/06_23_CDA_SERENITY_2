import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();

    navigate("/login");
  };
  return (
    <>
      <div>Dashboard</div>
      <button type="button" onClick={logOut}>
        {" "}
        Se déconnecter{" "}
      </button>
    </>
  );
}

export default Dashboard;
