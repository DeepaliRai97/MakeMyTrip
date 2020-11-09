import React from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';  
import stringsoflanguages from './screenStrings'; 
import {bottom} from '../screens/Bottom';

const SettingScreen = (props) => {
 const  changeLanguage = async(languageKey) => {
    stringsoflanguages.setLanguage(languageKey)
    Navigation.setRoot( bottom )
  
}
    return (
        <View>  
        <Text style={styles.welcome}>Hello World</Text> 
        <TouchableOpacity onPress={()=>{changeLanguage('hi');}}>
          <Text>Hindi</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>changeLanguage('en')}><Text>English</Text></TouchableOpacity>
      </View> 
        )

}
const styles = StyleSheet.create({  
    welcome: {  
      fontSize: 20,  
      textAlign: 'center',  
      margin: 10,  
    }
  });

export default SettingScreen;
 
/* using mobx */
  /*      
        import React from 'react';
import { Navigation } from 'react-native-navigation';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';  
import {SettingStoreContext} from '../store/SettingScreen';
import {bottom} from '../screens/Bottom';

const SettingScreen = (props) => {
  const {setText} = React.useContext(SettingStoreContext)

    return (
        <View>  
        <Text style={styles.welcome}>Hello World</Text> 
       <TouchableOpacity onPress={()=>{setText('hi');
         Navigation.setRoot( bottom );
        }}>
          <Text>Hindi</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setText('en');Navigation.setRoot( bottom );}}><Text>English</Text></TouchableOpacity>
      </View> 
        )

}

const styles = StyleSheet.create({  
    welcome: {  
      fontSize: 20,  
      textAlign: 'center',  
      margin: 10,  
    }
  });

export default SettingScreen;
 
*/