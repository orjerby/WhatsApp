import React, { Component } from "react";
import { withRouter } from 'react-router';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';

class HeaderUserPage extends Component {

    goBack = () => { // בחזרה אל עמוד הבית
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {
        const {contact} = this.props;

        return (
            <div className="container-contact-chat">
                <div className="name-contact-chat">{contact.name}&nbsp;</div>
                <div className="img-contact-chat"><img src={contact.picture} alt="" /></div>
                <div onClick={this.goBack} className="back-contact-chat"><FaArrowRight size={20} /></div>
            </div>
        );
    }
}

export default withRouter(HeaderUserPage);