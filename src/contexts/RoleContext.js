import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            const response = await axios.get('https://role-based-report-101.onrender.com/api/roles');
            setRoles(response.data);
        };
        fetchRoles();
    }, []);

    return (
        <RoleContext.Provider value={{ roles }}>
            {children}
        </RoleContext.Provider>
    );
};
