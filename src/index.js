import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import { Provider, connect } from "react-redux";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';

// const store = createStore(rootReducer)
const store = createStore(searchRobots)

ReactDOM.render(
<Provider store={store}>
 <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
