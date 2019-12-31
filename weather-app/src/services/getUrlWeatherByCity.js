import {api_key, url_base_weater} from '../constatns/api_weather'

const getUrlWheaterByCity = city =>(
    `${url_base_weater}${city}&APPID=${api_key}`
)

export default getUrlWheaterByCity;