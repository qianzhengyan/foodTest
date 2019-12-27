import React, { Component } from 'react'
import RouterView from "../../router/routerView"
import {NavLink} from "react-router-dom"
export default class Index extends Component {
    render() {
        let {children} = this.props;
        return (
            <div className="index">
                <RouterView routes={children}></RouterView>

                <footer>
                    <NavLink to="/index/home">首页</NavLink>
                    <NavLink to="/index/rank">排行榜</NavLink>
                    <NavLink to="/index/my">我的</NavLink>
                </footer>
            </div>
        )
    }
}
