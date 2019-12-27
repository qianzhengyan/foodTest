import React, { Component } from 'react'
import Header from "../../../components/Header"
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux'
class Home extends Component {
    render() {
        let {list}=this.props;
        console.log(this.props.list,"statelist")
        return (
            <div className="home">
                <Header></Header>

                <div className="menu">
                {
                    list && list.map((item,index)=>{
                        return (
                        <NavLink to={{pathname:"/classify",state:item}} key={index} >{item.title}</NavLink>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return {
            list:state.list
        }
    },
    (dispatch)=>{
        return {
            changeTitle(obj){
                dispatch(obj)
            }
        }
    }
)(Home)
