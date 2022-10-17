import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./common/theme";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>

    </HashRouter>
);

reportWebVitals();
