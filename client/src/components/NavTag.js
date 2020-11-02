import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Nav, NavDropdown, NavbarBrand, Navbar } from 'react-bootstrap';
import logo from "../reachme_logo.png";
import 'font-awesome/css/font-awesome.min.css';

export default function NavTag() {
    const [loggedOut, setLoggedOut] = useState(false);

    const navStyle = {
        height: "70px",
        backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
        marginBottom:"40px"
    }

    const navLinkStyle = {
        color: "black",
        margin: "40px",
    }

    const logout = () => {
        localStorage.removeItem("whpf_user");
        setLoggedOut(true);
    };

    if (loggedOut) {
        return <Redirect to="/login" push={true} />
    }

    return (
        <div>
            <Navbar style={navStyle}>
                <NavbarBrand className="navbar-brand" activekey="/home">
                    <Nav.Link href="/home" ><img src={logo} alt="logo" /></Nav.Link>
                </NavbarBrand>
                <Nav className="ml-auto">
                    <Nav.Item className="text-center" style={navLinkStyle}>
                        <Nav.Link href="/addPost">
                            Add Post
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="UserName" id="nav-dropdown" style={navLinkStyle}>
                        <NavDropdown.Item eventKey="4.1"> <i className="fa fa-user fa-fw"></i> Profile</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2"><i className="fa fa-envelope fa-fw"></i>  Message</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.3" onClick={logout}><i className="fa fa-sign-out fa-fw"></i> Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>

        </div >
    )
}
