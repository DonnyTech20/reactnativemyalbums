// Import a library to help create a component

import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('./src/img/hands.jpg')} style={styles.inner}>
				
					<Header headerPassDownProperty={'Albums'} />

					<AlbumList />
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50
	},

	inner: {
		flex: 1,
		width: null,
		height: null,
		backgroundColor: 'rgba(255, 255, 255, .7)'
	}
});

// Render it to the device
//AppRegistry.registerComponent('App', () => App);
export default App;
