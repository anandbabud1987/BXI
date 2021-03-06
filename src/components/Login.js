import React,{Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Linking,
  Vibration,
  Image,
  Modal
} from 'react-native';
import FadeInView from './FadeInView';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../styles';
import { StackNavigator,Easing,Animated,TabNavigator} from 'react-navigation';
import Register from './Register';
const DURATION = 500;
const PATTERN = [1000, 2000, 3000];
var Rvisibility=false;

export default class Login extends Component{

  static navigationOptions = {
    title: 'Login',
  }

  login(){

    console.log('clicked here');
    if(this.state.username==='' || this.state.password===''){
      alert('Username or Password is missing')
      Vibration.vibrate(DURATION);
      return false;
    }
    this.props.navigation.navigate('Tabs');

  }
  //const navigate=this.props.navigate;
  reset(){

    console.log('Reset');
    this.setState({username: '',
            password:''});
  }

  componentDidMount(){
    this.setState({Rvisibility:false})
  }



  constructor(props){
    super(props);
    this.state = {
      username: '' ,
      password:'',
      Rvisibility:false
    };
}
openModal(){
  console.log("Open modal");
  this.Rvisibility=true;
  this.setState({Rvisibility:true})
}
closeR(){
  console.log("Close");
  this.Rvisibility=false;
  this.setState({Rvisibility:false})
}
  render(){



    return(



      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container}>

      <ScrollView accessible={true} showsVerticalScrollIndicator={false}>

      <StatusBar
        barStyle="light-content"
        />

    <FadeInView>

      <View style={{flex: 1, flexDirection: 'row',alignItems:'center',justifyContent:'center',padding:40}}>

    <Image
         style={{width:50,height:50}}
         source={require('../assets/bixi-1024.png')}
       />
         <Text style={styles.welcometext}> Welcome to BiXi...</Text>
      </View>
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
          <TouchableOpacity style={styles.button}  onPress={() => this.login()}>
            <Text style={styles.text}  >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.reset()}>
            <Text style={styles.text} >Reset</Text>
          </TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex:1,alignItems:'flex-start',justifyContent: 'flex-start'}}>
          <Text
          style={{color:'white'}}
            onPress={() => Linking.openURL('http://google.com')}>
          Forgot Password
          </Text>
          </View>
          <View style={{flex:1,alignItems:'flex-end',justifyContent: 'flex-end'}}>
          <Text
          style={{color:'white'}}
            onPress={() => this.openModal()}>
          Register
          </Text>
          </View>
          </View>
      </FadeInView>

      </ScrollView>
      <Modal animationType='slide' transparent={false} visible={Rvisibility} onRequestClose={()=>{}}>
        <View style={styles.container1}>
        <TouchableOpacity onPress={()=>this.closeR()}  style={styles.closeButton} >
          <Icon style={styles.closeButtonIcon} name='arrow-left' size={30} />
        </TouchableOpacity>
        </View>
        <Register/>
      </Modal>
      </KeyboardAvoidingView>

    );
  }
}
