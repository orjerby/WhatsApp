import React, { Component } from "react";
import { withRouter } from 'react-router';

class UserDetails extends Component {

    enterChat = () => {
        const {contact} = this.props;

        this.props.history.push({
            pathname: '/userpage/' + contact.id
        });
    }

    renderLastMsg = () => {
        const {contact} = this.props;

        let output = [];
        let lastMsg;
        let lastMsgDate;
        contact.msgs.forEach(msg => {
            lastMsg = msg.content;
            lastMsgDate = msg.date;
        });
        if (lastMsgDate !== undefined) {
            output.push(<div className="time-contacts" key={0}>{(lastMsgDate.getHours() > 9 ? lastMsgDate.getHours() : '0' + lastMsgDate.getHours()) + ':' + (lastMsgDate.getMinutes() > 9 ? lastMsgDate.getMinutes() : '0' + lastMsgDate.getMinutes())}</div>);
        }
        output.push(<div className="img-contacts" key={1}><img src={contact.picture} alt="" /></div>);
        output.push(<div className="name-msg-contacts" key={2}>{contact.name}<br />{lastMsg}</div>);
        return output;
    }

    render() {

        return (
            <div onClick={this.enterChat}>
                <div className="container-contacts">
                    {this.renderLastMsg()}
                </div>
                <hr />
            </div>
        );
    }
}

export default withRouter(UserDetails);