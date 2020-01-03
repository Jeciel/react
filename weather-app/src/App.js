import React , {Component} from 'react';
//import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';
//import { MuiThemeProvider } from '@material-ui/core';

const cities = [
  "Durango, mx",
  "Guadalajara, mx",
  "Mexico, mx",
  "London,uk"
];

class App extends Component{
  render(){

    return (
      <div>
      <Grid className="App">
        <Row>
          <AppBar position = 'sticky'>
            <Toolbar>
              <Typography variant = 'subtitle1' color = 'inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs = {12} md = {6}>
            <LocationListContainer  cities = {cities}/>
          </Col>
          <Col xs = {12} md = {6}>
            <Paper elevation = {4}>
                <div className = "details">
                  {
                    <ForecastExtendedContainer />
                  }
                </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      </div>
    );//Fin return
  }
};

export default App;