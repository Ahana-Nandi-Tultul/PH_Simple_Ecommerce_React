import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    // console.log(auth)
    const [user, setUser] = useState();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        createUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;