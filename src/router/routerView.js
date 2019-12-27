import React from "react";
import { Redirect, Route, Switch } from "react-router-dom"
function routerView(props) {
    let { routes } = props;
    let routerArr = routes && routes.filter((item) => !item.to);
    let redirectArr = routes && routes.filter((item) => item.to);
   return <Switch>
        {
            routerArr && routerArr.map((item, index) => {
                return <Route path={item.path} key={index} render={(props) => { 
                    return <item.component {...props} children={item.children} /> }}>
                </Route>
            })
        }

        {
            redirectArr && redirectArr.map((item, index) => {
                return <Redirect path={item.path} key={index} to={item.to} ></Redirect>
            })
        } 
    </Switch>

}

export default routerView;