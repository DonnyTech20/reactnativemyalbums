import React from 'react';
import { AppRegistry, View, StyleSheet, ImageBackground } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';



// Create a component 
const App = () => {
<ImageBackground 
  source={require('./src/components/img/showcase.jpeg')}
   style={styles.container}>
<View style={{ flex: 1 }}>

  <Header headerPassDownProperty={'Albums'}  />

<AlbumList />

</View>
   </ImageBackground>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    },
});

  // Render it to device
  AppRegistry.registerComponent('albums', () => App);
