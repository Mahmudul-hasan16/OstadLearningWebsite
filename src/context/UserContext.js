import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';

export const ProfileContext =createContext()
const auth =getAuth(app);
const UserContext = ({children}) => {
    const [loading,setLoading] = useState(true)
    // this is email and password signUp function
    const register = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // this is email and password signIn function
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // this is  signOut function
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    // this user data 
    const [user ,setUser] = useState(null)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
    return () =>{
        unsubscribe()
    }
    },[])
    // this profile update function
    const changeProfile =(name , img)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img
        })
    }
    // this google and github pop up signUp system
    const popUpSignIn = (provider) => {
        return signInWithPopup(auth,provider)
    }
    // course enroll data 
    const [enroll,setEnroll] = useState([])

    const authInfo ={register,logIn,logOut,user,changeProfile,popUpSignIn,enroll,setEnroll ,loading};
    return (
        <ProfileContext.Provider value={authInfo}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;