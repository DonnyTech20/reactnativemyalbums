// Import  libraries for making a component 
import React from 'react';
import { 
  Text,
  View,
 ImageBackground
 }
  from 'react-native';


// Make a component with jsx
const Header = (props) => {

const { textStyle, container, inner } = styles;


    return (
    <ImageBackground

    source={require('./img/showcase.jpeg')}
                style={ styles.container }>
      <View
      style={ styles.inner }>
      <Text style={ styles.textStyle }>
      {props.headerPassDownProperty}</Text>


      </View>
     </ImageBackground>

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