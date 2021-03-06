
import {StyleSheet} from 'react-native';
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#a4c400',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
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
  welcometext:{
    textShadowColor:'#34495e',
    color:'#fff',
    fontFamily:'Futura',
    fontSize:20
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
  closeButton:{
    marginLeft:0,
    width:50,
    height:50,
    marginTop:4,
    alignItems:'flex-start',
    justifyContent:'flex-start'
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
     fontSize:10,
     marginBottom:30,
     fontWeight:'bold'
  },
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#bdc3c7',
  }

});

export default styles;
