import React from 'react';
import Menu from "./pages/Menu";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import SelectedCategory from "./pages/SelectedCategory";
import Header from "./components/Header";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={Menu} exact/>
                <Route path="/cart" component={Cart}/>
                <Route path="/category/:id" component={SelectedCategory}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;