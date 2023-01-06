// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider';
// import useSeller from '../../customHooks/useSeller';





// const SellerRoutes = ({ children }) => {
//     const { user, loading } = useContext(AuthContext);
//     const [isSeller, setIsSellerLoading] = useSeller(user?.email);
//     const location = useLocation();

//     if (loading || setIsSellerLoading) {
//         return <p>Loading...</p>
//     }

//     if (user && isSeller) {
//         return children;
//     }

//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

// };

// export default SellerRoutes;