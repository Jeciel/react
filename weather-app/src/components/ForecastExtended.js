import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast'
import './styles.css';

export const api_key  =  "235408d928b8fe1af2bd7735a07de7cc";
export const url_base_weater = "http://api.openweathermap.org/data/2.5/forecast?q=";

class ForecastExtended extends Component{
    constructor(){
        super();
        this.state = {
            forecastData: null,
        }
    }

    renderForecastItemsDays(){
            return this.state.forecastData
                .map(day =>
                    <ForecastItem 
                        key ={ `${day.weekDay}${day.hour}`}  
                        weekDay = {day.weekDay} 
                        hour = {day.hour} 
                        data = {day.data}
                    />)
    }

    componentDidUpdate(nextProps){
        console.log("Se cambioio un props")
        if(nextProps.city !== this.props.city){
            this.setState({
                forecastData : null
            })
            this.updateCity(this.props.city)
        }
    }

    updateCity = (city) =>{
        fetch(`${url_base_weater} ${city}&appid=${api_key}`)
        .then( 
            data => (data.json()) 
        )
        .then(
            weatherData => {
                this.setState({forecastData : transformForecast(weatherData)});
            }
        )
    }

    componentDidMount(){
      this.updateCity(this.props.city)
    }

    renderProgress(){
        return <h3>"cargando Pronostico Extendido..."</h3>;
    }

    render (){
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className = "forecast-title"> Pronostico Extendido para {city}</h2>  
                {
                    forecastData ?
                    this.renderForecastItemsDays():
                    this.renderProgress()
                }
               
            </div>
        );
    };
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
}

export default ForecastExtended;