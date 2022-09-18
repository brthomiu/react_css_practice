import React from 'react'
import { GiPeach } from 'react-icons/gi'
import './mobileHeader.css'

const MobileHeader = () => {
  return (
    <nav className="mobileHeader">
        <ul className="mobileHeader__container">
            <li className="mobileHeader__container-item">
                <GiPeach className='header__icon'/>
                <button className="mobileHeader__btn">
                <a href="/" 
                    className="header__container-link" 
                    target="_blank" 
                    rel="noreferrer">
                    Butts
                </a>
                </button>

            </li>
        </ul>
    </nav>
  )
}

export default MobileHeader