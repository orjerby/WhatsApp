import React, { Component } from "react";
import { connect } from 'react-redux';
import { sendMsg } from '../actions/index';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import axios from 'axios';
import $ from 'jquery';

class Input extends Component {

    constructor(props) {
        super(props);
        this.txt = "";
    }

    setTxt = (e) => {
        this.txt = e.target.value;
    }

    send = () => {
        const { id } = this.props.contact;

        if (this.txt !== "") {
            this.props.sendMsg(id, this.txt, new Date(), true); // שולח לאבא את ההודעה החדשה ואת התאריך בה היא נלקחה

            // איש קשר שולח הודעה
            setTimeout(() => {
                axios
                    .get("http://jsonplaceholder.typicode.com/todos")
                    .then((response) => {
                        this.props.sendMsg(id, response.data[Math.floor(Math.random() * 199)].title, new Date(), false); // שולח לאבא את ההודעה החדשה ואת התאריך בה היא נלקחה
                    })
                    .catch((error) => {
                    });
            }, 250);
        }
        this.txt = "";
        $("#input").val("");
    }

    render() {
        return (
            <div className="container-input">
                <div className="send-input" onClick={this.send}><FaArrowCircleLeft size={50} color='green' /></div>
                <div className="input-input"><input onChange={this.setTxt} className="input-msg" placeholder="Type a message" id="input"></input></div>
            </div>
        );
    }
}

export default connect(null, { sendMsg })(Input);