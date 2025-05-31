import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const createUsers = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }


    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const subscriber = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log("user after on auth state changed",currentUser);
            setLoading(false)
        })
        return ()=>{
            subscriber();
        }
    },[])


    const authInfo = {
        createUsers,
        loading,
        signInUser,
        user,
        signOutUser,
        signInWithGoogle
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;