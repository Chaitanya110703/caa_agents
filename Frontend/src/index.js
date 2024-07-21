import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import CreditScore from "./pages/CreditScore";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Loan from "./pages/Loan";
import Assistant from "./pages/Assistant";
import CreditSimulator from "./pages/CreditSimulator";
import Admin from "./pages/Admin";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/creditscore',
    element: <CreditScore />,
  },
  {
    path:'/admin',
    element: <Admin />
  },
  {
    path: '/loan',
    element: <Loan />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/Assistant',
    element: <Assistant />
  },
  {
    path: '/Simulator',
    element: <CreditSimulator />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

