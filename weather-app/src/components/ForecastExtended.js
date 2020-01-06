import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemsDays = forecastData =>{
    return forecastData
        .map(day =>
            <ForecastItem 
                key ={ `${day.weekDay}${day.hour}`}  
                weekDay = {day.weekDay} 
                hour = {day.hour} 
                data = {day.data}
            />)
}

const ForecastExtended = ({city, forecastData}) => (
            <div>
                <h2 className = "forecast-title"> Pronostico Extendido para {city}</h2>  
                {
                    forecastData ?
                    renderForecastItemsDays(forecastData):
                    <h3>"Cargando Pronostico Extendido..."</h3>
                }
            </div>
)

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
}

export default ForecastExtended;