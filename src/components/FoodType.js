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
  Button
} from 'react-native';
import FadeInView from './FadeInView';
import { StackNavigator,Easing,Animated,TabNavigator,NavigationActions,StackRouter} from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class FoodType extends Component{

  constructor(props){
    super(props);
    this.state = {
      foodType:''
    };
  }

  static navigationOptions = {
     tabBarLabel: 'Cook',
     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     tabBarIcon: ({ tintColor }) => (
       <Icon name="fire" size={30} color="#228b22" />
     ),
   };
  postFood(){
    const navigateAction=NavigationActions.navigate({
      routeName:"ServeStack",
      params:{action:'postfood'}
    });
    this.props.navigation.dispatch(navigateAction);
  }

  orderFood(){

  }

  render(){
    return(


      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container}>
      <View accessible={true}>


    <FadeInView>
    <View>
    <Text style={{marginBottom:38,color:'#636e72',fontWeight:'bold',fontSize:40}}>What do you like?</Text>
    </View>
    <TouchableOpacity style={styles.buttonpost}  onPress={() => this.postFood()}>
      <Text style={styles.text}  > Post Food</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonorder}  onPress={() => this.orderFood()}>
      <Text style={styles.text}  > Order Food</Text>
    </TouchableOpacity>
      </FadeInView>

      </View>
      </KeyboardAvoidingView>


    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    padding:20
  },
  buttonpost: {
   alignItems: 'center',
   justifyContent:'center',
   backgroundColor: '#c23616',
   width:300,
   height:60,
   borderRadius:50,
   marginBottom:10,
   marginTop:10,marginLeft:10,
   marginRight:10
 },
 buttonorder: {
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#00b894',
  width:300,
  height:60,
  borderRadius:50,
  marginBottom:10,
  marginTop:10,marginLeft:10,
  marginRight:10
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
     fontSize:20,
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
