import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../../components/Loader";
import { AuthContext } from "../../../../../context/AuthProvider";

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
const {user} = useContext(AuthContext)
const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_Iimgbb_key;
  console.log(imgHostKey)
  const handleAddproduct = (data) => {
    setIsLoading(true);
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const addproduct = {
            product_name: data.name,
            seller_name: data.sellerName,
            original_price: data.originalprice,
            price: data.resaleprice,
            location: data.location,
            mobile: data.phone,
            PurchaseYear: data.purchase,
            condition: data.condition,
            category_id: data.category,
            description: data.message,
            included: data.included,
            image_url: imgData.data.url,
            time: new Date(),
            email: user?.email
          };
          // console.log(addproduct);
          fetch("http://localhost:4000/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addproduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.acknowledged){
                navigate('/dashboard/myProducts')
                toast.success("Product added successfully");
                setIsLoading(false);

              }
              
            });
        }
      });
  };
  if (isLoading) {
    return <Loader/>;
  }
  return (
    <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-100 mt-12 mb-12">
      <form onSubmit={handleSubmit(handleAddproduct)}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center">
          <div>
            <label htmlFor="name" className="block dark:text-gray-400">
              Product Name*
            </label>
            <input
              {...register("name", {
                required: "Name Is Required",
                minLength: {
                  value: 4,
                  message: "Name Must Be 4 Characters Or Long",
                },
              })}
              type="text"
              name="name"
              id="name"
              placeholder="Product Name"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          <div>
            <label htmlFor="name" className="block dark:text-gray-400">
              Your Name
            </label>
            <input
              {...register("sellerName", {
                required: "Name Is Required",
                minLength: {
                  value: 4,
                  message: "Name Must Be 4 Characters Or Long",
                },
              })}
              type="text"
              name="sellerName"
              id="name"
              placeholder="Seller Name"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
          <div>
            <label htmlFor="img" className="block dark:text-gray-400">
              Product Image
            </label>
            <input
              {...register("image", {
                required: true,
              })}
              type="file"
              name="image"
              id="image"
              accept="image/*"
              placeholder="Enter Your img"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          <div>
            <label htmlFor="originalprice" className="block dark:text-gray-400">
              originalprice
            </label>
            <input
              {...register("originalprice", {
                required: "originalprice is Required",
              })}
              type="text"
              name="originalprice"
              id="originalprice"
              placeholder="originalprice"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.originalprice?.message}</p>
          )}
          <div>
            <label htmlFor="resaleprice" className="block dark:text-gray-400">
              resaleprice
            </label>
            <input
              {...register("resaleprice", {
                required: "resaleprice is Required",
              })}
              type="text"
              name="resaleprice"
              id="resaleprice"
              placeholder="resaleprice"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.resaleprice?.message}</p>
          )}
          <div>
            <label htmlFor="location" className="block dark:text-gray-400">
              location
            </label>
            <input
              {...register("location", { required: "location is Required" })}
              type="text"
              name="location"
              id="location"
              placeholder="location"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block dark:text-gray-400">
              phone
            </label>
            <input
              {...register("phone", { required: "phone is Required" })}
              type="text"
              name="phone"
              id="phone"
              placeholder="phone"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          <div>
            <label htmlFor="included" className="block dark:text-gray-400">
              included
            </label>
            <input
              {...register("included", { required: "included Required" })}
              type="text"
              name="included"
              id="included"
              placeholder="phone"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          <div>
            <label htmlFor="purchase" className="block dark:text-gray-400">
              purchase
            </label>
            <input
              {...register("purchase", { required: "purchase is Required" })}
              type="text"
              name="purchase"
              id="purchase"
              placeholder="purchase"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          <div>
            <label
              htmlFor="condition"
              className="block dark:text-gray-400 mt-6"
            >
              Condition*
            </label>
            <select
              {...register("condition", { required: true })}
              className="select select-bordered w-full"
            >
              <option>excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div>
            <label htmlFor="category" className="block dark:text-gray-400 mt-6">
              category*
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="1">HP Laptop</option>
              <option value="2">DELL Laptop</option>
              <option value="3">WALTON Laptop</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block dark:text-gray-400">
              Message*
            </label>
            <textarea
              {...register("message", { required: "message is Required" })}
              name="message"
              placeholder="exmple@gmail.com"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          <input
            className="btn btn-secondary w-full rounded-none py-2 px-8 mt-6 text-gray-100"
            value="Add a Product"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
