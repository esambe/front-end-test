import React, {useState} from 'react';
import './../assets/css/appBar.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import AppModal from '../components/AppModal';

const NavMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const [modal, setModal] = useState(false);


    const toggle = () => setIsOpen(!isOpen);
    const triggerModal = () => setModal(!modal);

    return (
        <>
           <Navbar expand="md" id="app-bar" className="custom-nav">
                <div className="container">
                    <NavbarBrand href="/">BigCode</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar></Nav>
                    <Nav navbar>
                    <NavLink href="/login">Login</NavLink>
                    <NavLink href="/register">Register</NavLink>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            User
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href="/dashboard" className="text-dark">My Account</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/dashboard" className="text-dark">Edit Profile</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="/login" className="text-danger">Logout</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </>
    );
}

export default NavMenu;
