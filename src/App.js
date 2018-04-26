import React from 'react';
import AddClothes from "./containers/AddClothes";
import Home from "./containers/Home";
import {Route} from "react-router-dom";

const App = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/add" component={AddClothes}/>
    </div>
);

export default App;
