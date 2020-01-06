import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedCity } from './../actions';
import PropTypes from 'prop-types'
import LocationList from './../components/LocationList'

class LocationListContainer extends Component {

    render() {
        return (
            <LocationList 
                cities = {this.props.cities} 
                onSelectedLocation = { city => this.props.setSelectedCity(city) }/>
        );
    }
}

LocationListContainer.propTypes ={
    setSelectedCity : PropTypes.func.isRequired,
    cities : PropTypes.array.isRequired,
}
  
const mapDispatchToPropsActions = dispatch =>({
    setSelectedCity: value => dispatch(setSelectedCity(value)),
});
  
export default connect(null, mapDispatchToPropsActions)(LocationListContainer);