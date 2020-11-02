import React, {Component, useState,useContext} from 'react';  
import {StyleSheet,View,SafeAreaView, TouchableOpacity,Button,Image,ImageBackground, Alert} from 'react-native';
import{ Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper';
const { Navigation } = require('react-native-navigation');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import stringsoflanguages from './screenStrings'; 
import ImagePicker from "react-native-image-picker";
import * as firebase from 'firebase';
import {LocalizationContext} from '../context/LocalizationContext'


const ProfileScreen = (props)=>{
  const {translations} = useContext(LocalizationContext);

   const signOutUser = () => {
    Navigation.push(props.parentComponentId, {
      component: {
        name: 'SignIn',
        options: {
          bottomTabs: {
            visible: false
          },
        }
      }
    });
    firebase.auth().signOut().catch(error=>{
      Alert.alert(error.message)
    })
   
  }
 const [email,setEmail] = useState('');
 firebase.auth().onAuthStateChanged(user=>{
  if(user){
    setEmail(user.email)
  }else{
    return false;
  }
}
)
const [filePath,setFilePath] = useState({})
   const chooseFile = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
       
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let source = response;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
           setFilePath(source)
          }
          })
    }

   return (  
      <View>  
          <TouchableOpacity onPress={chooseFile.bind(this)}>
                     <View style={styles.component}>
                       <ImageBackground source={{
                        uri:'data:image/jpeg;base64,' + filePath.data,
                       }}
                       style={{height:100,width:100,backgroundColor:'#000000',borderRadius:50}}
                       imageStyle={{borderRadius:50}}
                       
                       //color="#000000"
                       >
                        </ImageBackground>
                      </View>
                      <Text>Hi! {email}</Text>
                    </TouchableOpacity>
        <View style={styles.menuWrapper}>
               <TouchableOpacity onPress={()=>{ Navigation.push(props.parentComponentId, {
                component: {
                  name: 'Settings',
                  options: {
                    bottomTabs: {
                      visible: false
                    },
                  }
                }
              })}}>
                   <View style={styles.menuItem}>
                       <FontAwesome
                name="gear"
                color="#05375a"
                size={25} />
                       <Text style={styles.menuItemText}>{stringsoflanguages.setting}</Text>
                       </View>
               </TouchableOpacity>
               <TouchableOpacity  onPress={()=>{ Navigation.push(props.parentComponentId, {
                component: {
                  name: 'Notification'
                }
              })}}>
                   <View style={styles.menuItem}>
                       <AntDesign
                name="notification"
                color="#05375a"
                size={25} />
                      <Text style={styles.menuItemText}>{stringsoflanguages.notification}</Text>
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
                   <View style={styles.menuItem}>
                       <FontAwesome
                name="star-o"
                color="#05375a"
                size={25} />
                      <Text style={styles.menuItemText}>{stringsoflanguages.rate}</Text>
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
                   <View style={styles.menuItem}>
                       <FontAwesome
                name="heart"
                color="#05375a"
                size={25} />
               <Text style={styles.menuItemText}>{stringsoflanguages.shortlist}</Text>
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
                   <View style={styles.menuItem}>
                       <FontAwesome
                name="credit-card"
                color="#05375a"
                size={25} />
                  <Text style={styles.menuItemText}>{stringsoflanguages.redeem}</Text>
               </View>
               </TouchableOpacity>
               <TouchableOpacity>
                   <View style={styles.menuItem}>
                       <FontAwesome
                name="file-text-o"
                color="#05375a"
                size={25} />
                  <Text style={styles.menuItemText}>{stringsoflanguages.quiz}</Text>
                </View>
               </TouchableOpacity>
               
               <TouchableOpacity  onPress={()=>signOutUser()}>
                   <View>
                   <Text>Logout</Text>
                </View>
               </TouchableOpacity>
              
           </View>
          
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

export default ProfileScreen;