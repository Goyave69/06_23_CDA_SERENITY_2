import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import { useCurrentUserContext } from "./Context/UserContext";

function App() {
  const { user, currentUser } = useCurrentUserContext();
  return (
    <div>
      <Navigation user={user} currentUser={currentUser} />
      <Outlet />
    </div>
  );
}

export default App;
