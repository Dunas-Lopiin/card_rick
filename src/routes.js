import React from "react";
import Board from "./components/board";
import Table from "./components/table";
import Reddit from "./components/reddit";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
    const MyTable = Table(Board);
    console.log(MyTable);
    return(
        <Router>
            <Routes>
                <Route element = { <Home></Home> } path="/" exact />
                <Route element = { Table(Board) } path="/card" />
                <Route element = { <Reddit></Reddit> } path="/reddit/*" />
            </Routes>
        </Router>
    )
}

export default MyRoutes;