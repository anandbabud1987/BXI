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
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Chat extends Component{

  static navigationOptions = {
     tabBarLabel: 'Chat',
     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     tabBarIcon: ({ tintColor }) => (
       <Icon name="comments" size={30} color={tintColor} />
     ),
   };


  login(){

  }

  render(){
    return(


      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container}>
      <View accessible={true}>
      <StatusBar
    barStyle="light-content"
    />

    <FadeInView>
        <Text>Profile6666 </Text>
      </FadeInView>

      </View>
      </KeyboardAvoidingView>


    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  button: {
   alignItems: 'center',
   backgroundColor: '#2980b9',
   padding: 10,
   width:300,
   height:45,
   borderRadius:7,
   marginBottom:27
 },
  textinput:{
    backgroundColor:'#F5F5F5',
    width:300,
    height:45,
    textAlign:'center',
    marginBottom:35,
    borderRadius:10,
    borderColor:'#d35400',
    borderTopRightRadius:0,
    borderBottomLeftRadius:0
  },
  text:{
    textShadowColor:'#34495e',
     color:'#fff',
  },
  loginTitle:{
    textShadowColor:'#2c3e50',
     color:'#228b22',
     textAlign:'center',
     fontSize:110,
     fontWeight:'bold',
     textShadowRadius:10
  },
  loginSubTitle:{
    textShadowColor:'#27ae60',
     color:'#c0392b',
     textAlign:'center',
     fontSize:25,
     marginBottom:30,
     fontWeight:'bold'
  },
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#bdc3c7',
  }

});
