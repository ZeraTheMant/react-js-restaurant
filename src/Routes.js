import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {//{process.env.PUBLIC_URL}
    alert(process.env.PUBLIC_URL)
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path={process.env.PUBLIC_URL + "/shop"} component={Shop} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;