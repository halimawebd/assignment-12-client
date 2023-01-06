import React, { useContext, useEffect, useState } from "react";
import {
  CheckCircleIcon,
  HeartIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";

import { AuthContext } from "../../../../context/AuthProvider";
import useBuyer from "../../../../customHooks/useBuyer";
import toast from "react-hot-toast";
import ReportModal from "../Reportmodal/ReportModal";
const AllProducts = ({ product, setBookProduct }) => {
  const { user } = useContext(AuthContext);
  const [reportModal, setReportModal] = useState(null);
  const [isBuyer] = useBuyer(user?.email);
  const {
    
    image_url,
    included,
    location,
    mobile,
    product_name,
    price,
    original_price,
    posted_time,
    posted_date,
    PurchaseYear,
    time,
    seller_name,
  } = product;
  // console.log(product);
  const [LogUser, setLogUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/users").then((data) => {
      // console.log(data.data);
      const userData = data.data;
      const dataMap = userData.map((dt) => setLogUser(dt));
      return dataMap;
    });
  }, []);

  const handleWishList = (item) => {
    fetch("http://localhost:4000/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.acknowledged) {
          toast.success("WishList Added successful");
        }
      });
  };



  return (
    <div>
      <div className="card w-full glass">
        {isBuyer && (
          <div className="flex justify-end">
            <h1>
              <button onClick={() => handleWishList(product)}>
                <HeartIcon className="w-[30px]" />
              </button>
            </h1>
            <h1>
              <button>
                <label htmlFor="reportModal">
                  {" "}
                  <ExclamationCircleIcon className="w-[30px]" />
                </label>
              </button>
            </h1>
          </div>
        )}
        <figure>
          <img className="h-[350px]" src={image_url} alt="laptop!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{product_name}</h2>

          <div className="flex">
            <h3 className="text-lg font-semibold mr-1">
              Seller Name: {seller_name}
            </h3>
            {LogUser?.status === "verified" && (
              <CheckCircleIcon className="h-6 w-6 text-blue-500" />
            )}
          </div>

          <p className="text-lg font-semibold mr-1">Included: {included}</p>
          <p className="text-lg font-semibold">Purchase Year: {PurchaseYear}</p>
          <p className="text-lg font-semibold">
            Original Price: {original_price}Tk
          </p>
          <p className="text-lg font-semibold">Sell Price: {price}Tk</p>
          <p className="text-lg font-semibold">Contact: {mobile}</p>
          <p className="text-lg font-semibold">Seller Location: {location}</p>
          {!time && (
            <p className="text-lg font-semibold">Posted Time: {posted_time}</p>
          )}
          {!time && (
            <p className="text-lg font-semibold">Date: {posted_date}</p>
          )}
          {time && (
            <p className="text-lg font-semibold">
              Posted Time: {new Date(time).toLocaleString()}
            </p>
          )}
          {isBuyer ? (
            <div className="card-actions justify-end">
              <label
                onClick={() => setBookProduct(product)}
                htmlFor="product-modal"
                className="btn my-2"
              >
                Book Now
              </label>
            </div>
          ) : (
            <p className="text text-red-500 text-xl">
              Only Buyer can order this item
            </p>
          )}
        </div>
      </div>
      {
        <ReportModal
          reportModal={reportModal}
          setReportModal={setReportModal}
          
        />
      }
    </div>
  );
};

export default AllProducts;
