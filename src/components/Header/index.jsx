import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HeaderOptions, UserDropdown } from '../index'
import { AiOutlineUser } from 'react-icons/ai'

import './Header.scss'

const Header = () => {

  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (document.body.getBoundingClientRect().top < 0) {
        setScrollPosition(document.body.getBoundingClientRect().top);
        setShowHeader(
          document.body.getBoundingClientRect().top > scrollPosition
        );
      } else {
        setShowHeader(null);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [scrollPosition]);

  return (
    <header className={`header ${showHeader === null ? '' :showHeader ? 'show' : 'hide'}`}>
      <div className='header__content d-flex align-items-center justify-content-center position-relative'>
        <div className="container">
          <nav className='nav d-flex align-items-center justify-content-between position-relative'>
            <div className="nav__logo">
              <Link to='/'>mz.</Link>
            </div>
            <HeaderOptions />
            <div className="right_nav d-flex align-items-center justify-content-end">
              <Link to='/become-host' className='b__host__link'>Become a Host</Link>
              <div className="nav__user__box">
                <button 
                  onClick={() => setOpenUserMenu(prev => !prev)}
                  className='user__menu__btn d-flex position-relative align-items-center justify-content-end'
                >
                  <div className={`toggle__btn ${openUserMenu ? 'close' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className='user__image'>
                    <AiOutlineUser className='user__default__image' />
                  </span>
                  {openUserMenu && <UserDropdown />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header