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
  FlatList,
  ItemSeparatorComponent

} from 'react-native';
import FadeInView from './FadeInView';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './style/ProfileStyle';
import SigninWithGF from './SigninWithGF';
import {GoogleSignin} from 'react-native-google-signin';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager
} = FBSDK;
export default class Profile extends Component{

  static navigationOptions = {
     tabBarLabel: 'Profile',
     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     tabBarIcon: ({ tintColor }) => (
       <Icon name="user" size={30} color={tintColor} />
     ),
   };

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


   _signOut(){


   }
   onPress(val){
     if(val==='signout'){
       this._signOut();
     }
   }
  render(){
    return(
      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container}>
          <View accessible={true}>
          <StatusBar
          barStyle="light-content"
          />

          <FadeInView>
              <View style={{borderWidth:1,borderColor:'black'}}>
              <View >
              <FlatList
                    data={require('../jsons/profile_list.json')}
                    renderItem=
                    {
                      ({item}) =>
                      <TouchableOpacity style={styles.item} onPress={this.onPress(item.onpress)}>
                      <View style={{flex:1,alignItems:'flex-start',justifyContent: 'flex-start'}}>


                          <Text style={styles.text}><Icon size={20} name={item.icon} color="black" style={{alignItems:'flex-end',justifyContent:'flex-end',marginRight:15}}/>   {item.key}</Text>
                        </View>

                      </TouchableOpacity>

                    }
                  />
                  </View>
                </View>
          </FadeInView>

          </View>
      </KeyboardAvoidingView>
      );
  }
}
