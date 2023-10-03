import * as React from "react"
import * as ReactDOM from "react-dom"
import {
    BrowserRouter as
    Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/index"

function RouterList() {
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home/>} />
        </Routes>
        </Router>
    )
}

export default RouterList;