import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import WishListCard from './WishListCard';

const WishList = () => {
 
    const { data: userData, refetch } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => {
          const res = await fetch("http://localhost:4000/wishlist");
          const data = await res.json();
          return data;
        },
      });
  const handleRemove = id =>{
    fetch(`http://localhost:4000/users/wishlist/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                toast.success('Deleted successfully');
                refetch();
            }
        })
  }
      
    return (
        <div>
            {userData?.map(list=> <WishListCard handleRemove={handleRemove} key={list._key} list={list}/>)}
        </div>
    );
};

export default WishList;
