import React from 'react';
import { AuthContext } from './AuthContext';

const AtuhProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
        
    );
}

export default AtuhProvider;
