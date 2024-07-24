import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '.././assets/logo.png'; 
import { Link } from 'react-router-dom';

function NavScroll() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#28a745'}} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            height="30"
            className="d-inline-block align-top"
            alt="SMK AL FALAH Logo"
          />
          SMK AL FALAH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Beranda</Nav.Link>
            <Nav.Link as={Link} to="/Pengumuman">Pengumuman Dan Berita</Nav.Link>
            <NavDropdown title="Tentang Smk Al Falah" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Profil">Profil</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Fasilitas">Fasilitas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Guru">Tenaga Pendidik</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScroll;