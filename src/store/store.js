import data from "../mock/data.json";
import { createStore } from "redux";
let obj={
    list:data.list,
    condata:{},
    data:[]
}
function reducer(state=obj,action){
    switch(action.type){
        case "CHANGETITLE":
            state.condata = state.list[action.index].child;
            return state;

        case "FOODCOLLECT":
            state.data.push(action.item)
            console.log(state.data,"data...........")
            return state;
        default:
            return state;
    }
}

let store=createStore(reducer);
export {
    store
}