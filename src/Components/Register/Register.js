import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Utilities/firebase.init';
import Loading from '../../Utilities/Loading/Loading';

const Register = () => {
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = (event) => {
        event.preventDefault();
        //create user using email password//
        createUserWithEmailAndPassword(email, password);
    }

    // get user register info form from input//
    const getEmail = event => {
        const email = event.target.value;
        setEmail(email);
    }

    const getPassword = event => {
        const password = event.target.value;
        setPassword(password);
    }
     console.log(email, password);
     
    useEffect(() => {
        if (user) {
            toast.success("Registration Successful !!", {
                position: toast.POSITION.TOP_RIGHT
            });
            
            navigate('/')
        }
    }, [user])

    

    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case 'auth/email-already-exists':
                    toast.error("Email is Already Registered !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;

                default:
                toast.error( {error}  + '!!', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;
            }
            

        }
    }, [error]);

    if (loading) {
        return <Loading />
    }

    return (

        <div>
            <div className='login-section'>

                <div className="login-container">
                    <h2 className='heading-style'>Please Register </h2><hr className='heading-hr-line' />

                    <form onSubmit={handleRegister}>
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                            <Form.Control onBlur={getEmail} type="email" name='email' placeholder="name@example.com" required/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control onBlur={getPassword} type="password" name='password' placeholder="Password" required/>
                        </FloatingLabel>

                        <button className='btn btn-secondary btn-style' type="submit"> Register </button>
                    </form>

                    <div className='login-to-register-link'>
                        <p>Already have an account?  <Link style={{ textDecoration: 'none', color: '#212529', fontWeight: 'bold' }} to={'/sign-in'}>Login Now</Link>

                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;