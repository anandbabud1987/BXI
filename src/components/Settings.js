import React,{Component} from 'react';
import {View,Switch} from 'react-native';
import styles from './style/SettingsStyle';
export default class Settings extends Component{
  setSwithVal(){

  }
  render(){
    return(
        <View style={styles.container}>
          <Switch onValueChange={()=>{this.setSwithVal()}}/>
        </View>
    );
  }
}
