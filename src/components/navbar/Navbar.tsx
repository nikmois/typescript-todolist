import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: FC = () => {
    return (
        <>
            <div className="navbar">
                <div className="links">
                    <Link className="link" to="/">
                        HOME
                    </Link>
                    <Link className="link" to="/todo">
                        ADD NEW TODO
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
