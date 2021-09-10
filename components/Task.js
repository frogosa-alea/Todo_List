import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) =>{

    return (
        <View>
            <text>{props.text} </text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Task;