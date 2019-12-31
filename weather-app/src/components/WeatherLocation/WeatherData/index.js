import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
import PropTypes from 'prop-types';

const WeatherData = ({data : {temperature, humidity, weatherState, wind} }) =>(
    <div className = "weatherDataCont">
        <WeatherExtraInfo humidity = {humidity} wind = {wind} />
        <WeatherTemperature temperature = {temperature} weatherState = {weatherState} />
    </div>
);
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired, 
        humidity: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        wind:PropTypes.string.isRequired,
    })}


export default WeatherData;