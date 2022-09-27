import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ColorPage from './pages/ColorPage';
import ButtonPage from "./pages/ButtonPage";
import ContentPage from "./pages/ContentPage";
import Router from "./components/Router";



function App() {
    return (
        <div className="App">
            <h1>Test</h1>

            <HashRouter>
                <h3>
                <Router></Router>
            </h3>
                <Routes>
                    <Route path ={"/HomePage"} element={<HomePage/>}/>
                    <Route path ={"/ColorPage"}element={<ColorPage/>}/>
                    <Route path ={"/ContentPage"}element={<ContentPage/>}/>
                    <Route path ={"/ButtonPage"}element={<ButtonPage/>}/>

                </Routes>


            </HashRouter>

        </div>
    );
}

export default App;
