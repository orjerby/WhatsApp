import React, { Component } from "react";

class MyBubble extends Component {

    renderMsg = () => {
        const { msg } = this.props;

        let output = [];
        output.push(<div className="text-message-sent" key={0}>{msg.content}</div>);
        output.push(<div className="time-message-sent" key={1}>{(msg.date.getHours() > 9 ? msg.date.getHours() : '0' + msg.date.getHours()) + ':' + (msg.date.getMinutes() > 9 ? msg.date.getMinutes() : '0' + msg.date.getMinutes())}</div>);
        return output;
    }

    render() {

        return (
            <div className="container-message-sent">
                {this.renderMsg()}
            </div>
        );
    }
}

export default MyBubble;