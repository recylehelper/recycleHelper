import ReactDOM from 'react-dom';
import React from 'react';
// import App from './components/app.jsx';
import Store from './redux/store.js';
import { Provider } from 'react-redux';
import AppContainer from './redux/containers/appContainer.js';

ReactDOM.render(<Provider store = {Store}><AppContainer /></Provider>, document.getElementById('app'));