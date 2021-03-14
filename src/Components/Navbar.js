import React , {useState} from 'react'

import {Link} from 'react-router-dom';
import { Button } from './Button';

import './Navbar.css';




function Navbar() {

    const [click,setClick]=useState(false);

    const [button,setButton]= useState(true);


    const handleClick=()=> setClick(!click);

    const closeMobileMenu=() => setClick(false);

    const showButton =() => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);

        }
    };

    window.addEventListener('resize',showButton);



    return (
        <>
          
          <nav className="navbar">

              <div className="navbar-container">
                  <Link className='navbar-logo'>
                      Saving the Craving <i class="fas fa-cheese"></i>
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={click ? 'fas fa-times':'fas fa-bars'}/>




                  </div>

                  <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                      <li className='nav-item'>
                          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Home
                      </Link>
                      </li>

                      <li className='nav-item'>
                          <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                          Services
                      </Link>
                      </li>

                      <li className='nav-item'>
                          <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                          Sign Up
                      </Link>
                      </li>
                     
                  </ul>
                  {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
              </div>





          </nav>
   
        </>
    )
}

export default Navbar
