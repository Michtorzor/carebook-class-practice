import { createContext, useEffect, useState, useContext } from "react";
import { apiFetch } from "../api.js";


const AuthContext = createContext(null);



export function AuthProvider({children}) {
    // stores the currently signed in user, null means no user is signed in.
    const [user, setUser] = useState(null);
 
    // loading stays true while a saved token is being verified with the server.
    const [loading, setLoading] =  useState(Boolean(localStorage.getItem('token')));

    // If a token exists, it asks the server for the matching user account.
    // Invalid or expired tokens are removed; loadind stops when validation ends.
    useEffect(() => {
        if(!localStorage.getItem('token')) return;
        apiFetech('/auth/me')
        .then((data) => setUser(data.user))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    }, []); 

    // send credentials or registration values to an authentication endpoint.
    // On success, saves the returned token and updates the current user.
    async function authentication(path, values) {
        const data = await apiFetch(path, { method: "POST", body: values});
        localStorage.setItem('token', data.token);
        setUser(data.user);
        return data.user;
    } 

    // Wraps authenication() with the login endpoint.
    const login = (values) => authentication('/auth/login', values);

    // Wraps authenticate() with the registration endpoint.
    const register = (values) => authentication('/auth/register', values);

    // Removes the saved token and clears the current user without calling the server.
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user, loading, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);