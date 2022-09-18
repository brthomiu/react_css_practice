import React from 'react'
import './header.css'
import { GiPeach } from 'react-icons/gi'

const Header = () => {
  return (

    <nav className="header">

        <ul className="header__container">
            
            <div className="header__container-section">
                <GiPeach className='header__icon'/>
                <li className="header__container-item">
                    <button className="header__container-btn">
                        <a href="/" 
                            className="header__container-link" 
                            target="_blank" 
                            rel="noreferrer">
                            Home
                        </a>
                    </button>
                </li>
            </div>

            <div className="header__container-section">
                <GiPeach className='header__icon'/>
                <li className="header__container-item">
                    <button className="header__container-btn">
                        <a href="/Art" 
                            className="header__container-link" 
                            target="_blank" 
                            rel="noreferrer">
                            Art
                        </a>
                    </button>
                </li>
            </div>    

            <div className="header__container-section">
                <GiPeach className='header__icon'/>
                <li className="header__container-item">
                    <button className="header__container-btn">
                        <a href="https://google.com" 
                            className="header__container-link" 
                            target="_blank" 
                            rel="noreferrer">
                            Butts
                        </a>
                    </button>
                </li>
            </div>

            <div className="header__container-section">
                <GiPeach className='header__icon'/>
                <li className="header__container-item">
                    <button className="header__container-btn">
                        <a href="https://google.com" 
                            className="header__container-link" 
                            target="_blank" 
                            rel="noreferrer">
                            Butts
                        </a>
                    </button>
                </li>
            </div>

        </ul>

    </nav>


  )
}

export default Header