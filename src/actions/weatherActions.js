import {API_key, BASE_URL} from "../utils/constans";

export const SET_INFO = 'SET_INFO';
export const PENDING_INFO = 'PENDING_INFO';
export const ERROR_INFO = 'ERROR_INFO';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setInfo = (info) => (
    {
        type: SET_INFO,
        payload: info
    }
)

export const pendingInfo = () => (
    {
        type: PENDING_INFO
    }
)

export const errorInfo = () => (
    {
        type: ERROR_INFO
    }
)

export const setMassage = (message) => (
    {
        type: SET_MESSAGE,
        payload: message
    }
)

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch(pendingInfo());
        try {
            const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_key}&units=metric`);
            if (!response.ok) {
                throw new Error(response.status + "")
            }
            const data = await response.json();
            dispatch(setInfo({
                country: data.sys.country,
                city: data.name,
                pressure: data.main.pressure,
                temp: data.main.temp,
                sunset: data.sys.sunset
            }));
            dispatch(setMassage(""));
        } catch (e) {
            dispatch(setInfo(undefined));
            dispatch(errorInfo(e.message));
            dispatch(setMassage("Enter corrected city"))
        }
    };
};