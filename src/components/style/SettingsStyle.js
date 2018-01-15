import {StyleSheet,Dimensions} from 'react-native';
const {width,height} =Dimensions.get('window');
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  header:{
    flex:1,
    backgroundColor:'white',
    color:'white',
    padding:5
  },
  listitem:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10
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
    color:'black',
    fontSize:15,
    fontFamily:'Futura'
  },
  item: {
    padding: 10,
    height: 50,
    borderBottomWidth:1,
    width:width-10,
    marginRight:30,
    marginLeft:30,
    marginTop:20,
    marginBottom:20
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
  },
  separator:{
    borderWidth:1
  }

});
export default styles;