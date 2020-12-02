import React from 'react';
import classes from './Header.module.css';

function Header () {
    return (
        <header className= { classes.header }>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/FC_Dynamo_Kyiv_logo.svg/722px-FC_Dynamo_Kyiv_logo.svg.png" />
        </header>
    );
} 
export default Header;