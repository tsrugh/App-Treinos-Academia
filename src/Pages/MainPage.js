import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Components/Button';
import aixos from 'axios';


export default class MainPage extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            treino: [],
        }

    }

    busca(obj){
        
        for(tr in treinos){
            for(gp of treinos[tr]){
                for(exr in gp){
                    console.log(gp[exr])
                }
                //console.log(gp);
            }
            //console.log(treinos[tr]);
        }
    }

    componentDidMount(){

        aixos
            //.get('https://localhost/webservice/index.php/teste/Treino%20A')
            .get('http://localhost/webservice2/index.php/teste/Treino A')
            
            .then(response =>{
                //const { dorsais }  = response.data['Treino A'];
                const  treinos   = response.data['Treino A'];

                for(tr in treinos){
                    for(gp of treinos[tr]){
                        for(exr in gp){
                            console.log(gp[exr])
                        }
                        //console.log(gp);
                    }
                    //console.log(treinos[tr]);
                }

            })

    }


    render() {

        return (
            <View style={styles.container}>
                <Button name="Treino A" cor='rgba(197, 0, 0, 0.609)' press={parametro => this.props.navigation.navigate('Proxima', parametro)}/>
                <Button name="Treino B" cor='rgba(22, 189, 16, 0.609)' />
                <Button name="Treino C" cor='rgba(0, 115, 182, 0.609)'/>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }

})