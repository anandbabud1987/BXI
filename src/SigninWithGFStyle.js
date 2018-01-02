
import {StyleSheet} from 'react-native';
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#a4c400',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  container1:{
    backgroundColor:'#a4c400',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding:20,
  },
  signinTitle:{
    backgroundColor:'#a4c400',
    justifyContent:'center'
  },
  closeButtonIcon:{
    textShadowColor:'#34495e',
    color:'#fff',
    marginLeft:0,
    width:50,
    height:50,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    backgroundColor:'#a4c400'

  },
  headerTitleStyle:{
    color:'white',
    fontWeight:'100',
    fontSize:40,
    fontFamily:'Futura',
    justifyContent: 'space-between'
  },
  image:{
    flex:1,
    backgroundColor:'#FFFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    //padding:20,
    width:50,
    height:50

  },
  button: {
   alignItems: 'center',
   justifyContent:'center',
   flex:1,
   backgroundColor: 'white',
   padding: 10,
   width:300,
   height:48,
   borderRadius:30,
   marginBottom:27
 },
 buttonLogin: {
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
    fontWeight:'bold',
    fontFamily:'Futura',
  },
  buttonText:{
    textShadowColor:'#f1c40f',
    color:'black',
    fontFamily:'Futura',
    fontWeight:'normal',
    fontSize:16
  },
  loginTitle:{
    textShadowColor:'#2c3e50',
     color:'#228b22',
     textAlign:'center',
     fontSize:50,
     fontWeight:'bold',
     textShadowRadius:10
  },
  loginSubTitle:{
    textShadowColor:'#27ae60',
     color:'white',
     textAlign:'center',
     fontSize:20,
     marginBottom:30,
     fontWeight:'bold',
     fontFamily:'Futura',
  },
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#bdc3c7',
  }

});

export default styles;
