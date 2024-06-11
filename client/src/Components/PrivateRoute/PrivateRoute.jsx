import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../AuthContext/AuthContext'; // Import the useAuth hook

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isAdmin, isLoading } = useAuth(); // Use the useAuth hook to get isAuth and isLoading

    React.useEffect(() => {
        if (isAdmin === false) {
            navigate('/Login', { replace: true });
        }
    }, [navigate, isAdmin]); // Add isAuth to the dependency array

    if (isLoading) {
        return <div>Loading...</div>; // Show loading indicator when isLoading is true
    }

    return isAdmin ? children : null;
};

export default PrivateRoute;