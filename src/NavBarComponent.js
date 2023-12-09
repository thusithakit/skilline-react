import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './scss/Nav.scss';


function NavBarComponent() {
  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
    <Navbar fixed="top" expand="lg" className="transparent" style={{ transition: '0.5s ease',backgroundColor: navBackground ? 'white' : 'transparent',padding: navBackground ? 20 : 70}}>
      <Container>
        <Navbar.Brand href="#home">
        <div className="logo">
                <h1>Skilline</h1>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">Careers</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <div>
            <Nav.Link href="#">
            <button type="button" class="btn btn-border btn-light">Login</button>
            </Nav.Link>
            <Nav.Link href="#">
                <button type="button" class="btn btn-border btn-orange">Sign Up</button>
                </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent;
