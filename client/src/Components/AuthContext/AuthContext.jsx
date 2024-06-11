// AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create a context
export const AuthContext = createContext();

const authenticateUser = async () => {
    try {
        const response = await axios.get('http://localhost:4000/user/get-user', { withCredentials: true });
        if (response && response.data.data) {
            return {
                isAdmin: response.data.data.isAdmin === true,
                isUser: response.data.data.isAdmin === false
            };
        }
    } catch (error) {
        if (error.response && error.response.status !== 401) {
            console.error("Error during authentication");
        }
    }
    return { isAdmin: false, isUser: false };
};

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        authenticateUser().then((auth) => {
            setIsAdmin(auth.isAdmin);
            setIsUser(auth.isUser);
            setIsLoading(false); // Set loading to false when the request is complete
        });
    }, []);

    return (
        <AuthContext.Provider value={{ isAdmin, isUser, setIsAdmin, setIsUser }}>
            {/* {isLoading ? <div>Loading...</div> : children}  */children}
        </AuthContext.Provider>
    );
};

// Create a custom hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);