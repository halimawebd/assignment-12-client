import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../../context/AuthProvider";

const BookingProduct = ({ bookProduct, setBookProduct }) => {
  // console.log(bookProduct)
  const { user } = useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const location = form.location.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const productName = form.productName.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const booking = {
      name,
      price,
      location,
      email,
      phone,
      productNamed: bookProduct.product_name,
      productName
    };
    // console.log(booking)
    
    fetch('http://localhost:4000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                setBookProduct(null)
                toast.success('Booking confirmed');
                // refetch();
            }
            else{
                toast.error(data.message);
            }
        })


    
  };

  return (
    <div>
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{bookProduct.product_name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="productName"
              type="text"
              defaultValue={bookProduct.product_name}
              disabled
              placeholder="Product Name"
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              defaultValue={parseInt(bookProduct.price)}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
            required
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <input
            required
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingProduct;
