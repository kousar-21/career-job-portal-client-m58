import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import axios from 'axios';


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
            if(currentUser?.email){
                const userData = { email: currentUser.email}

                //Recap time
                axios.post('http://localhost:4000/jwt', userData, {
                    withCredentials: true
                })
                .then(res=>{
                    console.log(res.data)
                })
                .catch(error => console.log(error.message))




                //first time

                // axios.post('http://localhost:4000/jwt', userData)
                // .then(res => {
                //     console.log('Token after jwt',res.data)
                //     //one's option to save token number but not preffered one
                //     //simple one but not the best
                //     const token = res.data.token;
                //     localStorage.setItem('token', token)
                // })
                // .catch(error => console.log(error.message))
            }
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