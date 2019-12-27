import Mock from "mockjs"
import data from "./data.json"
Mock.mock('/getlist','get',function(){
    return data;
})