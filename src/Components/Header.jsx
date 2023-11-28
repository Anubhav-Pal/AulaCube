import React from "react";

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className=" container navbar-brand" href="/">{props.title}</a>
                </div>
            </nav>
        </div>
    );

}

export default Header;