import React , {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  "Durango, mx",
  "Guadalajara, mx",
  "Mexico, mx",
  "London,uk"
];

class App extends Component{
  
  constructor(){
    super();

    this.state = {
      city : null,
    }
  }
  
  handleSelectionLocation = city => (this.setState({city}));

  render(){
    //const {city} = this.state;
    return (
      <Grid className="App">
        <Row>
          <AppBar position = 'sticky'>
            <Toolbar>
              <Typography variant = 'subtitle1' color = 'inherit'>
                Wheater App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs = {12} md = {6}>
            <LocationList cities = {cities} onSelectedLocation = { this.handleSelectionLocation }/>
          </Col>
          <Col xs = {12} md = {6}>
            <Paper elevation = {4}>
                <div className = "details">
                  {
                    this.state.city  && <ForecastExtended city = {this.state.city ? this.state.city:'No ciudad'} />

                  }
                  
                </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    )
  };

}

export default App;
