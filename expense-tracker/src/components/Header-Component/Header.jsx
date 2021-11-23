import React from "react";
import { Link } from "react-router-dom";

/**
 * Header Component to display the App title
 * @returns  {JSX}
 */
const Header = () => {
    return (
        <>
            <div className='header'>
                <h1>Expence-Tracker</h1>
                <button className='Printer-btn'>
                    <Link className='link-secondary' to='/print'>
                        <i className='fas fa-file-pdf'> Print</i>
                    </Link>
                </button>
            </div>
        </>
    );
};

export default Header;
