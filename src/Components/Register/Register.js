import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='login-section'>

                <div className="login-container">
                    <h2 className='heading-style'>Please Register </h2><hr className='heading-hr-line' />

                    <form>
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
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