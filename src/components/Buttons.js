import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Buttons = () => {
    const { buttonStyle } = styles;
    const { textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle}>
        <Text style={textStyle}>
            Press me!!
        </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroudColor: '#fff',
        borderColor: '#007aff',
        marginLeft: 5,
        maginRight: 5
    }
};

export default Buttons;