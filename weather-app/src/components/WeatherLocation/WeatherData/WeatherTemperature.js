import React from 'react';
import WeatherIcons from 'react-weathericons';

const sizeIcon = "4x";

const WeatherTemperature = ({temperature, weatherState}) =>(
<div className = "weatherTemperatureCont">
    
    <WeatherIcons className= "wicon" name = {weatherState} size ={sizeIcon} />
    <span className = "temperature">{ `${temperature} `}</span>
    <span className = "temperaturetype">{`C°`}</span>
</div>
);

export default WeatherTemperature;