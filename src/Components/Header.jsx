import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;
