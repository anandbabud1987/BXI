import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Linking
} from 'react-native';
import FadeInView from './FadeInView';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Order extends Component{
  constructor() {
     super();
   }
  static navigationOptions = {
     tabBarLabel: 'Order',
     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     tabBarIcon: ({ tintColor }) => (
       <Icon name="cutlery" size={30} color="#900" />
     ),
   };
  login(){

  }

  render(){
    return(


      <View accessible={true} style={styles.container}>



    <MapView
    style={ styles.map }
initialRegion={{
  latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
}}
/>


      </View>



    );
  }
}



const styles = StyleSheet.create({
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#bdc3c7',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
