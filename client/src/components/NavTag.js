import React from 'react';
import { Nav, NavDropdown, NavbarBrand, Navbar } from 'react-bootstrap';
import logo from "../reachme_logo.png";
import 'font-awesome/css/font-awesome.min.css';

export default function NavTag() {

    const navStyle = {
        height: "70px",
        backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
    }

    const navLinkStyle = {
        color: "black",
        margin: "40px",
    }

    return (
        <div>
            <Navbar style={navStyle}>
                <NavbarBrand className="navbar-brand" activekey="/home">
                    <Nav.Link href="/home" ><img src={logo} alt="logo" /></Nav.Link>
                </NavbarBrand>
                <Nav className="ml-auto">
                    <Nav.Item className="text-center" style={navLinkStyle}>
                        <Nav.Link href="/AddPost">
                            Add Post
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="UserName" id="nav-dropdown" style={navLinkStyle}>
                        <NavDropdown.Item eventKey="4.1"> <i className="fa fa-user fa-fw"></i> Profile</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2"><i className="fa fa-envelope fa-fw"></i>  Message</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.3"><i className="fa fa-sign-out fa-fw"></i> Logout</NavDropdown.Item>
                    </NavDropdown>

                    {/* <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                            </li>
                            <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                            </li>
                            <li className="divider"></li>
                            <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                            </li>
                        </ul>
                    </li> */}

                </Nav>
            </Navbar>

        </div >
    )
}
