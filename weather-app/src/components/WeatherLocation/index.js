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
        const { key2, city, onWeatherLocationClick } = porps;
        console.log(key2)
        this.state = {
            city,
            data:null,
            onWeatherLocationClick
        };
    }

    render(){

        return (
        <div 
            className = "weatherLocationCont" 
            onClick = {() => this.state.onWeatherLocationClick(this.state.city)}>
            {this.state.city ? <Location city = {this.state.city}/>  :  <CircularProgress />}
            {this.state.data ? <WeatherData data = {this.state.data} /> : <CircularProgress /> }
        </div>
        )
    };


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
}


WeatherLocation.proTotypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationclick : PropTypes.func.isRequired
}

export default WeatherLocation;