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

export default class Login extends Component{

  render(){
    return(


      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container}>
      <View accessible={true}>
      <StatusBar
    barStyle="light-content"
    />

    <FadeInView>
    <Text style={styles.loginTitle}>BiXi</Text>
    <Text style={styles.loginSubTitle}>Food is Good!</Text>

      <TextInput style={styles.textinput}
        placeholder="Username or Email"
        placeholderTextColor='#34495e'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        maxLength={64}
        />
        <TextInput style={styles.textinput}
          placeholder="Password"
          placeholderTextColor="#34495e"
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          maxLength={15}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>

          <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{flex:1,alignItems:'flex-start',justifyContent: 'flex-end',color:'red'}}
            onPress={() => Linking.openURL('http://google.com')}>
          Register
          </Text>
          <Text style={{flex:1,alignItems:'flex-end',justifyContent: 'flex-end',color:'red'}}
            onPress={() => Linking.openURL('http://google.com')}>
          Forgot Password
          </Text>
          </View>
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
