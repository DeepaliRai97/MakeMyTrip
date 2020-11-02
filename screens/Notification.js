import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
//import stringsoflanguages from './screenStrings'; 
const Notification = (props) => {
    return (
        <View style={styles.container}>
          <Text>My Trip</Text>
          
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

  export default Notification;