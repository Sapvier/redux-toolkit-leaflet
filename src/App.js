import React from 'react';
import Menu from "./pages/Menu";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SelectedCategory from "./pages/SelectedCategory";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Menu} exact/>
                <Route path="/category/:id" component={SelectedCategory}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;