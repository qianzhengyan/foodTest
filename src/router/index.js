import React, { Component } from 'react'
import {BrowserRouter} from "react-router-dom"
import routes from "./routerConfig"
import RouterView from "./routerView"
export default class index extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={routes}></RouterView>
            </BrowserRouter>
        )
    }
}
