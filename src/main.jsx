import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MainPage } from './pages/MainPage'
import { SettingPage } from './pages/SettingPage'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/settings',
        element: <SettingPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
