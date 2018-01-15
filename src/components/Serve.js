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
  ScrollView,
  Button
} from 'react-native';
import FadeInView from './FadeInView';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './style/CookStyle';
import BiXI18N from './BiXI18N';
import { FormLabel, FormInput ,FormValidationMessage,Card} from 'react-native-elements'
export default class Serve extends Component{

  static navigationOptions = {
     tabBarLabel: 'Cook',
     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     tabBarIcon: ({ tintColor }) => (
       <Icon name="free-code-camp" size={30} color={tintColor} />
     ),
   };

   constructor(props){
     super(props);
     this.state={
       language:'en',
       name_of_food:''
     };
   }

  render(){
    return(


      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios') ? 'padding':  null} style={styles.container}>
      <ScrollView accessible={true}
      
      >
      <StatusBar
        barStyle="light-content"
        />
        <Text style={styles.title}> {BiXI18N('cook',this.state.language)}</Text>

        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.textinput}
          underlineColorAndroid='transparent'
          autoCorrect={false}

          />

          <Text style={styles.text}>Price in Rs</Text>
          <TextInput
            underlineColorAndroid='transparent'
            autoCorrect={false}
            keyboardType='numeric'
            maxLength={5}

            style={styles.textinput}
            />

            <Text style={styles.text}>Ingredients</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              maxLength={200}
              underlineColorAndroid='transparent'
              autoCorrect={false}
              maxLength={5}

              style={styles.textinput}
              />

      </ScrollView>
      </KeyboardAvoidingView>


    );
  }
}
