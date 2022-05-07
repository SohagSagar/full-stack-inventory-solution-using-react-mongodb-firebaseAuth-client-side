import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { AiOutlineMobile, AiOutlineMail,AiFillInstagram,AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BiCopyright} from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container container'>

                <div className="inventory-logo">
                    <h3>Tech Inventory Solution</h3>
                    <p>This is kind of a marchent warehouse of verious electronic collect such as mobile, mobile accreous, laptop etc. Any marchent can store their product by aggreeing the terms and conditions.</p>
                </div>

                <div className="quick-links">
                    <p className='footer-heading'>Quick Links</p>
                    <ul className='quick-links-li'>
                        <li><Link style={{ textDecoration: 'none', color: 'whitesmoke', fontWeight: '600' }} to={'/'}>Home</Link></li>

                        <li><Link style={{ textDecoration: 'none', color: 'whitesmoke', fontWeight: '600' }} to={'/'}>Be A Partner</Link></li>

                        <li><Link style={{ textDecoration: 'none', color: 'whitesmoke', fontWeight: '600' }} to={'/blogs'}>Blogs</Link></li>

                        <li><Link style={{ textDecoration: 'none', color: 'whitesmoke', fontWeight: '600' }} to={'/sign-in'}>Sign In</Link></li>
                    </ul>

                </div>

                <div className="contract-info">
                    <div>
                        <p className='footer-heading'>Contract</p>

                        <div className='footer-contract'>
                            <AiOutlineMobile className='contract-icon'/>
                            <p>+88 016778366XX</p>
                        </div>
                        <div className='footer-contract'>
                            <AiOutlineMail className='contract-icon'/>
                            <p>sagorsohag29@gmail.com</p>
                        </div>
                        <div className='footer-contract'>
                            <MdOutlineLocationOn  className='contract-icon'/>
                            <p>West Paikpara,Brahmananbaria</p>
                        </div>
                    </div>


                </div>

            </div>
            <div className='footer-bottom container'>
                <hr className='footer-hr' />
                <div className="footer-social-links">
                    <p>All right reserved <BiCopyright/> Tech Inventory Solution</p>
                    <div className="social-links">
                        <BsFacebook className='social-icon'/>
                        <AiFillInstagram className='social-icon'/>
                        <FaLinkedin className='social-icon'/>
                        <AiFillTwitterCircle className='social-icon'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;