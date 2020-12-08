import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Messages'


function Dialogs(props) {
    let dialogsData = [
        { id: 1, name: "Misha" },
        { id: 2, name: "Inna" },
        { id: 3, name: "Vadim" },
        { id: 4, name: "Sasha" }
    ];

    let dialogsElements =
        dialogsData.map(el => <DialogsItem name={el.name} id={el.id} />);

    let messagesElements =
        props.messagesData.map(m => <Message message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {dialogsElements}
            </div>
            < div className={classes.messages} >
                {messagesElements}
            </div >
        </div>
    );
}

export default Dialogs;
