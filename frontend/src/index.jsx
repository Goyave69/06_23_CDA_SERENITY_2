import PatientNavigation from "./components/PatientNavigation";
import InfoOp from "./pages/InfoOp";
import Administrative from "./pages/Administrative";
import ArrivalQuiz from "./pages/ArrivalQuiz";
import TakeRDV from "./pages/TakeRDV";
import Checklist from "./pages/Checklist";
import Interventions from "./pages/Interventions";
import Clinic from "./pages/Clinic";
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
        path: "patient/",
        element: <PatientNavigation />,
        children: [
          {
            path: "info-op",
            element: <InfoOp />,
          },
          {
            path: "administrative",
            element: <Administrative />,
          },
          {
            path: "quiz",
            element: <ArrivalQuiz />,
          },
          {
            path: "take-rdv",
            element: <TakeRDV />,
          },
          {
            path: "checklist",
            element: <Checklist />,
          },
        ],
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
        path: "gestion-cabinets",
        element: <Clinic />,
      },
      {
        path: "patient-form",
        element: <PatientForm />,
      },
      {
        path: "gestion-interventions",
        element: <Interventions />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default Routes;
