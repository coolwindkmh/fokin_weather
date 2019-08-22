import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "c68e1f83461448bac6c4de7fd10c7fbb";

export default class App extends React.Component  {
  state={
    isLoading: true
  }
  getWeather = async(latitude, longitude) =>{
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`)
    console.log(data);
    console.log(data.name);
    this.setState({
      isLoading: false, 
      temp:data.main.temp, 
      condition:data.weather[0].main,
      local:data.name
    })
  }

  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      //console.log(coords.latitude, coords.longitude);
      
      this.getWeather(latitude, longitude);
      //this.setState({isLoading: false});
      //Send to API and get weather!
    } catch(error){

    }

  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition, local } = this.state;
    return isLoading ? <Loading/> : 
    <Weather 
      temp={Math.round(temp)}
      condition={condition}
      local={local}
      />; 
  }
}


