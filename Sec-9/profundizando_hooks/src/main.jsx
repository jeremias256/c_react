import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { CounterApp } from './01-useState/CounterApp.jsx';
import { CounterWithCustomHook } from './02-custom_hook_counter/CounterWithCustomHook';
import { SimpleForm } from './03-useEffect/SimpleForm';
import { FormWithCustomHook } from './03-useEffect/FormWithCustomHook';//clase 123
import { MultipleCustomHooks } from './04-useFetch/MultipleCustomHooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FormWithCustomHook />
  // </React.StrictMode>,
)
