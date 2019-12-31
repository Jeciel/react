import React from 'react';
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {
    
    const handleWeatherLocationClick = city =>{
        onSelectedLocation(city);
    }

    const strTocomponents = cities =>(
        cities.map( city=> 
            <WeatherLocation 
                key = {city} 
                city = {city} 
                onWeatherLocationClick = { () => handleWeatherLocationClick(city) }
            />
        )
    );

   return <div className = 'locationList'>{strTocomponents(cities)}</div> 
} 

LocationList.proType = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func.isRequired
}


export default LocationList;