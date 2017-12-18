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
import Order from './src/components/Order';
import Serve from './src/components/Serve';



const MyApp = TabNavigator({
  Order: {
    screen: Order,
  },
  Serve: {
    screen: Serve,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled:true,
  tabBarOptions: {
    activeTintColor: '#EEEEEE',
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      width: 50,
        height:30
    },
    style: {
    backgroundColor: '#4183D7',
    alignItems:'center'
    },
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
