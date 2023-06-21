import PraticienForm from "./components/PraticienForm";
import Dashboard from "./pages/Dashboard";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import PatientForm from "./pages/PatientForm";

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
      {
        path: "patient-form",
        element: <PatientForm />,
      },
    ],
  },
];

export default Routes;
