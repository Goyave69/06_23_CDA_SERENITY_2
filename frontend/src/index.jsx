import Dashboard from "./pages/Dashboard";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import AdminUsers from "./components/AdminUsers";

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
    ],
  },
];

export default Routes;
