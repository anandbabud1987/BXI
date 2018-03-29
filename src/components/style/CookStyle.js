import {StyleSheet,Dimensions,Platform} from 'react-native';
const {width,height} =Dimensions.get('window');
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
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
  container1:{
    backgroundColor:'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding:1,
  },
  closeButtonIcon:{
    textShadowColor:'white',
    color:'#34495e',
    marginLeft:0,
    width:50,
    height:50,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    backgroundColor:'white',
    marginTop:15,
    marginLeft:5

  },
  button: {
   alignItems: 'center',
   justifyContent:'center',
   backgroundColor: 'green',
   padding: 10,
   width:300,
   height:45,
   borderRadius:10,
   marginBottom:20,
   marginTop:20,
   marginLeft:20,
   marginRight:20
 },
  textinput:{
    ...Platform.select({
     ios: {
       backgroundColor:'white',
       width:300,
       height:45,
       textAlign:'left',
       marginBottom:15,
       marginLeft:15,
       marginRight:15,
       marginTop:15,
       borderColor:'#d35400',
       borderWidth:0,
       borderBottomWidth:1
     },
     android: {
       backgroundColor:'white',
       width:300,
       height:45,
       textAlign:'left',
       marginBottom:15,
       marginLeft:15,
       marginRight:15,
       marginTop:15,
       borderColor:'#d35400',
       borderWidth:0,
       borderBottomWidth:1
     }
   })


  },
  text:{
    textShadowColor:'#34495e',
    color:'black',
    fontSize:15,
    padding:2,
    marginLeft:10,
    fontFamily:'Futura'
  },
  textButton:{
    textShadowColor:'#34495e',
     color:'#fff',
     fontSize:20,
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
  title:{
    textShadowColor:'#2c3e50',
     color:'#228b22',
     textAlign:'center',
     fontSize:25,
     fontWeight:'300',
     fontFamily:'Futura',
     textShadowRadius:10,
     marginBottom:10,
     marginTop:10,
     marginLeft:10,
     marginRight:10
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
