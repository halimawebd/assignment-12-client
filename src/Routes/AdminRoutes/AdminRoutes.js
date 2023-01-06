// import React, { useContext } from 'react';
// import Loader from '../../components/Loader';

// import { AuthContext } from '../../context/AuthProvider';
// import useAdmin from '../../customHooks/useAdmin';



// const AdminRoute = ({ children }) => {
//     const { user, loading, logOut } = useContext(AuthContext);
//     const [isAdmin, isAdminLoading] = useAdmin(user?.email);
//     // const location = useLocation();

//     if (loading || isAdminLoading) {
//         return <Loader/>
//     }

//     if (user && isAdmin) {
//         return children;
//     }

//     // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
//     return (
//         logOut()
//         .then(() => {})
//         .catch((err) => console.log(err))
//     )
// };

// export default AdminRoute;