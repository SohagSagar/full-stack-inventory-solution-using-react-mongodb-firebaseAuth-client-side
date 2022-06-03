import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../../Hooks/CustomLink/CustomLink';
import auth from '../../Utilities/firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='nav-logo' href="#">Tech Inventory Solution</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto menu-items">

                            <CustomLink to={'/'}>Home</CustomLink>
                            <CustomLink to={'/manage-inventory'}>Manage-Inventory</CustomLink>
                            {
                                user && <>
                                <CustomLink to={'/my-items'}>My Items</CustomLink>
                                <CustomLink to={'/add-items'}>Add Items</CustomLink>
                                </>
                                
                            }
                            
                            
                            <CustomLink to={'/contract'}>Contract</CustomLink>
                            <CustomLink to={'/blogs'}>Blogs</CustomLink>
                            
        
                        </Nav>
                        <Nav className='menu-items'>
                            {
                                user ? <CustomLink to={'/sign-out'}>Logout</CustomLink>
                                :
                                <CustomLink to={'/sign-in'}>Sign In</CustomLink>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;