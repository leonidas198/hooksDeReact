import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FormWithCustomHokk } from './02-useEffect/FormWithCustomHook';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer.js';
//import { TodoApp } from './08-useReducer/TodoApp.jsx';
import { MainApp } from './09-useContex/MainApp.jsx';

import './index.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */} 
      <MainApp/>
    {/*</React.StrictMode> */}
  </BrowserRouter>
  
)
