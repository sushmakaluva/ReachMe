import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Nav, NavDropdown, NavbarBrand, Navbar } from 'react-bootstrap';
import logo from "../reachme_logo.png";
import 'font-awesome/css/font-awesome.min.css';
import session from "../utils/session";
import "../navbar.css";

export default function NavTag() {
    const [loggedOut, setLoggedOut] = useState(false);

    const navStyle = {
        height: "70px",
        backgroundColor:"white",
        marginBottom: "40px",
    }

    const navLinkStyle = {
        color: "black",
        margin: "40px",
        fontWeight:"bold"
    }

    const logout = () => {
        session.delete();
        setLoggedOut(true);
    };

    if (loggedOut) {
        return <Redirect to="/login" push={true} />
    }

    const getUserName = function () {
        return session.get().first_name+" "+session.get().last_name;
    }

    return (
        <div>
            <Navbar style={navStyle} className="fixed-top">
                <NavbarBrand className="navbar-brand" activekey="/home">
                    <Nav.Link href="/home" ><img src={logo} alt="logo" /></Nav.Link>
                </NavbarBrand>
                <Nav className="ml-auto">
                    <Nav.Item className="text-center" >
                        <Nav.Link href="/addPost" style={navLinkStyle}>
                            Add Post
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title={getUserName()} id="nav-dropdown" style={navLinkStyle}>
                        <NavDropdown.Item href={`/profile/${session.get()._id}`} eventKey="4.1"> <i className="fa fa-user fa-fw"></i> Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/followers" eventKey="4.1"> <i className="fa fa-users fa-fw"></i> Followers</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2"><i className="fa fa-envelope fa-fw"></i>  Message</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.3" onClick={logout}><i className="fa fa-sign-out fa-fw"></i> Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>

        </div >
    )
}
