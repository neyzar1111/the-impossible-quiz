import React from "react";
import {Switch, Route} from "react-router-dom";
import Constant from "./Constant";


const Router =(props:any)=>{
    return(
        <Switch>
            <Route exact={true} path={Constant.url.home} component="{}"/>
            <Route exact={true} path={Constant.url.home} component="{}"/>
        </Switch>
    )
}
export default Router;