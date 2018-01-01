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
  FlatList,
  Linking
} from 'react-native';
import FadeInView from './FadeInView';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { List, ListItem ,Header} from 'react-native-elements'
const PROFILE_LIST=require('../jsons/profile_list.json');


export default class Profile extends Component{

  static navigationOptions = {
     tabBarLabel: 'Profile',
     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     tabBarIcon: ({ tintColor }) => (
       <Icon name="user-o" size={30} color="silver" />
     ),
   };


  login(){

  }

  render(){
    return(



      <View accessible={true}>


    <FadeInView>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
        <List containerStyle={{marginBottom: 20}}>
    {
      PROFILE_LIST.map((l, i) => (
        <ListItem
          titleStyle={{color:'silver',fontFamily:'Futura',height:30,alignItems:'center',justifyContent:'center',
          marginTop:30,marginLeft:30}}
          key={i}
          title={l.key}
          onPress={()=>this.props.navigation.navigate('Login')}
        />
      ))
    }
  </List>
      </FadeInView>

      </View>



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
     fontSize:110,
     fontWeight:'bold',
     textShadowRadius:10
  },
  loginSubTitle:{
    textShadowColor:'#27ae60',
     color:'#c0392b',
     textAlign:'center',
     fontSize:25,
     marginBottom:30,
     fontWeight:'bold'
  },
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#bdc3c7',
  }

});
