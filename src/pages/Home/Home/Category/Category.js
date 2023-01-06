import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";


import AllProducts from "../AllProducts/AllProducts";
import BookingProduct from "../AllProducts/BookingProduct/BookingProduct";

const Category = () => {

  
  const category = useLoaderData();
  const [bookProduct, setBookProduct] = useState(null);
  //   console.log(category);

  return (
    <section>
      <>
        <div className="grid md:grid-cols-2 gap-3">
          {category.map((product) => (
            <AllProducts
              key={product._id}
              setBookProduct={setBookProduct}
              product={product}
            />
          ))}
        </div>
     
      </>
      {bookProduct && (
        <BookingProduct
          setBookProduct={setBookProduct}
          bookProduct={bookProduct}
        />
      )}
    </section>
  );
};

export default Category;
