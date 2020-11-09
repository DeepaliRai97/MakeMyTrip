import React, {Component, useState} from 'react';  
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';  
import { Navigation } from 'react-native-navigation';
import stringsoflanguages from '../screens/screenStrings'; 
import { observable, action } from 'mobx';

 
class SettingScreen  {  
  @observable  JSON_Clicked_Item=data;
   
  @action setText = (data) => {
       stringsoflanguages.setLanguage(data);
  }
}


//export default SettingScreen;



 const settingScreen = new SettingScreen();
// Create a React Context with the counter store instance.
export const SettingStoreContext = React.createContext(settingScreen);

