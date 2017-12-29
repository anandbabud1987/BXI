import React,{Component} from 'react';
import {View,TouchableOpacity,Text,KeyboardAvoidingView,Platform,ScrollView,StatusBar,Image,Linking} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import styles from '../styles';
import FadeInView from './FadeInView';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;


const user = GoogleSignin.currentUser();
export default class SigninWithGF extends Component{

  _signIn(){
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

_signOut(){
      GoogleSignin.signOut()
            .then(() => {
              console.log('out');
            })
            .catch((err) => {
              console.error("Signout Error:"+err)
      });
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
                 style={{width:50,height:50}}
                 source={require('../assets/bixi-1024.png')}
               />
              </View>
            <Text style={styles.loginSubTitle}>Food is Good!</Text>

            <View style={styles.container}>
                <GoogleSigninButton
                    style={{width: 312, height: 48,padding:20,marginBottom:25}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this._signIn.bind(this)}
                />
                <LoginButton
                   publishPermissions={["publish_actions"]}
                   onLoginFinished={
                     (error, result) => {
                       if (error) {
                         alert("login has error: " + result.error);
                       } else if (result.isCancelled) {
                         alert("login is cancelled.");
                       } else {
                         AccessToken.getCurrentAccessToken().then(
                           (data) => {
                             console.log("Facebook accessToken"+data.accessToken.toString());
                               this.props.navigation.navigate('Tabs')
                           }
                         )
                       }
                     }
                   }
                   onLogoutFinished={() => alert("logout.")}/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{flex:1,alignItems:'flex-start',justifyContent: 'flex-end',color:'red'}}
                  onPress={() => (  this.props.navigation.navigate('Login'))}>
                Sign-In
                </Text>
                <Text style={{flex:1,alignItems:'flex-end',justifyContent: 'flex-end',color:'red'}}
                  onPress={() => Linking.openURL('http://google.com')}>
                Register
                </Text>
                </View>
                </View>

                </FadeInView>

                </ScrollView>
                </KeyboardAvoidingView>
    );
  }

}
