import React,{useEffect,useContext}from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {LocalizationContext} from '../context/LocalizationContext'
import stringsoflanguages from './screenStrings'; 
import AsyncStorage from '@react-native-community/async-storage'

const Offers = (props) => {
 /* useEffect(()=>{getChangeLanguage();},[])
 const getChangeLanguage = async() => {
  const val = await AsyncStorage.getItem('JSON_Clicked_Item');
  console.log(val)
 }*/
return (
        <View style={styles.container}>
        <Text>Offers</Text>
          <Text>{stringsoflanguages.first}</Text>
        </View>
        
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });

  export default Offers;

  