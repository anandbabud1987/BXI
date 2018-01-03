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
import styles from './style/RegisterStyle';

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
      </FadeInView>

      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
