import React,{Component} from 'react';
import {View,TextInput,StatusBar,StyleSheet,Animated} from 'react-native';

export default class FadeInView extends Component{
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }
  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue:1,
         duration: 3000,
    }).start();
  }
  render(){
    let { fadeAnim } = this.state;
    return(
      <Animated.View                 // Special animatable View
       style={{
         ...this.props.style,
         opacity: fadeAnim,         // Bind opacity to animated value
       }}
     >
       {this.props.children}
     </Animated.View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#27ae60',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    backgroundColor:'#bdc3c7',
    width:200,
    height:40
  }

});
