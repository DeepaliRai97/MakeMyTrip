import React,{useContext} from 'react';
import { View, Text, TouchableOpacity,Button ,Alert,StyleSheet} from 'react-native';
import Carousel from '../component/Carousel';
import {dummyData} from '../data/Data';
const { Navigation } = require('react-native-navigation');
import { SideMenuView } from "react-native-navigation-drawer-extension";
import { RNNDrawer } from "react-native-navigation-drawer-extension";
//import BlogContext from '../screens/BlogContext';
import stringsoflanguages from './screenStrings'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const HomeScreen = (props) => {
 
 return (
   <View >
     <SideMenuView
      style={{ flex: 1 }}
      left={() => RNNDrawer.showDrawer({
       id:'Profile',
       component: {
        name: "Profile",
       passProps: {
          direction: "left",
         parentComponentId: props.componentId,
},

}
})}
>
</SideMenuView>
  <Carousel data={dummyData}/>
<Text>{stringsoflanguages.notification}</Text>
<TouchableOpacity  onPress={()=>{ Navigation.push(props.parentComponentId, {
                component: {
                  name: 'Counter'
                }
              })}}>
                   <View>
                       
                      <Text>CounterScreen</Text>
               </View>
               </TouchableOpacity>
</View>
    );
  }
    
  const styles = StyleSheet.create({  
    welcome: {  
      fontSize: 20,  
      textAlign: 'center',  
      margin: 10,  
    }  ,
    menuWrapper:{
      marginTop:10,
  },
  menuItem:{
      flexDirection:'row',
      paddingVertical:15,
      paddingHorizontal:30,
  },
  menuItemText:{
      color:'#777777',
      marginLeft:20,
      fontWeight:'600',
      fontSize:16,
      lineHeight:26
  },
  component:{
      height:100,
      width:100,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center'
  } ,
  });  

export default HomeScreen;
 
  
