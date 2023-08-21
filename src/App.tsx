import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss"
import {MainAsync} from "./pages/MainPage/Main.async";
import {AboutAsync} from "./pages/AboutPage/About.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {ClassNames} from "./helpers/ClassNames";



const App = () => {
    const {theme,toggleTheme} = useTheme();
    const bool = true;
    return (
        <div className={ClassNames("app",{},[])}>
            <button onClick={toggleTheme}>Togle</button>
            <h1>{theme}</h1>
            <br/>
            <Link to="/">Main </Link>
            <Link to="/about">about </Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path="/" element={<MainAsync/>} />
                    <Route path="/about" element={<AboutAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;