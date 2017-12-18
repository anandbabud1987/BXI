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

import { StackNavigator,Easing,Animated,TabNavigator} from 'react-navigation';

export default class Login extends Component{

  static navigationOptions = {
    title: 'Login',
  }

  login(){

    console.log('clicked here');


  }
  //const navigate=this.props.navigate;
  reset(){

    console.log('Reset');
    this.setState({username: '',
            password:''});
  }

  constructor(props){
    super(props);
    this.state = {
      username: '' ,
      password:''
    };


  }

  render(){
  const {navigate}=this.props.navigation;
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
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        />
        <TextInput style={styles.textinput}
          placeholder="Password"
          placeholderTextColor="#34495e"
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          maxLength={15}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          />
          <TouchableOpacity style={styles.button}  onPress={() => navigate('Chat')}>
            <Text style={styles.text}  >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.reset()}>
            <Text style={styles.text} >Reset</Text>
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
