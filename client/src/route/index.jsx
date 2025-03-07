

import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AddExpense from "../pages/AddExpense";
import Layout from "../layouts/layout";
import Insight from "../pages/Insight";
import NotFound from "../pages/NotFound";



const router = createBrowserRouter([

   {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "",
            element: <Dashboard />
        },
        {
            path: "add-expense",
            element: <AddExpense />
        },
        {
            path: "insight",
            element: <Insight />
        }
    ]
   },
   {
      path: "*",
      element:<NotFound />
   }

]);

export default router
