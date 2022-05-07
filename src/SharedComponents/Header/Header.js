import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../Hooks/CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='nav-logo' href="#">Tech Inventory Solutions</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto menu-items">

                            <CustomLink to={'/'}>Home</CustomLink>
                            <CustomLink to={'/manage-inventory'}>Manage-Inventory</CustomLink>
                            <CustomLink to={'/blogs'}>Blogs</CustomLink>
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        
                        </Nav>
                        <Nav className='menu-items'>
                            <CustomLink to={'/sign-in'}>Sign In</CustomLink>

                            {/* <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;