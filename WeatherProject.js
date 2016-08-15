
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class WeatherProject extends Component {
// var WeatherProject = React.createClass({

  // // NOTE: this works with:
  // // class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      zip: ''
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
        <TextInput style={styles.input}
                   onSubmitEditing={(event) => this._handleTextChange(event)} />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
