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
  ItemSeparatorComponent,
  Image

} from 'react-native';
import FadeInView from './FadeInView';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './style/ProfileStyle';
import SigninWithGF from './SigninWithGF';
import {GoogleSignin} from 'react-native-google-signin';
import {Card,ListItem,List,Header,Rating} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager
} = FBSDK;
const PROFILE_DATA=require('../jsons/profile_list.json');
const PROFILE_PIC="";
const FIRST_NAME="";
const LAST_NAME="";
const EMAIL="";
export default class Profile extends Component{

  static navigationOptions = ({ navigation }) => ({
   title: 'Profile',
   tabBarLabel: 'Profile',
   // Note: By default the icon is only shown on iOS. Search the showIcon option below.
   tabBarIcon: ({ tintColor }) => (
     <Icon name="user" size={30} color={tintColor} />
   ),
 });



   constructor(props){
     super(props);
     this.state = {

     };
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
           //PROFILE_PIC=this.navigation.state.user;
           console.log("profile pick "+PROFILE_PIC)
   }


   _signOut(){


   }
   onPressButton(val){
     console.log(val)
     if(val==='settings'){
      console.log('settings pressed');
      const navigateAction=NavigationActions.navigate({
        routeName:"Login"
      });
      this.props.navigation.dispatch(navigateAction);


     }
   }
  render(){
     const { params } = this.props.navigation.state.params;
     if(this.props.navigation.state.params && this.props.navigation.state.params.signinType==='google'){
      PROFILE_PIC=this.props.navigation.state.params.user.photo;
      FIRST_NAME=this.props.navigation.state.params.user.givenName;
      LAST_NAME=this.props.navigation.state.params.user.familyName;
      EMAIL=this.props.navigation.state.params.user.email;
    }
    else if (this.props.navigation.state.params && this.props.navigation.state.params.signinType==='facebook'){
     PROFILE_PIC=this.props.navigation.state.params.result.picture.data.url;
     FIRST_NAME=this.props.navigation.state.params.result.first_name;
     LAST_NAME=this.props.navigation.state.params.result.last_name;
     EMAIL=this.props.navigation.state.params.result.email;
   }
     console.log('In Profile');
     console.log(PROFILE_PIC);
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
          <View style={{flexDirection:'row',marginRight:10,marginLeft:10,marginTop:10,marginBottom:10}}>
              <Image
                 style={{width: 75, height: 75,borderRadius:40}}
                 source={{uri: PROFILE_PIC}}
             />
             <Text style={{fontSize:30,flex:1,fontWeight:'300',alignItems:'center',justifyContent:'center',
           marginLeft:10,fontFamily:'Futura'}}>{FIRST_NAME+' '+LAST_NAME}</Text>
         </View>
          <List containerStyle={styles.listitem}>
              {
                PROFILE_DATA.map((item, i) => {
                    return (
                      <ListItem
                          key={i}
                          component={TouchableOpacity
                          }
                          title={item.key}
                          titleStyle= { {color: 'black',textShadowColor:'#34495e',fontSize:15,fontFamily:'Futura'}}
                          leftIcon={{name: item.icon,type:item.icontype}}
                          onPress={()=>this.onPressButton(item.onpress)}
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
