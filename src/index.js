import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appp from "./Appp";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// import {Provider} from 'react-redux'
// import store from './store'


ReactDOM.render(
    <>
        {/*<Provider store={store}>*/}
            <Appp/>
        {/*</Provider>*/}

    </>,
    document.getElementById('root')
);
