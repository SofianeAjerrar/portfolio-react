import React from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../sass/style.sass';

let Navbar = () => {
    return (
        <nav className='navbar-brand'>
            <ul className='nav flex-column container'>
                <li className='nav-item d-flex justify-content-center'>
                    <a href="#" className='nav-link active hoverNav greenColor'>
                        <i className="fas fa-meh-blank fa-2x hoverIcon"></i>
                    </a>
                </li>
                <li className='nav-item d-flex justify-content-center'>
                    <a href="#" className='nav-link active hoverNav greenColor'>
                        <i className="fab fa-html5 fa-2x hoverIcon"></i>
                    </a>
                </li>
                <li className='nav-item d-flex justify-content-center'>
                    <a href="#" className='nav-link active hoverNav greenColor'>
                        <i className="fas fa-laptop-code fa-2x hoverIcon"></i>
                    </a>
                </li>
                <li className='nav-item d-flex justify-content-center'>
                    <a href="#" className='nav-link active hoverNav greenColor'>
                        <i className="fas fa-mobile fa-2x hoverIcon"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;