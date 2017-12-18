/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';

import { StackNavigator,Easing,Animated,TabNavigator} from 'react-navigation';

import Login from './src/components/Login';
import Home from './src/components/Home';
import Chef from './src/components/Chef';



const MyApp = TabNavigator({
  Home: {
    screen: Home,
  },
  Chef: {
    screen: Chef,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


const  BixiNavigator= StackNavigator(
  {
  Login: { screen: Login },
  Tabs: { screen: MyApp }
  }
  ,
  {
    headerMode: 'none',
    mode: 'modal',
  }
);
export default class App extends Component<{}> {
  render() {
    return (

      <BixiNavigator/>


    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFAFA',
  }
});
