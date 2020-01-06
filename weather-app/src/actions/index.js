import transformForecast  from './../services/transformForecast'
export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'


const setCity = payload => ({type:SET_CITY , payload});

const api_key  =  "235408d928b8fe1af2bd7735a07de7cc";
const url_base_weater = "http://api.openweathermap.org/data/2.5/forecast?q=";

const setForecastData = payload => ({
    type:SET_FORECAST_DATA, payload
})

export const setSelectedCity =  payload => {
    return dispatch => {
        
        dispatch(setCity(payload));

        return fetch(`${url_base_weater}${payload}&appid=${api_key}`)
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
            