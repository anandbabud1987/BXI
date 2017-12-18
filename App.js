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
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';

import { StackNavigator,Easing,Animated,TabNavigator} from 'react-navigation';

import Login from './src/components/Login';
import Home from './src/components/Home';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return <Home/>;
  }
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: ''
  };
  render() {
    return <Login/>;
  }
}

const  BixiNavigator= StackNavigator(
  {
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
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
