import React from "react";
import {NavLink, useRouteMatch} from "react-router-dom";
import "./Tabs.css";

const Tabs:React.FC = () => {
    let { url } = useRouteMatch();
    return (<ul className="tabs">
                <li className="tab"><NavLink to={`${url}/signin`} activeClassName="selected">Sign in</NavLink></li>
                <li className="tab"><NavLink to={`${url}/signup`} activeClassName="selected">Register</NavLink></li>
            </ul>)
}
export default Tabs;