import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Header from "../../../components/Header"
export default class My extends Component {
    render() {
        return (
            <div className="my">
                <Header back={true} title="我的"></Header>
                <Link to="/foodcollect">食物收藏></Link>
            </div>
        )
    }
}
