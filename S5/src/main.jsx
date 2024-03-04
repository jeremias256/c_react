import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirtsApp } from './FirtsApp';
import { CounterApp } from './CounterApp';

import './styles.css';
// function App(){

//     return (<h1>hola mundo</h1>);
// }

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirtsApp title={'soledad'} numero={123}/> */}
        <CounterApp value={322} />
    </React.StrictMode>
)
