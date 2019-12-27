import React, { Component } from 'react'
import Header from "../../components/Header"
import { connect } from 'react-redux';
class FoodCollect extends Component {
    state={
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
        ],
        ind:0,
        curdata:[]
    }
    changeInd(index,e){
        this.setState({ind:index})//切换类名
        let com = e.target.innerHTML;
        let curdata = this.props.data.filter(item=>item.text==com);//筛选点击数据
        this.setState({curdata})

    }
    componentDidMount(){
        let curdata = this.props.data.filter(item=>item.text=="常吃");
        this.setState({curdata})
    }
    render() {
        let {list,ind,curdata} = this.state;
        return (
            <div className="foodcollect">
                <Header back={true} title="食物收藏"></Header>
                <div className="nav">
                    {
                        list && list.map((item,index)=>{
                        return <span className={index==ind?"active":""} onClick={this.changeInd.bind(this,index)} key={index}>{item.title}</span>
                        })
                    }
                </div>

                <div className="list">
                    {
                        curdata && curdata.map((item,index)=>{
                        return <p key={index}>{item.food}</p>
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
            data:state.data
        }
    },
    (dispatch)=>{
        return {
        }
    }
)(FoodCollect)
