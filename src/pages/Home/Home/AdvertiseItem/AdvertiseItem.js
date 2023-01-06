// import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import AdvertiseCard from "./AdvertiseCard";

// const AdvertiseItem = () => {
  
//   const { data: adverTise, refetch } = useQuery({
//     queryKey: ["advertise"],
//     queryFn: async () => {
//       const res = await fetch("http://localhost:4000/advertise");
//       const data = await res.json();
//       return data;
//     },
//   });
//   console.log(adverTise)

//   const handleDelete = id => {
//         fetch(`http://localhost:4000/users/advertise/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 authorization: `bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.deletedCount > 0) {
//                     toast.success('Deleted successfully');
//                     refetch()
//                 }
//             })
//     };


//   return (
//     <section>
//       {adverTise?.length > 0 && (
//         <>
//           <h1 className="text-4xl text-center my-3">Advertise Item</h1>

//           <div className="flex justify-around w-[1400px] mx-auto my-3">
//             {adverTise?.map((advertise) => (
//               <AdvertiseCard handleDelete={handleDelete} key={advertise._id} advertise={advertise} />
//             ))}
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default AdvertiseItem;
