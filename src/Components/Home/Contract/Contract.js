import React from 'react';
import './Contract.css'

const Contract = () => {
    return (
        <div className="contract-section">
            <div className='container'>
                <h3 className='section-heading'>Get in touch</h3><hr style={{ marginTop: '0' }} />

                <div className="contract-info">
                    {/* <div>
                    <img src="https://i.ibb.co/5FqWLKY/2022-05-08-180229-Fotor-removebg-preview.png" alt="" />
                </div> */}


                    <div className='form-section'>
                        <form>
                            <input className='form-control mb-1' type="text" placeholder='Your Name' />
                            <input className='form-control mb-1' type="email" placeholder='Your Email' />
                            <div className='d-flex'>
                                <input className='form-control mb-1 me-1' type="text" placeholder='Mobile Number' />
                                <input className='form-control mb-1' type="text" placeholder='Country' />
                            </div>
                            <textarea className='form-control' name="" id="" cols="3" rows="2" placeholder='Your Message...'></textarea>
                            <div className='d-flex'>
                                <button className='btn btn-secondary btn-style contract-btn' type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;