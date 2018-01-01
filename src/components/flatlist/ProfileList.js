import React,{Component} from 'react';
import {View,FlatList,Text,TouchableHighlight,ScrollView,Button} from 'react-native';
const PROFILE_LIST=require('../../jsons/profile_list.json');
import styles from './ProfileListStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { List, ListItem } from 'react-native-elements'
export default class ProfileList  extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '' ,
      password:''
    };
  }
  componentDidMount(){

  }
  render(){
    return (


      <List containerStyle={{marginBottom: 20}}>
  {
    PROFILE_LIST.map((l, i) => (
      <ListItem
        titleStyle={{color:'red',fontFamily:'Futura',height:40,alignItems:'center',justifyContent:'center',marginTop:30,marginRight:20}}
        key={i}
        title={l.key}
      />
    ))
  }
</List>


    );
  }

}
