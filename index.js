import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Root extends React.Component {
    render() {
        return <App/>;
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Root />, mountNode);
