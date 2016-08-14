var React = require('react-native');
var { AppRegistry } = React;
var WeatherProject = require('./WeatherProject'); //cwkTODO this only works with module.exports = WeatherProject;
AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
