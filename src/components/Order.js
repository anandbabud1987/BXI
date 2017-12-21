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
  Linking,
  Dimensions
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
       <Icon name="cutlery" size={30} color="#228b22" />
     ),
   };
  login(){

  }

  render(){

    return(


      <View style={styles.container}>



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

var { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#bdc3c7',
  },
  container: {
      flex: 1,
    },
  map: {
      flex: 1,
      width: width,
      height: height,
    },
});
