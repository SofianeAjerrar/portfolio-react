import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../sass/style.sass';

let Header = () => {
    return (
        <header>
            <div>
                <img className='img-fluid' src="./niko_img.jpg" alt="un_gars" />
            </div>
        </header>
    )
}

export default Header