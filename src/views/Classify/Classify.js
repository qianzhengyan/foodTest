import React, { Component } from 'react'

import Header from "../../components/Header"
import { connect } from 'react-redux';
 class Classify extends Component {
    state={
        isshow:false,
        list:[
            {
                "title":"常吃",
                "id":0
            },
            {
                "title":"偶尔",
                "id":1
            },
            {
                "title":"不吃",
                "id":2
            }
        ]
    }
    changeFlag(item){//点击五角星
        this.setState({isshow:!this.state.isshow})
        item.flag = !item.flag;
    }
    changeInd(item,index){//点击常吃 不吃 偶尔
        item.flag = !item.flag;
        let con = this.state.list[index].title;
        item.text = con;
        // console.log(item,"000")
        this.props.collect(item)
        this.setState({isshow:false})
    }
    render() {
        let arr = this.props.location.state.child;
        let {isshow,list} = this.state;
        return (
            <div className="classify">
                <Header title="分类查询" back={true} opt="..."></Header>
                <ul>
                    {
                        arr && arr.map((item,index)=>{
                        return (
                            <li key={index}>
                                <span>{item.food}</span>
                                    <div>
                                        {
                                            item.flag && isshow?
                                            <div className="box">
                                                {
                                                    list && list.map((i,ind)=>{
                                                        return <button onClick={this.changeInd.bind(this,item,ind)} key={ind}>{i.title}</button>
                                                    })
                                                }
                                        </div>:""
                                        }
                                    <span onClick={()=>{this.changeFlag(item)}}>☆{item.text}</span>
                                </div>
                            </li>
                        )
                        }) 
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    (state)=>{
        return {

        }
    },
    (dispatch)=>{
        return {
            collect(item){
                dispatch({type:"FOODCOLLECT",item})
            }
        }
    }
)(Classify)
