import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from '../../services/transformWeather' ;
import getUrlWheaterByCity from "../../services/getUrlWeatherByCity";
import './styles.css';


class WeatherLocation extends Component {
    
    constructor(porps){

        super(porps);
        const { city, onWeatherLocationClick } = porps;

        this.state = {
            city,
            data:null,
            onWeatherLocationClick
        };
    }


    handleUpdateClick = ({city}) =>{
        fetch(getUrlWheaterByCity(city))
        .then(
            resolve => {
                return resolve.json();
            })
        .then(
            response_data => {
                this.setState({
                    data : transformWeather(response_data)
                })
            }
        )
        
    };

    componentDidMount() {
        this.handleUpdateClick(this.state);
    }

    render(){
        const {city, data} = this.state;

        return (
        <div className = "weatherLocationCont" onClick = {this.state.onWeatherLocationClick}>
            {city ? <Location city = {city}/>  :  <CircularProgress />}
            {data ? <WeatherData data = {data} /> : <CircularProgress /> }
        </div>
        )
    };
}


WeatherLocation.proTotypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationclick : PropTypes.func.isRequired
}

export default WeatherLocation;