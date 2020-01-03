import React from 'react';
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {
    
    LocationList.proType = {
        cities : PropTypes.array.isRequired,
        onSelectedLocation : PropTypes.func.isRequired
    }

   return   <div className = 'locationList'>
       {
            cities.map( 
                city=> 
                <WeatherLocation 
                    key = {city} 
                    key2 = {city}
                    city = {city} 
                    onWeatherLocationClick = { city =>  onSelectedLocation(city) }
                />
            )
        }
    </div> 
} 

export default LocationList;