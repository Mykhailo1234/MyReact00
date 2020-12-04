import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogsItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} > {props.name}</NavLink>
        </div>
    );
}

function Message(props) {
    return (
        <div className={classes.messages} > {props.message}</div>
    );
}

function Dialogs(props) {

    let dialogsData = [
        { id: 1, name: "Misha" },
        { id: 2, name: "Inna" },
        { id: 3, name: "Vadim" },
        { id: 4, name: "Sasha" }
    ]

    let messagesData = [
        { id: 1, name: "Hi!" },
        { id: 2, name: "How are you?" },
        { id: 3, name: "Good!" },
    ]

return (
    <div className={classes.dialogs}>
        <div className={classes.users}>
            <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
        </div>

        <div className={classes.messages}>
            <Message message = {messagesData[0].name} id={messagesData[0].id} />
            <Message message = {messagesData[1].name} id={messagesData[1].id} />
            <Message message = {messagesData[2].name} id={messagesData[2].id} />
        </div>
    </div>
);
}

export default Dialogs;
