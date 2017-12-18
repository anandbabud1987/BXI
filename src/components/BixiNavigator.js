import React from 'react';
import { View, Text,AppRegistry } from 'react-native';
import { StackNavigator,Easing,Animated,TabNavigator} from 'react-navigation';
import Home from './Home';
import Login from './Login';

const HomeScreen = () => (
  <Home/>
);
const LoginScreen = () => (
  <Login/>
);
const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen }
});

const RootStackNavigator = StackNavigator(
 {
   Login: { screen: LoginScreen },
   Home: { screen: MainScreenNavigator },
 },
 {
   headerMode: 'none',
   mode: 'modal',
   navigationOptions: {
     gesturesEnabled: false,
   },
   transitionConfig: () => ({
     transitionSpec: {
       duration: 300,
      // easing: Easing.out(Easing.poly(4)),
       //timing: Animated.timing,
     },
     screenInterpolator: sceneProps => {
       const { layout, position, scene } = sceneProps;
       const { index } = scene;

       const height = layout.initHeight;
       const translateY = position.interpolate({
         inputRange: [index - 1, index, index + 1],
         outputRange: [height, 0, 0],
       });

       const opacity = position.interpolate({
         inputRange: [index - 1, index - 0.99, index],
         outputRange: [0, 1, 1],
       });

       return { opacity, transform: [{ translateY }] };
     },
   }),

 }
);

export default class BixiNavigator extends React.Component{
  render(){
    return(
      <RootStackNavigator/>
    );
  }
}
