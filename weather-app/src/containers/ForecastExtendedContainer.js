import React, { Component } from 'react';
import ForecastExtended from './../components/ForecastExtended';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForeCastDataFromCities } from './../reducers/cities'

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForecastExtended 
                city = {this.props.city}  
                forecastData = {this.props.forecastData}
            />
        );
    }
}

ForecastExtendedContainer.propTypes ={
    city: PropTypes.string.isRequired,
    forecastData : PropTypes.array
};

const mapStateToProps = state =>({city: state.city, forecastData: getForeCastDataFromCities(state.cities, state.city) })

export default connect(mapStateToProps, null)(ForecastExtendedContainer);