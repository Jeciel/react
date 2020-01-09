import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';

const WeatherLocation = ({city, onWeatherLocationClick, data}) => (
        <div 
            className = "weatherLocationCont" 
            onClick = {() => onWeatherLocationClick(city)}>
            {city ? <Location city = {city}/>  :  <CircularProgress />}
            {data ? <WeatherData data = {data} /> : <CircularProgress /> }
        </div>
);

WeatherLocation.proTotypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationclick : PropTypes.func.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired, 
        humidity: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        wind:PropTypes.string.isRequired,
    })
}

export default WeatherLocation;