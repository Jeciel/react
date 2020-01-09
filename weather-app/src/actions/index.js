import transformForecast  from './../services/transformForecast'
import { api_key, url_base_weater, url_base_forecast } from './../constatns/api_weather'
import  transformWeather  from './../services/transformWeather'

//Constantes que se usan para los Actions Creators.
export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

//Actions creators
const setCity = payload => ({type:SET_CITY , payload});
const setForecastData = payload => ({type:SET_FORECAST_DATA, payload})
const getWeatherCity = payload =>({type:GET_WEATHER_CITY, payload})
const setWeatherCity = payload =>({type:SET_WEATHER_CITY, payload})


/* Action Creators  */
export const setSelectedCity =  payload => {

    return (dispatch, getState) => {
        console.log("getState")
        console.log(getState())

        dispatch(setCity(payload));
        
        if(  getState().cities[payload] && (new Date() - getState().cities[payload].fecha) < (1* 60 * 10000))
        {
            console.log(new Date() - getState().cities[payload].fecha)
            return
        }

        return fetch(`${url_base_forecast}${payload}&appid=${api_key}`)
        .then( 
            data => (data.json()) 
        )
        .then(
            weatherData => {
                const forecastData = transformForecast(weatherData);
                dispatch(setForecastData({city:payload, forecastData}));
            }
        );
    }
}

export const setWeather =  payload => {
    /* 4 payload */
    /* 2 return */ 



    return dispatch =>{

        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            fetch(`${url_base_weater}${city}&APPID=${api_key}`)
            .then(
                resolve => {
                    return resolve.json();
                })
            .then(
                response_data => {
                    // *1 response_data
                    const weather = transformWeather(response_data);
                    dispatch(setWeatherCity({city, weather}));
                }
            )
        });
    }
}

/* 1 */
/*
        base: "stations"
        clouds: Object { all: 5 }
        cod: 200
        coord: Object { lon: -104.67, lat: 24.02 }
        dt: 1578414003
        id: 4011743
        main: Object { temp: 283.45, feels_like: 279.91, temp_min: 283.15, … }
        name: "Durango"
        sys: Object { type: 1, id: 7113, country: "MX", … }
        timezone: -21600
        visibility: 19312
        weather: Array [ {…} ]
        wind: Object { speed: 1.52, deg: 341 } 
*/

/* 2 */
/*
    [
        {
            temperature: PropTypes.number.isRequired, 
            humidity: PropTypes.number.isRequired,
            weatherState:PropTypes.string.isRequired,
            wind:PropTypes.string.isRequired,
        }, 
        {
            ...
        },
        ...
    ]
   
*/

/* 4 */
/*
    [
        city1,
        city2, 
        ...
        cityn
    ]
*/

          