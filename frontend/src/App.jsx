import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import CurrentUserContext, {
  useCurrentUserContext,
} from "./Context/UserContext";

function App() {
  const { user } = useCurrentUserContext(CurrentUserContext);
  return (
    <div>
      {user.email ? <Navigation /> : null}
      <Outlet />
    </div>
  );
}

export default App;
