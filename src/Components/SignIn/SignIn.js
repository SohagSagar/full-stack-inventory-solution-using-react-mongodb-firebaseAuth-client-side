import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import './SignIn.css';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link} from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='login-section'>

            <div className="login-container">
                <h2 className='heading-style'>Please Login </h2><hr className='heading-hr-line'/>

                <form>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>

                    <button className='btn btn-secondary btn-style' type="submit"> Login </button>
                </form>

                <div className="hr-line">
                    <hr className='hr' />
                    <p className='mx-2 '>OR</p>
                    <hr className='hr' />
                </div>

                <div className="google-login">
                    <AiOutlineGoogle />
                    <p>Continue with Google</p>
                </div>

                <div className='login-to-register-link'>
                    <p>Don't have an account?  <Link style={{ textDecoration: 'none', color:'#212529', fontWeight:'bold' }} to={'/register'}>Register Now</Link>
                    
                    </p>
                </div>






            </div>


        </div>
    );
};

export default SignIn;