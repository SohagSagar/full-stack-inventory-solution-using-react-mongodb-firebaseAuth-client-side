import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Utilities/firebase.init';

const SignOut = () => {
    const [user] = useAuthState(auth);
    
    
    useEffect(()=>{
        signOut(auth);
    },[user]);

    const navigate= useNavigate();
    useEffect(()=>{
        if(!user){
            toast.success("Logout Successful !!", {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate('/sign-in');
        }

    },[user]);
    <ToastContainer />

    return ;
};

export default SignOut;