import React from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {//{process.env.PUBLIC_URL}

    return (
        <HashRoute>
            <Route exact path="/" component={App} />
            <Route path="/shop" component={Shop} />
        </HashRouter>
    )
}

export default Routes;