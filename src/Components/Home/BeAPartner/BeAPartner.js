import React from 'react';
import './BeAPartner.css';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BeAPartner = () => {
    return (
        <div className="partnership-container">
            <div className='container'>
                <h3 className='section-heading section-heading-black'>Be A Partner</h3><hr style={{ marginTop: '0', color: 'whitesmoke' }} />
                <div className="card-grid">
                    <div className="partnercard">
                        <img src="https://i.ibb.co/zFVKy0f/trust-partnership-removebg-preview.png" alt="" />
                        <p>Trust Partnership</p>
                    </div>

                    <div className="partnercard">
                        <img src="https://i.ibb.co/KwvV6JW/large-space.jpg" alt="warehouse space img" />
                        <p>Large Space</p>
                    </div>

                    <div className="partnercard">
                        <img src="https://i.ibb.co/CWsnxYz/easy-payment-removebg-preview.png" alt="" />
                        <p>Easy Payment</p>
                    </div>

                    <div className="partnercard">
                        <img src="https://i.ibb.co/S3FvPYQ/morden-vehicle-removebg-preview.png" alt="" />
                        <p>Modern Vehicle</p>
                    </div>
                </div>

                <div className="partner-btn">
                   <button className='btn '><Link style={{ textDecoration: 'none', color:'whitesmoke' }} to={'/register'}>Join With Us <BsArrowRight/></Link> </button>
                </div>
                



            </div>
        </div>
    );
};

export default BeAPartner;