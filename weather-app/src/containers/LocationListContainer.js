import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import { getWeatherCities, getCity} from  './../reducers'


class LocationListContainer extends Component {
    componentDidMount() {
        this.props.setWeather(this.props.cities); //--> actions
        this.props.setSelectedCity(this.props.city) // --> actions
    }

    render() {
        return (
            <LocationList 
                cities = {this.props.citiesWeather}
                onSelectedLocation = { city => this.props.setSelectedCity(city) }/>
        );
    }
}

LocationListContainer.propTypes ={
    setSelectedCity : PropTypes.func.isRequired,
    cities : PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired,
    city:PropTypes.string,
}
  
const mapDispatchToPropsActions = dispatch =>({
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)) 
});

//Obtiene datos que necesitaremos del estado global
const mapStateToProps = state =>(
    {
        citiesWeather : getWeatherCities(state),
        city : getCity(state)
    }
)
    //Necesitamos la informacion de las ciudades y el clima por ciudad
    //getWeatherCities(state) es un Selector....

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);