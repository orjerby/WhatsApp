import React, { Component } from "react";

class HeaderPage extends Component {

    render() {
        return (
            <nav>
                <div className="headerPageTitle">
                    WhatsApp
                </div>
                <ul className="menuList">
                    <li><a>צ'אטים</a></li>
                    <li><a>סטטוס</a></li>
                    <li><a>שיחות</a></li>
                </ul>
            </nav>
        );
    }
}

export default HeaderPage;