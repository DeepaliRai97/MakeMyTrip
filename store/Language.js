import React, {Component, useState} from 'react';  
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';  
import { Navigation } from 'react-native-navigation';
 import stringsoflanguages from './screenStrings'; 
 import { observable, action } from 'mobx';

//export const JSON_Clicked_Item = setText(data);
 
class SettingScreen  {  
  @observable  JSON_Clicked_Item=data;
   @action.bound
   setText(data)  {
       stringsoflanguages.setLanguage(data);
       Navigation.push(props.componentId, {
        component: {
          name: 'Home',
          passProps: {
            JSON_Clicked_Item:data,
         }
        }
        
      });
     
      
     // Navigation.setDefaultOptions()
   }
  
}


//export default SettingScreen;



 const settingScreen = new SettingScreen();
// Create a React Context with the counter store instance.
export const SettingStoreContext = React.createContext(settingScreen);

