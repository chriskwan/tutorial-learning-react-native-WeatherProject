
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Forecast from './Forecast';

class WeatherProject extends Component {
// var WeatherProject = React.createClass({

  // // NOTE: this works with:
  // // class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    };
  }

  // NOTE: this works with:
  // var WeatherProject = React.createClass({
  // getInitialState() {
  //   return {
  //     zip: ''
  //   };
  // },

  _handleTextChange(event) {
    console.log(event.nativeEvent.text);
    this.setState({zip: event.nativeEvent.text});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
        <Image source={require('./flowers.jpg')}
               resizeMode='center'
               style={styles.backdrop}>
        </Image>
        <Forecast main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}
        />
        <TextInput style={styles.input}
                   returnKeyType='go'
                   onSubmitEditing={(event) => this._handleTextChange(event)} />
      </View>
    );
  }
//});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
});

//AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
//export default WeatherProject; // this works with import WeatherProject from './WeatherProject';
module.exports = WeatherProject; // this works with var WeatherProject = require('./WeatherProject');
