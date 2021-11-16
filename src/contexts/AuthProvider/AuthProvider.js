import React, { createContext } from 'react';
import useFrirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContext = useFrirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;