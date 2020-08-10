import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        Vidly
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink to='/movies' className='nav-item nav-link'>
            Movies
          </NavLink>
          <NavLink to='/customers' className='nav-item nav-link'>
            Customer
          </NavLink>
          <NavLink to='/rentals' className='nav-item nav-link'>
            Rentals
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
