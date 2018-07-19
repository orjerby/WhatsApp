import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { sendMsg } from '../actions/index';
import _ from "lodash";
import HeaderPage from '../components/HeaderPage';
import MainContent from '../components/MainContent';

class MainPage extends Component {

    render() {
        return (
            <div>
                <HeaderPage />
                <MainContent contacts={this.props.contacts} />
            </div>
        );
    }
}

function mapStateToProps({ contacts }) {
    return {
        contacts
    };
}

export default connect(mapStateToProps)(MainPage);