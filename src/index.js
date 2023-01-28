import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Signup from "./routes/signup";
import AccountDepartment from "./routes/accountDepartment";
import Advertiser from "./routes/advertiser";
import EditingDepatment from "./routes/editingDepartment";
import Journalist from "./routes/jornalist";
import MarketingDepartment from "./routes/marketingDepartment";
import Photographer from "./routes/photographer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/accountDepartment",
    element: <AccountDepartment />,
  },
  {
    path: "/advertiser",
    element: <Advertiser />,
  },
  {
    path: "/editingDepartment",
    element: <EditingDepatment />,
  },
  {
    path: "/marketingDepartment",
    element: <MarketingDepartment />,
  },
  {
    path: "/journalist",
    element: <Journalist />,
  },
  {
    path: "/photographer",
    element: <Photographer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);