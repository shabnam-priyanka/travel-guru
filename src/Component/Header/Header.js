import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../Logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#home"><img style={{height:'60px'}} src= {Logo} alt=""/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Form inline>
                        <FormControl type="text" placeholder="Search Details" className="mr-sm-2" />
                        <Button variant="success">Search</Button>

                </Form>


                <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'560px'}}>
                    <Nav className="mr-auto">
                        <Nav.Link style={{color:'white'}} href="#home">Home</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#home">Trip Ideas</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#home">Places to Visit</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#link">Contact Us</Nav.Link>
                        <Button variant="success">Log In</Button>

                    
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;