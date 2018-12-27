import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const Button = (props) =>{

    const {press} = props;
    const teste = {
        nome: 'Lucas'
    }

    return(

        <TouchableOpacity style={[styles.button, {backgroundColor: props.cor}]} 
            onPress={() => press(teste)}
        >
            <Text style={ [styles.texto] }  >{props.name}</Text>
        </TouchableOpacity>
    
    )


}

const styles = StyleSheet.create(

    {
        button:{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(197, 0, 0, 0.609)',
            paddingBottom: 30,
            paddingTop: 30,
            marginTop: 15,
        },
        
        texto:{
            color: '#fff',
            fontFamily: 'Arial',
            fontSize: 30,
            //alignSelf: 'center',
            //alignItems: 'center'
            
        }

    }

)

export default Button;