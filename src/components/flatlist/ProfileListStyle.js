import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    height:height,
    width:width,
    marginTop:100
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
   backgroundColor: '#FFFAFA',
   width:width,
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
    fontFamily:'Futura',
    borderTopRightRadius:0,
    borderBottomLeftRadius:0
  },
  text:{
    textShadowColor:'#34495e',
     color:'#fff',
     fontFamily:'Futura',
  },
  headerTitle1:{
    textShadowColor:'#2c3e50',
      alignItems:'flex-start',
     color:'#228b22',
     textAlign:'center',
     fontSize:40,
     padding:20,
     fontWeight:'300',
     fontFamily:'Futura',
     textShadowRadius:10
  },
  loginSubTitle:{
    textShadowColor:'#27ae60',
     color:'#c0392b',
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
