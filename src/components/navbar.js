import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/navbar.css'

const NavBar = () => {
    const [backgroundchange, setBackGroundChange] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setBackGroundChange(true);
        }
        else {
            setBackGroundChange(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toogler" />
                <Navbar.Collapse id="responsive-navbar-nav" className={backgroundchange ? "responsive-navbar backcolorchange" : "responsive-navbar"}>
                    <Nav>
                        <Nav.Link as={Link} className="nav-link" to="/shopingbasket">
                            <div className="circle-icon">
                                <i className="fa fa-shopping-cart ml-1" aria-hidden="true"></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link as={Link} className="nav-link" to="/favorites">
                            <div className="circle-icon">
                                <i className="fa fa-star-o ml-1" aria-hidden="true"></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link as={Link} className="nav-link" to="/home">
                            <div className="circle-icon">
                                <i className="fa fa-home ml-1" aria-hidden="true"></i>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">Beers Store</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default NavBar;