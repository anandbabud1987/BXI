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
  Linking
} from 'react-native';
import FadeInView from './FadeInView';
import styles from './style/ChatStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Chat extends Component{

  static navigationOptions = {
     tabBarLabel: 'Chat',
     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     tabBarIcon: ({ tintColor }) => (
       <Icon name="comments" size={30} color={tintColor} />
     ),
   };


  login(){

  }

  render(){
    return(


      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container}>
      <View accessible={true}>
      <StatusBar
    barStyle="light-content"
    />

    <FadeInView>
        <Text>Profile6666 </Text>
      </FadeInView>

      </View>
      </KeyboardAvoidingView>


    );
  }
}
