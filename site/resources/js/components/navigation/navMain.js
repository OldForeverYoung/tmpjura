import React, {Component} from 'react';
import {Link, BrowserRouter, NavLink} from "react-router-dom";

export default class NavMain extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (

            <div className="">
                <div className="menu-container">
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="nav-item-child nav-item-hover"> Home </NavLink>
                            <NavLink to="/about/page/1" activeClassName="nav-item-child nav-item-hover"> About </NavLink>
                            <NavLink to="/posts" activeClassName="nav-item-child nav-item-hover"> Posts </NavLink>
                            <NavLink to="/entities" activeClassName="nav-item-child nav-item-hover"> Entities </NavLink>
                            <NavLink to="/contacts/page/1" activeClassName="nav-item-child nav-item-hover"> Contacts </NavLink>
                            <NavLink to="/logout" activeClassName="nav-item-child nav-item-hover"> Logout </NavLink>
                            <NavLink to="/register_user" activeClassName="nav-item-child nav-item-hover"> Register </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
