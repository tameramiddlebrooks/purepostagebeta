import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/Beta">beta testing</a></li>
                <li><a href="/Waitlist">join the waitlist</a></li>
                <li><a href="/Founder">founder</a></li>

            </ul>
        </nav>




    )
}
export default Navbar;