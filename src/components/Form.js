import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/weatherActions";
import stylesInput from "../CSS/input.module.css"
import stylesBtn from "../CSS/button.module.css"

const Form = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState("");
    const handleClickGetWeather = (e) => {
        e.preventDefault()
        dispatch(fetchWeather(city));
    }

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input onChange={handleChange} type='text' value={city} placeholder='City' className={stylesInput.input}/>
            <button type='submit' className={stylesBtn.button}>Get weather</button>
        </form>
    );
};

export default Form;