import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap'

function Heading() {
  return (
    <Navbar color='dark' dark>
        <Container className='d-flex'>
            <NavbarBrand href='/'>Employee List</NavbarBrand>
            <Nav className='ms-auto'>
                <NavItem>
                    <Link className='btn btn-primary' to='/add'>Add New Employee</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Heading