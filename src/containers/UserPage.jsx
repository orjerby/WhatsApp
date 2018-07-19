import React, { Component } from "react";
import HeaderUserPage from '../components/HeaderUserPage';
import UserChat from '../components/UserChat';
import Input from '../components/Input';
import { connect } from 'react-redux';

class UserPage extends Component {

    render() {
        const { id } = this.props.match.params;
        const { contacts } = this.props;

        return (
            <center>
                <HeaderUserPage contact={contacts[id]} />
                <UserChat contact={contacts[id]} />
                <Input contact={contacts[id]} />
            </center>
        );
    }
}

function mapStateToProps({ contacts }) {
    return {
        contacts
    };
}

export default connect(mapStateToProps)(UserPage);