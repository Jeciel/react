import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import PropTypes from 'prop-types'
import LocationList from './../components/LocationList'

class LocationListContainer extends Component {

    render() {
        return (
            <LocationList 
                cities = {this.props.cities} 
                onSelectedLocation = { city => this.props.setCity(city) }/>
        );
    }
}

LocationListContainer.propTypes ={
    setCity : PropTypes.func.isRequired,
    cities : PropTypes.array.isRequired,
}
  
const mapDispatchToPropsActions = dispatch =>({
    setCity: value => dispatch(setCity(value)),
});
  
export default connect(null, mapDispatchToPropsActions)(LocationListContainer);