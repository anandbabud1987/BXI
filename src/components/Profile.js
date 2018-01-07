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
import {Card,ListItem,List,Header,Rating} from 'react-native-elements';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager
} = FBSDK;
const PROFILE_DATA=require('../jsons/profile_list.json');
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
      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container} >

            <Header
                  backgroundColor='#a4c400'
                  centerComponent={{ text: 'Profile',
                              style: { color: 'black',textShadowColor:'#34495e',fontSize:25,fontFamily:'Futura'}
                      }}
                  />
          <StatusBar
          barStyle="light-content"
          />

          <FadeInView>
          <List containerStyle={styles.listitem}>
              {
                PROFILE_DATA.map((item, i) => {
                    return (
                      <ListItem
                          key={i}
                          title={item.key}
                          titleStyle= { {color: 'black',textShadowColor:'#34495e',fontSize:15,fontFamily:'Futura'}}
                          leftIcon={{name: item.icon,type:item.icontype}}
                        />
                    );
                  })
              }
            </List>
            <Card>
            <Rating showRating ratingColor='#3498db' fractions={1} startingValue={5} type="heart" />
            </Card>
          </FadeInView>

      </KeyboardAvoidingView>
      );
  }
}
