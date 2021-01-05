import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
, document.getElementById('root'));

// Hot Module Replacement, remove this snippet to remove HMR... as if😂
if(import.meta.hot) {
    import.meta.hot.accept();
}