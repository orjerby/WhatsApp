import React, { Component } from "react";
import MyBubble from './MyBubble';
import ContactBubble from './ContactBubble';

class UserChat extends Component {

    renderMsgs = () => {
        let myIndex = 0;
        let contactIndex = 0;
        return this.props.contact.msgs.map(msg => {
            if (msg.myMsg) { // בודק רק את ההודעות שלי
                return <MyBubble msg={msg} key={myIndex++} />;
            } else { // בודק רק את ההודעות של האיש קשר
                return <ContactBubble msg={msg} key={--contactIndex} />;
            }
        });
    }

    render() {

        return (
            <div>
                {this.renderMsgs()}
            </div>
        );
    }
}

export default UserChat;