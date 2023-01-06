import React from "react";

import { Link } from "react-router-dom";

const AdvertiseCard = ({ advertise,handleDelete }) => {
  // console.log(advertise);
  const {
    _id,
    image_url,
    included,
    location,
    
    product_name,
    price,
    original_price,
    description,
    seller_name,
    time,
  } = advertise;




  return (
    
<div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<Link rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">{product_name}</Link>
		</div>
		<Link rel="noopener noreferrer" href="#"><button onClick={()=>handleDelete(_id)}>Delete Item</button></Link>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image_url} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>{new Date(time).toLocaleString()}</span>
			</div>
		</div>
		<div className="space-y-2">
			<Link rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-400">{seller_name}</h3>
			</Link>
			<p className="leading-snug dark:text-gray-400">{description}</p>
      <p>Included: {included}</p>
      <p>Original Price: {original_price}</p>
      <p>Sell Price: {price}</p>
      <p>Location{location}</p>
		</div>
	</div>
</div>
    
  );
};

export default AdvertiseCard;
