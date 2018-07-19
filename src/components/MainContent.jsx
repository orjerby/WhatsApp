import React, { Component } from "react";
import UserDetails from '../components/UserDetails';

class MainContent extends Component {

    renderContacts = () => {
        return this.props.contacts.map((contact, index) => {
            return <UserDetails contact={contact} key={index} />
        });
    }

    render() {
        return (
            <div className="backgroundMain">
                {this.renderContacts()}
            </div>
        );
    }
}

export default MainContent;