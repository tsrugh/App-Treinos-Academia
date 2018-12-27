import React from 'react';
import {Text, View, StyleSheet } from 'react-native';


const Title = (props) => {

    const { titulo, cor } = props;


    return (
        <View style={[styles.container, {backgroundColor: cor}]}>

            <Text style={styles.text}>{titulo}</Text>
        
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
     //   backgroundColor: cor
    },

    text:{
        color: '#fff'
    }




})