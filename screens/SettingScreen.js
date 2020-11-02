import React from 'react';
import { Navigation } from 'react-native-navigation';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';  
import stringsoflanguages from './screenStrings'; 
import AsyncStorage from '@react-native-community/async-storage';

const SettingScreen = (props) => {
 const  changeLanguage = async(languageKey) => {
    stringsoflanguages.setLanguage(languageKey)
   // await AsyncStorage.setItem("JSON_Clicked_Item",languageKey)
    Navigation.push(props.componentId, {
      component: {
        name: 'Home',
       /* passProps: {
          JSON_Clicked_Item:languageKey,
      }*/
      }
      
    });
   
 }
    return (
        <View>  
        <Text style={styles.welcome}>Hello World</Text> 
        <TouchableOpacity onPress={()=>changeLanguage('hi')}><Text>Hindi</Text></TouchableOpacity>
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
 