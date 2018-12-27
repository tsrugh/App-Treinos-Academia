import React from 'react';
import {View, Text, StyleSheet} from 'react-native' ;

class TrainingPage extends React.Component{


    render(){
        const {nome} = this.props.navigation.state.params
        return(

            <View>

                <Text>{nome}</Text>

            </View>

        )

    }
}

export default TrainingPage;