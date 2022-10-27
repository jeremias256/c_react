import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirtsApp } from './FirtsApp';

function App(){

    return (<h1>hola mundo</h1>);
}

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirtsApp />
    </React.StrictMode>
)
