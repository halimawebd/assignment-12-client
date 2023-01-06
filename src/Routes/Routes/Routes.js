import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import AllBuyer from "../../pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../pages/Dashboard/AllSeller/AllSeller";

import AllUser from "../../pages/Dashboard/AllUser/AllUser";
import ReportPage from "../../pages/Dashboard/Dashboard/ReportPage/ReportPage";


import WishList from "../../pages/Dashboard/Dashboard/WishList/WishList";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../pages/Dashboard/Payment/Payment";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import AddProduct from "../../pages/Home/Home/AllProducts/AddProduct/AddProduct";

import Category from "../../pages/Home/Home/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";

import Register from "../../pages/Register/Register";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/category/${params.id}`),
        element: <PrivateRoute><Category /></PrivateRoute>
      },
      {
        path: "/dashboard",
        errorElement: <ErrorPage />,
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
        
          {
            path: "/dashboard/myOrder",
            element: <MyOrders />
          },
          {
            path: "/dashboard/allUser",
            element: (
              <AdminRoute>
                <AllUser />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/reportPage",
            element: (
              <AdminRoute>
                <ReportPage />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/allSeller",
            element: (
              <AdminRoute>
                <AllSeller />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/allBuyer",
            element: (
              <AdminRoute>
                <AllBuyer />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/payment/:id",
            element: (
             <PrivateRoute><Payment /></PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:4000/bookings/${params.id}`),
          },
          {
            path: "/dashboard/addProduct",
            element: <AddProduct />,
          },
          {
            path: "/dashboard/myProducts",
            element: <MyProduct />
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList/>
          },
        ],
      },
    ],
  },
]);
