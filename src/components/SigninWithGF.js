import React,{Component} from 'react';
import {View,TouchableOpacity,Text,KeyboardAvoidingView,Platform,ScrollView,StatusBar,Image,Linking,ActivityIndicator,Modal,TextInput} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../SigninWithGFStyle';
import FadeInView from './FadeInView';
const FBSDK = require('react-native-fbsdk');
import Login from './Login';
const {
  LoginManager,
  LoginButton,
  AccessToken,
  FB,
  GraphRequestManager, GraphRequest
} = FBSDK;
  var visibility=false;

const user = GoogleSignin.currentUser();
export default class SigninWithGF extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '' ,
      password:''
    };
  }
  close(){
    console.log("Close");
    visibility=false;
    this.setState({visibility:false})
  }
  static navigationOptions = {
     title: 'BiXi',
     headerStyle:styles.signinTitle,
     headerTitleStyle:styles.headerTitleStyle,
   }
  _signInGoogle(){
    LoginManager.logOut();
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

openModal(){
  console.log("Close");
  visibility=true;
  this.setState({visibility:true})
}

_signInFaceBook(){
  this._signOutGoogle();
  LoginManager.logInWithReadPermissions(['public_profile','email','user_location','user_birthday']).then(
  ((result)=>{
      console.log(result);
      if(result.isCancelled){

      }
      else{
        console.log();
        this.setState({user: user});
        AccessToken.getCurrentAccessToken().then(
     (data) => {
       let accessToken = data.accessToken;
       console.log(accessToken.toString());

       const responseInfoCallback = (error, result) => {
         if (error) {
           console.log(error)
           console.log('Error fetching data: ' + error.toString());
         } else {
           console.log(result)
           console.log('Success fetching data: ' + result.toString());
         }
       }

       const infoRequest = new GraphRequest(
         '/me',
         {
           accessToken: accessToken,
           parameters: {
             fields: {
               string: 'email,name,first_name,middle_name,last_name,picture'
             }
           }
         },
         responseInfoCallback
       );

       // Start the graph request.
       new GraphRequestManager().addRequest(infoRequest).start();

     });
        this.props.navigation.navigate('Tabs');

      }
  })
);
}

_signOutGoogle(){
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
                     style={{width:75,height:75}}
                     source={require('../assets/bixi-1024.png')}
                   />
            </View>
            <Text style={styles.loginSubTitle}>Food is Good!</Text>

            <View style={styles.container}>
                  <TouchableOpacity style={styles.button}  onPress={this._signInFaceBook.bind(this)}>
                    <Text style={styles.buttonText}  ><Icon name="facebook" size={25} color="#3b5999" />  Continue with Facebook</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}  onPress={this._signInGoogle.bind(this)}>
                    <Text style={styles.buttonText}  ><Icon name="google" size={25} color="#E44134" />  Sign in with Google</Text>
                  </TouchableOpacity>
                  <View style={{flex: 1, flexDirection: 'row',marginTop:5,marginRight:0}}>
                    <Text style={{flex:1,alignItems:'flex-end',justifyContent: 'flex-end',color:'white'}}
                      onPress={() => (  this.openModal())}>
                    Sign-In
                    </Text>
                  </View>
                </View>

    </FadeInView>
    </ScrollView>
      <Modal animationType='slide' transparent={false} visible={visibility} onRequestClose={()=>{}}>
        <View style={styles.container1}>
        <TouchableOpacity onPress={()=>this.close()}  style={styles.closeButton} >
          <Icon style={styles.closeButtonIcon} name='close' size={30} />
        </TouchableOpacity>
        </View>
        <Login/>
      </Modal>
    </KeyboardAvoidingView>

    );
  }

}
