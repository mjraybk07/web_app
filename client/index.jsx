import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css'

const domElement = document.createElement('div');
domElement.setAttribute("id", "app");
document.body.appendChild(domElement);

ReactDOM.render(<App />, document.getElementById('app'));