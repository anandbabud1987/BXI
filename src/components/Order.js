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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const {width,height}=Dimensions.get('window');
const SCREEN_WIDTH=width;
const SCREEN_HEIGHT=height;
const ASPECT_RATIO=width/height;
const LATITUDE_DELTA=0.0922;
const LONGITUDE_DELTA=LATITUDE_DELTA * ASPECT_RATIO;
var mapStyle=require('../jsons/mapstyle.json');
export default class Order extends Component{
  constructor() {
     super();
     this.state={
       initialPosition:{
         latitude: 0,
         longitude:0,
         latitudeDelta: 0,
         longitudeDelta: 0,
       },
       markerPosition:{
         latitude: 0,
         longitude:0,

       }

     }
   }
  static navigationOptions = {
     tabBarLabel: 'Eat',
     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     tabBarIcon: ({ tintColor }) => (
       <Icon name="cutlery" size={30} color={tintColor} />
     ),
   };
  login(){

  }
  watchID:?number=null;
  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{

        var lat=parseFloat(position.coords.latitude);
        var longt=parseFloat(position.coords.longitude);

        var initialRegion={
          latitude: lat,
          longitude:longt,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
        this.setState({initialPosition:initialRegion});
        this.setState({markerPosition:initialRegion});
    },(error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },

    );
  }

  render(){

    return(
        <View style={styles.container}>

          <MapView style={styles.map} customMapStyle={mapStyle} region={this.state.initialPosition} provider={PROVIDER_GOOGLE}>
              <MapView.Marker coordinate={this.state.markerPosition}>

                </MapView.Marker>

              </MapView>
              <TextInput style={styles.textinput} placeholder="Search"/>
          </View>
    );
  }
}



const styles = StyleSheet.create({
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#adc3c9',
  },
  radius:{
    width: width,
    height: height
  },
  marker:{
    width: width,
    height: height,

  },
  container: {
      flex: 1,
      top:0,
      bottom:0,
      right:0,
      left:0,
      justifyContent:'flex-end',
      alignItems:'center',
      position:'absolute'
    },
  map: {
    flex: 1,
    top:0,
    bottom:0,
    right:0,
    left:0,
    position:'absolute'
    },
    textinput:{
      backgroundColor:'#F5F5F5',
      width:300,
      height:45,
      textAlign:'center',
      marginBottom:35,
      borderRadius:10,
      borderColor:'#d35400'
    },
});
