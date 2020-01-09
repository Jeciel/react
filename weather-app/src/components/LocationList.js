import React from 'react';
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {

   return   <div className = 'locationList'>
       {
            cities.map( 
                city=> 
                <WeatherLocation 
                    key = {city.key} 
                    city = {city.name} 
                    onWeatherLocationClick = { city =>  onSelectedLocation(city) }
                    data = {city.data}
                />
            )
        }
    </div> 
} 

LocationList.proType = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func.isRequired
}

export default LocationList;