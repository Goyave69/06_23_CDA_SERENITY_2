import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./index";
import { CurrentUserContextProvider } from "./Context/UserContext";

const router = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <CurrentUserContextProvider>
      <RouterProvider router={router} />
    </CurrentUserContextProvider>
  </StrictMode>
);
