import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + '/react-js-restaurant'}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/shop" component={Shop} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;