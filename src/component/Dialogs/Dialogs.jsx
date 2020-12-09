import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Messages'


function Dialogs(props) {
    debugger
    let dialogsElements = props.dialogs.map( dialogs => <DialogsItem name= { dialogs.name } id={ dialogs.id } />);
    let messagesElements = props.messages.map( messages => <Message message = { messages.message } />);

    return (
        <div className ={ classes.dialogs }>
            <div className = { classes.users }>
                { dialogsElements }
            </div>
            < div className = { classes.messages } >
                { messagesElements }
            </div >
        </div>
    );
}

export default Dialogs
