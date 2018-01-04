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


   _signOut(){
         GoogleSignin.signOut()
               .then(() => {
                 console.log('out');
               })
               .catch((err) => {
                 console.error("Signout Error:"+err)
         });
           LoginManager.logOut();
             this.props.navigation.navigate('SigninWithGF');

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
              <View style={styles.container}>
              <FlatList
                    data={require('../jsons/profile_list.json')}
                    renderItem=
                    {
                      ({item}) =>
                      <TouchableOpacity style={styles.item} onPress={this.onPress(item.onpress)}>
                          <Text >{item.key}</Text>
                      </TouchableOpacity>

                    }
                  />
                </View>
          </FadeInView>

          </View>
      </KeyboardAvoidingView>
      );
  }
}
