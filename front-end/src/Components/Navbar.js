import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <nav>
             <button><Link to='/' id="application">Application Form</Link></button>
             <button><Link to='/display'>Applicants List</Link></button>
            </nav>
        </div>
    )
}

export default Navbar