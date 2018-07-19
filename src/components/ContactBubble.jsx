import React, { Component } from "react";

class ContactBubble extends Component {

    renderMsg = () => {
        const { msg } = this.props;

        let output = [];
        if (msg.date !== undefined) {
            output.push(<div className="text-contact-message-sent" key={0}>{msg.content}</div>);
            output.push(<div className="time-contact-message-sent" key={1}>{(msg.date.getHours() > 9 ? msg.date.getHours() : '0' + msg.date.getHours()) + ':' + (msg.date.getMinutes() > 9 ? msg.date.getMinutes() : '0' + msg.date.getMinutes())}</div>);
        }
        return output;
    }

    render() {

        
        return (
            <div className="container-contact-message-sent">
                {this.renderMsg()}
            </div>
        );
    }
}

export default ContactBubble;