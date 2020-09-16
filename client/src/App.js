import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Styling
import "./App.css"

// Pages
import Home from "./components/pages/Home/home.pages"
import Chapter from "./components/pages/Comic/comic.pages"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/chapter" component={Chapter} />
                </div>
            </Router>
        );
    };
}

export default App;