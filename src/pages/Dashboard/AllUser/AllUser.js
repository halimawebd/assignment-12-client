import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUser = () => {
  const { data: userData, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (userId) => {
    fetch(`http://localhost:4000/users/admin/${userId}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Verified Successful");
          refetch();
        }
      });
  };

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
      <h1>All User</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verify</th>
              <th>Make Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user,i) => (
              <tr key={i} className="hover">
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-secondary"
                    >
                      Make Verify
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={()=>handleUserDelete(user._id)} className="btn btn-xs btn-accent">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
