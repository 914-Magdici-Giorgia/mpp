import React from "react";
import ReactDOM from "react-dom";

import {
    RouterProvider,
} from "react-router-dom";
import "./index.scss";

import {router} from "./routes"

const App = () => (
    <RouterProvider router={router}/>

);

ReactDOM.render(<App/>,document.getElementById("app"));
