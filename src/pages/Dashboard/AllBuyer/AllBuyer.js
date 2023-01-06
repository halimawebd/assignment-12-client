import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const { data: users = [] , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleUserDelete = userId =>{
    fetch(`http://localhost:4000/users/admin/${userId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Delete Successful");
          refetch();
        }
      });
  }

  return (
    <div>
      <h3 className="text-3xl">All Buyer</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete Buyer</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                {user?.role === "buyer" && (
                  <>
                    <th>{i + "0"}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td><button onClick={()=>handleUserDelete(user._id)} className="btn btn-xs btn-primary">Delete</button></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
