import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
                <div className={classes.settings}>
                    <NavLink to='/setting' activeClassName={classes.active}>Settings</NavLink>
                </div>
                <div className={classes.settings}>
                    <NavLink to='/setting' activeClassName={classes.active}><h3>Friends</h3></NavLink>
                </div>
            </div>
        </nav>

    );
}
export default Navbar;