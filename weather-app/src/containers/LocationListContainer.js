import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import PropTypes from 'prop-types'
import LocationList from './../components/LocationList'

class LocationListContainer extends Component {
   
    handleSelectionLocation = city => {
        console.log("Este es el component ")
        //console.log(this.props.children)
        this.setState({city});
        this.props.setCity(city);
    };

    render() {
        return (
            <LocationList cities = {this.props.cities} onSelectedLocation = { this.handleSelectionLocation }/>
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