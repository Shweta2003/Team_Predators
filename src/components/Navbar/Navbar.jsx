import React from 'react'
import classes from './Navbar.module.css'
import logoImg from '../../assets/logoImg.png'
import { NavLink } from 'react-router-dom'
import details from './NavDetails'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.logoDiv}>
                <img src={logoImg} alt='Logo' />
            </div>
            <ul>
                {details.map((current) =>
                    <li>
                        <NavLink to={current.route} className={({ isActive }) =>
                            isActive ? classes.active : ""
                        }>
                            {current.name}
                        </NavLink>
                    </li>
                )}
                <button className={classes.contactBtn}>
                    <NavLink to='/contact'>Contact</NavLink>
                </button>
            </ul>
        </nav>
    )
}

export default Navbar