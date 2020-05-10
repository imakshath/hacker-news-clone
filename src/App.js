import React from "react";
import "./App.scss";
import ListContainer from "./containers/ListContainer";
import ChartContainer from "./containers/ChartContainer";
import { Router } from "@reach/router";

function App() {
    return (
        <div className="App">
            <Router>
                <ListContainer path="/" />
            </Router>
            <ChartContainer />
        </div>
    );
}

export default App;
