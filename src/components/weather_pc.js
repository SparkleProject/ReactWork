import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import {
  Icon,
} from 'antd';

export default class WeatherOnPC extends Component{
  constructor(){
    super();
    this.state = {
      local:'',
      weatherIcon:'',
      weatherDesc:'',
      temperature:'',
      city:'',
    };
  }

  componentWillMount () {
    let fetchOptions = {
      method: 'GET'
    };
    let cityId='2192362';
    let apiKey = '9df04f104ae8383d1631d24238e9f28e';
    let url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

    let weather = {}
    fetch(url,fetchOptions)
      .then(response=>response.json())
      .then(json=>{
        this.setState({
          weatherIcon:json.weather[0].icon,
          weatherDesc:json.weather[0].description,
          city:json.name})
      })
      .catch(error=>console.log(error));

   }

  render(){
    let weatherIconUrl = `http://openweathermap.org/img/w/${this.state.weatherIcon}.png`;

    return(
      <MediaQuery query="(min-width: 1224px)">
        <div className="weather-container">
          <div className="weather-pad" >
            <img src={weatherIconUrl} alt="Weather"/>
          </div>
          <div className="weather-desc">{this.state.weatherDesc}, {this.state.city}</div>
        </div>
      </MediaQuery>
    )
  }
}
