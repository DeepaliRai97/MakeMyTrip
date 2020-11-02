import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import stringsoflanguages from './screenStrings'; 
const MyTrip = () => {
    return (
        <View style={styles.container}>
          <Text>My Trip</Text>
          <Text>{stringsoflanguages.second}</Text>
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

  export default MyTrip