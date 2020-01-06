import React, { Component } from 'react';
import ForecastExtended from './../components/ForecastExtended';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = ({city, cities}) =>({city, forecastData: cities[city]&& cities[city].forecastData })

export default connect(mapStateToProps, null)(ForecastExtendedContainer);