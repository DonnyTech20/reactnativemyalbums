import React from 'react';
import {  StyleSheet, ImageBackground }  from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';



// Create a component 
export default class App extends React.Component  {
  render() {
    return (
  <ImageBackground source={require('./src/components/img/showcase.jpeg')}
   style={styles.container}>
  <Header headerPassDownProperty={'Albums'}  />
  <AlbumList />
  
</ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    },
});

  // Render it to device
  //AppRegistry.registerComponent('firstnativeproject', () => App);
