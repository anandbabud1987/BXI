import React,{Component} from 'react';
import {View,TouchableOpacity,Text,KeyboardAvoidingView,Platform,ScrollView,StatusBar,Image,Linking,ActivityIndicator} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../SigninWithGFStyle';
import FadeInView from './FadeInView';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  LoginButton,
  AccessToken
} = FBSDK;


const user = GoogleSignin.currentUser();
export default class SigninWithGF extends Component{
  constructor(props){
    super(props);
  }
  static navigationOptions = {
     title: 'BiXi',
     headerStyle:styles.signinTitle,
     headerTitleStyle:styles.headerTitleStyle,
   }
  _signInGoogle(){
    
    GoogleSignin.signIn()
          .then((user) => {
            console.log(user);
            this.setState({user: user});
            this.props.navigation.navigate('Tabs')
          })
          .catch((err) => {
            console.log('WRONG SIGNIN', err);
          })
          .done();
}

_handleFBLogout(){
  LoginManager.logout().then(
    () => {
      console.log('FB Logged out');
    }
  )
  .catch((err)=>{
    console.log("Facebook logout Error:"+err);
  });
}

_signInFaceBook(){
  LoginManager.logInWithReadPermissions(['public_profile','email','user_location','user_birthday']).then(
  ((result)=>{
      console.log(result);
      if(result.isCancelled){

      }
      else{
        console.log();
        this.setState({user: user});
        this.props.navigation.navigate('Tabs')
      }
  })
);
}

_signOut(){
      GoogleSignin.signOut()
            .then(() => {
              console.log('out');
            })
            .catch((err) => {
              console.error("Signout Error:"+err)
      });

      this._handleFBLogout();
}

  componentDidMount(){
    GoogleSignin.configure({
            iosClientId: "160848147756-5qu10ijjibbm08u3qin6m5spc30sbg3c.apps.googleusercontent.com", // only for iOS
            webClientId: "160848147756-fqp363psltrsapsf0bhb43fge5n59goc.apps.googleusercontent.com", //only for android
            forceConsentPrompt: false
          })
          .then(() => {
            GoogleSignin.currentUserAsync().then((user) => {
                console.log('USER', user);
                this.setState({user: user});
              }).done();
          });
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
                 style={{width:75,height:75}}
                 source={require('../assets/bixi-1024.png')}
               />
              </View>
            <Text style={styles.loginSubTitle}>Food is Good!</Text>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button}  onPress={this._signInGoogle.bind(this)}>
                  <Text style={styles.buttonText}  ><Icon name="google" size={25} color="#E44134" />  Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={this._signInFaceBook.bind(this)}>
                  <Text style={styles.buttonText}  ><Icon name="facebook-square" size={25} color="#3b5999" />  Sign in with Facebook</Text>
                </TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row',marginTop:5,marginRight:0}}>
                <Text style={{flex:1,alignItems:'flex-end',justifyContent: 'flex-end',color:'white'}}
                  onPress={() => (  this.props.navigation.navigate('Login'))}>
                Sign-In
                </Text>
                </View>
                </View>

                </FadeInView>

                </ScrollView>
                </KeyboardAvoidingView>
    );
  }

}
