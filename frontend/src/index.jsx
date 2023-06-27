import PraticienForm from "./components/PraticienForm";
import Dashboard from "./pages/Dashboard";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import AdminUsers from "./components/AdminUsers";
import PatientForm from "./pages/PatientForm";
import Praticiens from "./pages/Praticiens";

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
        path: "manage-users",
        element: <AdminUsers />,
      },

      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "gestion-praticiens",
        element: <Praticiens />,
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
