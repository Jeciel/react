import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'

const ForecastItem = ({weekDay, hour, data}) =>
{   
    return (
        <div>
            <h3> {weekDay} Hora : {hour} </h3>
            <div><WeatherData data = {data}/></div> 
        </div>
    );
};

ForecastItem.prototypes = {
    weekDay : PropTypes.string.isRequired,
    hour : PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired, 
        humidity: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        wind:PropTypes.string.isRequired,
        })
}

export default ForecastItem;
