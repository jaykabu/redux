import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux'

const reducer = configureStore({

})

const store = configureStore({
    reducer,
})

export default store;