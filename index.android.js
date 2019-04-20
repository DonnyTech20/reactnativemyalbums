import React from 'react';
import {  View }  from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component 
const App = () => {
  <View>
  <Header headerPassDownProperty={'Albums'}  />
  <AlbumList />
</View>

};

  // Render it to device
  AppRegistry.registerComponent('firstnativeproject', () => App);
