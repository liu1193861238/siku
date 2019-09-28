import React from "react"
import {layoutRoutes} from "@router"
import {NavLink} from "react-router-dom"
import {TabBarWrapper} from "./styled"
export default class TabBar extends React.Component{
    render() {
        return(
            <TabBarWrapper>
            <ul>
            {
                layoutRoutes.map((item)=>(
                    <li key={item.key}>
                        <NavLink
                        to={item.path}>
                        <i className="iconfont">{item.icon}</i>
                        <span>{item.name}</span>
                        </NavLink>
                    </li>
                ))
            }
            </ul>
            </TabBarWrapper>
        )
    }
}
