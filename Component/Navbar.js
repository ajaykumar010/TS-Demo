import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';


export const  NavbarComponent = () => {
  return (
    <>
    <Navbar expand="lg" bg='primary'>
        <Container fluid>
            <Image src="/logo.jpg" alt='my-logo' height={100} width={200}  />
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="about-us">About Us</Nav.Link>
                      <Nav.Link href="contact-us">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)}