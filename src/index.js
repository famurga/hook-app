import React from 'react';
import ReactDOM from 'react-dom/client';
import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
import FormWithCustomHook from './components/useEfects/FormWithCustomHook';
import SimpleForm from './components/useEfects/SimpleForm';
import FocusScreen from './components/useRef/FocusScreen';
import RealExampleRef from './components/useRef/RealExampleRef';
import CounterApp from './components/useState/CounterApp';
import CounterWithCustom from './components/useState/CounterWithCustom';
import HookApp from './HookApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SimpleForm /> */}
    {/* <CounterApp /> */}
  {/* <CounterWithCustom/> */}
  {/* <FormWithCustomHook/> */}
  {/* <MultipleCustomHooks/> */}
  {/* <FocusScreen/> */}
  <RealExampleRef/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

