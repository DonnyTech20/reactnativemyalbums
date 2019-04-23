// Import  libraries for making a component 
import React from 'react';
import { Text,View } from 'react-native';


// Make a component with jsx
const Header = (props) => {

const { textStyle, container, inner } = styles;


    return (
      <View style={ styles.inner }>
      <Text style={ styles.textStyle }>
      {props.headerPassDownProperty}
      </Text>
      </View>
     );
};

const styles = {
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},

textStyle: {
fontSize: 20,
 },

 inner: {
 width: '80%',
 height: '80%',
 backgroundColor: 'rgba(255, 255, 255, .7)'
 }
};

// Make the component available to other components
export default Header;