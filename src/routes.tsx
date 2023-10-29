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
import Client from "./pages/Client";
import Finance from "./pages/finance";
import Stock from "./pages/Stock";
import Report from "./pages/Report";
import Settings from "./pages/Settings";

function RouterList() {
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/client" element={<Client/>} />
            <Route path="/finance" element={<Finance/>} />
            <Route path="/stock" element={<Stock/>} />
            <Route path="/report" element={<Report/>} />
            <Route path="/settings" element={<Settings/>} />
            {/* <Route path="/sair" element={<Client/>} /> */}
        </Routes>
        </Router>
    )
}

export default RouterList;