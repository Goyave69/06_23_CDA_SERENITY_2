import NoIntervention from "@pages/NoIntervention";
import Agreement from "@components/Agreement";
import GeneralConditions from "@components/GeneralConditions";
import StepInfo from "@pages/StepInfo";
import PatientSignUp from "./pages/PatientSignUp";
import PatientNavigation from "./components/PatientNavigation";
import InfoOp from "./pages/InfoOp";
import Administrative from "./pages/Administrative";
import ArrivalPrep from "./pages/ArrivalPrep";
import TakeRDV from "./pages/TakeRDV";
import Checklist from "./pages/Checklist";
import Interventions from "./pages/Interventions";
import Clinic from "./pages/Clinic";
import PraticienForm from "./components/PraticienForm";
import Dashboard from "./pages/Dashboard";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import AdminUsers from "./components/Admin/AdminUsers";
import PatientForm from "./pages/PatientForm";
import Praticiens from "./pages/Praticiens";
import AddClinic from "./components/Admin/AddClinic";

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
            children: [
              {
                path: "step-info",
                element: <StepInfo />,
              },
            ],
          },
          {
            path: "administrative",
            element: <Administrative />,
            children: [
              {
                path: "patient-form",
                element: <PatientForm />,
              },
              {
                path: "agreement",
                element: <Agreement />,
              },
              {
                path: "conditions",
                element: <GeneralConditions />,
              },
            ],
          },
          {
            path: "prep",
            element: <ArrivalPrep />,
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
        path: "no-intervention",
        element: <NoIntervention />,
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
        path: "add-clinic",
        element: <AddClinic />,
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
  {
    path: "/sign-up",
    element: <PatientSignUp />,
  },
];

export default Routes;
