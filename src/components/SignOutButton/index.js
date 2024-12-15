import React, { useState, useEffect, useRef} from 'react';
import { auth } from '../../firebase/firebase';
import { NavLink } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
//import LoginPage from '../src/main-component/LoginPage';
import {Link, useNavigate} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { db } from '../../firebase/firebase';
import { useAuth } from '../../context/AuthContext';

const SignOutButton = () => {
    const push = useNavigate();
    const {signOut, currentUser } = useAuth();
    const [error, setError] = useState("");

    const userSignedOut = async () => {
        setError("");
        try {
            await signOut();
            console.log('Signed Out');
            /*  
            const unsubscribe = auth.onAuthStateChanged(user => {
                setCurrentUser('');
              })
              return unsubscribe*/
            } catch {
                setError("Failed to logout");
        }
        push('/login');
    }   

    return (
        currentUser ? <>
        <Button className="theme-btn" onClick={userSignedOut}>
        <span className="theme-btn">Logout</span>
        </Button>
        {/*<span className="theme-btn"> Welcome {authUser} </span>*/}
        </> :
        <NavLink className="theme-btn" to="/login">
        <span className="text">
        Not athorize user
        </span>
        <span className="mobile">
        <i className="fi flaticon-right-arrow-1"></i>
        </span>
        </NavLink>
    )
}
export default SignOutButton;



