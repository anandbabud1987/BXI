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
import Chat from './src/components/Chat';
import FoodType from './src/components/FoodType';
import SigninWithGF from './src/components/SigninWithGF';


const swipeEnabled=Platform.OS==='ios'?false:false;

const tabBarOptions = Platform.OS === 'ios' ?
  {
    // iOS tabBarOptions
    showLabel: true,
    iconStyle:{
      width:50,
      height:50
    },
    activeTintColor: 'red',
    activeBackgroundColor:'black',
    labelStyle: {
              fontSize: 12,
              fontFamily:'Futura',
              color:'silver'
        },
    style:{
      backgroundColor:'black'
    }
  } : {
    // Android tabBarOptions
    showIcon: true,
    showLabel: false,
    iconStyle:{
      width:50,
      height:40
    },
    activeTintColor: 'red',
    activeBackgroundColor:'black',
    labelStyle: {
              fontSize: 12,
              fontFamily:'Futura',
              color:'silver'
        },
    style:{
      backgroundColor:'black',
      //sheight:80
    }
  }

const MyApp = TabNavigator({
  Order: {
   screen: Order,
  },
  Serve: {
    screen: Serve,
  },
  Chat: {
    screen: Chat,
  },
  Profile: {
    screen: Profile,
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled:swipeEnabled,
  tabBarOptions: tabBarOptions
});


const  BixiNavigator= StackNavigator(
  {
  //SigninWithGF:{screen:SigninWithGF},

  Tabs: { screen: MyApp },
  Login: { screen: Login },
  FoodType:{screen:FoodType}
  }
  ,
  {
    headerMode: 'none',
    mode: 'modal',
  }
);
export default class App extends Component<{}> {
  render() {
    return (<BixiNavigator/>);
  }
}
