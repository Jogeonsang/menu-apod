import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.scss';

import { Provider } from 'react-redux'
import createNewStore from './redux/createNewStore';

//스토어 생성
const store = createNewStore()



ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();
