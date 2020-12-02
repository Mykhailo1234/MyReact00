import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Dialogs() {
    return (
        <div className={classes.dialoge}>
            <div className={classes.users}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to = '/dialogs/1'>Misha</NavLink>
                    </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to= '/dialogs/2'>Inna</NavLink> 
                    </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to= '/dialogs/3'> Vadim</NavLink>
                    </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to= '/dialogs/4'>Sasha</NavLink> 
                    </div>
            </div>
            <div activeClassName={classes.massege}>
                <div className={classes.masseges}>Hi!</div>
                <div className={classes.masseges}>How are you?</div>
                <div className={classes.masseges}>Good!</div>
            </div>
        </div>
    );
}

export default Dialogs;
