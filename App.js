import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainPage from './src/Pages/MainPage';
import TrainingPage from './src/Pages/TrainingPage';


const AppNavigator = createStackNavigator({
  Principal: MainPage,
  Proxima: TrainingPage,
});

export default createAppContainer(AppNavigator);