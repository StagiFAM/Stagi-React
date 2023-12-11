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
            <Route path="/settings" element={<Settings/>} />
        </Routes>
        </Router>
    )
}

export default RouterList;