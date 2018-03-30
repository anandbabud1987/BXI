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

import { StackNavigator,Easing,Animated,TabNavigator,NavigationActions,StackRouter} from 'react-navigation';

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
    activeBackgroundColor:'silver',
    labelStyle: {
              fontSize: 12,
              fontFamily:'Futura',
              color:'gray'
        },
    style:{
      backgroundColor:'silver'
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
    activeBackgroundColor:'silver',
    labelStyle: {
              fontSize: 12,
              fontFamily:'Futura',
              color:'gray'
        },
    style:{
      backgroundColor:'silver',
      //sheight:80
    }
  }

const MyApp = TabNavigator({
  Order: {
   screen: Order,
   path:'/bixi/tabs/order',
   key:'order'
  },
  Serve: {
    screen: Serve,
    path:'/bixi/tabs/serve',
     key:'serve'
  },
  Chat: {
    screen: Chat,
    path:'/bixi/tabs/chat',
    key:'chat'
  },
  Profile: {
    screen: Profile,
    path:'/bixi/tabs/profile',
    key:'profile'
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled:swipeEnabled,
  tabBarOptions: tabBarOptions,
  initialRouteName: 'Profile',

});


const  BixiNavigator= StackNavigator(
  {
    SigninWithGF:{
      screen:SigninWithGF,
      path:'/bixi/signin/gf',
      key:'sign-in-with-gf'
    },
    Tabs: {
      screen: MyApp ,
      path:'/bixi/tabs',
      key:'tabs'
    },
    Login: {
      screen: Login ,
      path:'/bix/Login',
      key:'login'
    },
    FoodType:{
      screen:FoodType,
      path:'/bix/foodtype',
      key:'foodtype'
    },
    ServeStack: {
      screen: Serve,
      path:'/bixi/tabs/serve-stack',
      key:'servestack'
    },
  }
  ,
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'FoodType',
  }
);





const defaultGetStateForActionMyApp = MyApp.router.getStateForAction;

MyApp.router.getStateForAction = (action, state) => {
  console.log("MyApp Tab state for action");
  console.log(state);
  console.log(action);
  console.log('end')
  if (
    state &&
    action.type === NavigationActions.BACK &&
    state.routes[state.index].params
  ) {
    console.log('Back Clicked');
    return null;
  }
  if(state && action.type===NavigationActions.Profile){

  }

  return defaultGetStateForActionMyApp(action, state);
};

const defaultGetStateForAction = BixiNavigator.router.getStateForAction;

BixiNavigator.router.getStateForAction = (action, state) => {
  console.log("BixiNavigator  state for action");
  console.log(state);
  if (
    state &&
    action.type === NavigationActions.BACK &&
    state.routes[state.index].params
  ) {
    console.log('Back Clicked');
    return null;
  }

  return defaultGetStateForAction(action, state);
};


export default class App extends Component<{}> {
  render() {
    return (<BixiNavigator/>);
  }
}
