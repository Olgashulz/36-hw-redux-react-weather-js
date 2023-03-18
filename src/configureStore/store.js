import {applyMiddleware, legacy_createStore as createStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import {weatherReducer} from "../reducer/weatherReducer";


const initialState = {
    weatherInfo: undefined,
    message: "Enter city name",
};

export const store = createStore(weatherReducer, initialState, applyMiddleware(thunk, logger));
