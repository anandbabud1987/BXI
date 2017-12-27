import React,{Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Linking,
  Image
} from 'react-native';
import FadeInView from './FadeInView';

import { StackNavigator,Easing,Animated,TabNavigator} from 'react-navigation';

export default class Register extends Component{

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

    return(


      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container}>
      <ScrollView accessible={true} showsVerticalScrollIndicator={false}>
      <StatusBar
    barStyle="light-content"
    />

    <FadeInView>
      <View style={{flex: 1, flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
    <Image
         style={{width:50,height:50}}
         source={require('../assets/bixi-1024.png')}
       />
      <Text style={styles.loginTitle}>BiXi</Text>
      </View>
    <Text style={styles.loginSubTitle}>Food is Good!</Text>

      <TextInput style={styles.textinput}
        placeholder="Email"
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
          <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('Tabs')}>
            <Text style={styles.text}  >Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.reset()}>
            <Text style={styles.text} >Reset</Text>
          </TouchableOpacity>

          <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{flex:1,alignItems:'flex-start',justifyContent: 'flex-end',color:'red'}}
            onPress={() => this.props.navigation.navigate('Register')}>
          Register
          </Text>
          <Text style={{flex:1,alignItems:'flex-end',justifyContent: 'flex-end',color:'red'}}
            onPress={() => Linking.openURL('http://google.com')}>
          Forgot Password
          </Text>
          </View>
      </FadeInView>

      </ScrollView>
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
  image:{
    flex:1,
    backgroundColor:'#FFFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    //padding:20,
    width:50,
    height:50

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
     fontSize:50,
     fontWeight:'bold',
     textShadowRadius:10
  },
  loginSubTitle:{
    textShadowColor:'#27ae60',
     color:'#c0392b',
     textAlign:'center',
     fontSize:10,
     marginBottom:30,
     fontWeight:'bold'
  },
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#bdc3c7',
  }

});
