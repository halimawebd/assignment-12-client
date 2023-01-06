// import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
// import React, { useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../../context/AuthProvider";
// import useSeller from "../../../customHooks/useSeller";


// const MyProductsCard = ({ singleProduct, refetch }) => {
//   const [LogUser, setLogUser] = useState([]);
//   const {user} = useContext(AuthContext)
//   const [isSeller] = useSeller(user?.email)
//   useEffect(() => {
//     fetch("http://localhost:4000/users")
//       .then((res) => res.json())
//       .then((data) => {
//         data.map((dt) => setLogUser(dt));
//       });
//   }, []);
//   const {
//     _id,
    
//     image_url,
//     included,
//     location,
//     mobile,
//     product_name,
//     price,
//     original_price,
//     posted_time,
//     posted_date,
//     PurchaseYear,
//     time,
//     seller_name,
//   } = singleProduct;

//   const handleDelete = id => {
//       fetch(`http://localhost:4000/users/seller/${id}`, {
//           method: 'DELETE',
//           headers: {
//               authorization: `bearer ${localStorage.getItem('accessToken')}`
//           }
//       })
//           .then(res => res.json())
//           .then(data => {
//               console.log(data);
//               if (data.deletedCount > 0) {
//                   toast.success('Deleted successfully');
//                   refetch();
//               }
//           })
//   };

  

//    const handleAdvertise = (product)=>{
//     fetch('http://localhost:4000/advertise',{
//       method: "POST",
//       headers:{
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(product)
//     })
//     .then(res => res.json())
//     .then(data =>{
//       console.log(data)
//       if(data.acknowledged){
//         toast.success('advertise successful')
//       }

//     })
//   }

//   return (
//     <div className="card w-full glass">
//       <figure>
//         <img className="h-[350px]" src={image_url} alt="laptop!" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title text-3xl">{product_name}</h2>

//         <div className="flex">
//           <h3 className="text-lg font-semibold mr-1">
//             Seller Name: {seller_name}
//           </h3>
//           {LogUser?.status === "verified" && (
//             <CheckCircleIcon className="h-6 w-6 text-blue-500" />
//           )}
//         </div>

//         <p className="text-lg font-semibold mr-1">Included: {included}</p>
//         <p className="text-lg font-semibold">Purchase Year: {PurchaseYear}</p>
//         <p className="text-lg font-semibold">
//           Original Price: {original_price}Tk
//         </p>
//         <p className="text-lg font-semibold">Sell Price: {price}Tk</p>
//         <p className="text-lg font-semibold">Contact: {mobile}</p>
//         <p className="text-lg font-semibold">Seller Location: {location}</p>
//         {!time && (
//           <p className="text-lg font-semibold">Posted Time: {posted_time}</p>
//         )}
//         {!time && <p className="text-lg font-semibold">Date: {posted_date}</p>}
//         {time && (
//           <p className="text-lg font-semibold">
//             Posted Time: {new Date(time).toLocaleString()}
//           </p>
//         )}
//         <div className="flex justify-between mt-2">
//             <button onClick={()=>handleAdvertise(singleProduct)} className="btn btn-primary">Advertise Item</button>
//             <div className="flex items-center">
//                 <p></p>
//                 <TrashIcon onClick={()=>handleDelete(_id)} className="w-[50px] h-[50px]"/>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProductsCard;
