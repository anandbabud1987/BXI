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
import Profile from './src/components/Profile';


const swipeEnabled=Platform.OS==='ios'?true:false;

const tabBarOptions = Platform.OS === 'ios' ?
  {
    // iOS tabBarOptions
    showLabel: true,
    labelStyle: {
    fontSize: 12,
  },
    style:{
      backgroundColor:'white'
    }
  } : {
    // Android tabBarOptions
    showIcon: true,
    showLabel: false,
    labelStyle: {
    fontSize: 12,
  },
    style:{
      backgroundColor:'white'
    }
  }

const MyApp = TabNavigator({
  Order: {
    screen: Order,
  },
  Serve: {
    screen: Serve,
  },
  Profile: {
    screen: Profile,
  },
}, {
  tabBarPosition: 'bottom',
  //animationEnabled: true,
  swipeEnabled:swipeEnabled,
  tabBarOptions: tabBarOptions
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
