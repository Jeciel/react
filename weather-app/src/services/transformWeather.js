import convert from 'convert-units'
import {WEATHERS} from '../constatns/weather'

const getWeatherState = ({id}) =>{    
    if(id<300){
        return "THUNDER"
    }
    if(id<400){
        return "DRIZZLE"
    }
    if(id<600){
        return "RAIN"
    }
    if(id<700){
        return "SNOW"
    }
    return "SUN"
}

const getTemp = kelvin =>
{
    return Number(convert(kelvin).from("K").to("C").toFixed(0))
}

const transformWeather = weather_data => {
    const {temp, humidity} = weather_data.main; 
    const {speed} = weather_data.wind;

    return  {
        temperature : getTemp(temp),
        weatherState :  WEATHERS[getWeatherState(weather_data.weather[0])],
        humidity : humidity,
        wind : `${speed} m/s`
    }
}

export default transformWeather;