import React from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {//{process.env.PUBLIC_URL}

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Route render = {({ location }) => (
                <Switch location = { location }>
                    <Route exact path="#" component={App} />
                    <Route exact path="#/shop" component={Shop} />
                 </Switch>
            )} />
        </HashRouter>
    )
}

export default Routes;