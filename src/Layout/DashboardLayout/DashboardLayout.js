import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Loader from "../../components/Loader";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../customHooks/useAdmin";
import useBuyer from "../../customHooks/useBuyer";
import useSeller from "../../customHooks/useSeller";
import {
  ShoppingCartIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  if (isAdminLoading) {
    return <Loader />;
  }
  if (isSellerLoading) {
    return <Loader />;
  }
  if (isBuyerLoading) {
    return <Loader />;
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-purple-200 md:bg-white">
            <div className="flex flex-col h-full p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2>Dashboard</h2>
                  <button className="p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current dark:text-gray-100"
                    >
                      <rect width="352" height="32" x="80" y="96"></rect>
                      <rect width="352" height="32" x="80" y="240"></rect>
                      <rect width="352" height="32" x="80" y="384"></rect>
                    </svg>
                  </button>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center py-4">
                    <button
                      type="submit"
                      className="p-2 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 dark:text-gray-400"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900"
                  />
                </div>
                <div className="flex-1">
                  <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm">
                      <Link
                        rel="noopener noreferrer"
                        to="/"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-gray-400"
                        >
                          <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                        </svg>
                        <span>Home</span>
                      </Link>
                    </li>

                    {isBuyer && (
                      <li className="rounded-sm">
                        <Link
                          rel="noopener noreferrer"
                          to="/dashboard/myOrder"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current dark:text-gray-400"
                          >
                            <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                            <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                            <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                          </svg>
                          <span>My Orders</span>
                        </Link>
                      </li>
                    )}

                    {isSeller && (
                      <>
                        <li className="flex justify-between">
                          <Link to="/dashboard/myProducts">
                            <ShoppingCartIcon className="w-[28px] text-gray-600" />
                            <span>My Product</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/dashboard/addProduct">
                            <PlusCircleIcon className="w-[28px] text-gray-600" />
                            <span>Add Product</span>
                          </Link>
                        </li>
                      </>
                    )}
                    {isAdmin && (
                      <li>
                        <Link to="/dashboard/allUser">
                          <UserGroupIcon className="w-[25px] text-gray-600" />
                          <span>All Users</span>
                        </Link>
                      </li>
                    )}

                    {isBuyer && (
                      <>
                        <li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                          <Link
                            rel="noopener noreferrer"
                            to="/dashboard/wishlist"
                            className="flex items-center p-2 space-x-3 rounded-md"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-5 h-5 fill-current dark:text-gray-400"
                            >
                              <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                            <span>Wishlist</span>
                          </Link>
                        </li>
                      </>
                    )}
                    {isAdmin && (
                      <li className="rounded-sm">
                        <Link
                          rel="noopener noreferrer"
                          to="/dashboard/reportPage"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current dark:text-gray-400"
                          >
                            <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                            <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                          </svg>
                          <span>Reported</span>
                        </Link>
                      </li>
                    )}
                    {isAdmin && (
                      <>
                        <li>
                          <Link to="/dashboard/allBuyer">All Buyers</Link>
                        </li>
                        <li>
                          <Link to="/dashboard/allSeller">All Seller</Link>
                        </li>
                      </>
                    )}
                    <li className="rounded-sm">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-gray-400"
                        >
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <button onClick={handleLogOut}>
                          <span>Logout</span>
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="w-12 h-12 rounded-lg dark:bg-gray-500"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                  <span className="flex items-center space-x-1">
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline dark:text-gray-400"
                    >
                      View profile
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
