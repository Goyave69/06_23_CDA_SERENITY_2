import PraticienForm from "./components/PraticienForm";
import Dashboard from "./pages/Dashboard";
import App from "./App";
import LoginPage from "./pages/LoginPage";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "add-praticien",
        element: <PraticienForm />,
      },
    ],
  },
];

export default Routes;
