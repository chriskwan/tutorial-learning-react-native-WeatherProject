
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
        <Image source={require('./flowers.jpg')}
               resizeMode='cover' //tutorial said cover but repeat looks better for my photo
               style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput style={[styles.zipCode, styles.mainText]}
                           returnKeyType='go'
                           onSubmitEditing={(event) => this._handleTextChange(event)} />
              </View>
            </View>
            <Forecast main={this.state.forecast.main}
                      description={this.state.forecast.description}
                      temp={this.state.forecast.temp} />
          </View>
        </Image>
      </View>
    );
  }
//});
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: baseFontSize
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

//AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
//export default WeatherProject; // this works with import WeatherProject from './WeatherProject';
module.exports = WeatherProject; // this works with var WeatherProject = require('./WeatherProject');
