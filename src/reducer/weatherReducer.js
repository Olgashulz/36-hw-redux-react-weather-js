import {PENDING_INFO, SET_INFO, SET_MESSAGE} from "../actions/weatherActions";

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case SET_INFO: {
            return {...state, weatherInfo: action.payload}
        }
        case SET_MESSAGE: {
            return {...state, message: action.payload}
        }
        case PENDING_INFO: {
            return {...state, weatherInfo: "Loading..."}
        }
        default:
            return state;
    }
}
