import React from 'react';
import { Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <div>
            <Nav>
                <div></div>
                <div className="NavBar__logo"><a href="/">THE LOGO</a></div>
                <div className="NavBar_navigation">
                    <ul>
                        <li><a href="/">Friends</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Direct Messages</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </div>
            </Nav>
        </div>
    )
}

export default NavBar;
