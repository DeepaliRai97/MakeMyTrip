import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Button ,Alert,ImageBackground} from 'react-native';
const { Navigation } = require('react-native-navigation');
import * as firebase from 'firebase';
const SignUp = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const userSignUp = (email,password) => {
        console.log(email)
        firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
            Alert.alert('Account Created Succesfully')
            Navigation.push(props.componentId, {
                component: {
                  name: 'SignIn'
                }
              })
          }).catch(error=>{Alert.alert(error.message)})
    }

   
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text_header}>Make  <Image source={require('../assets/images/logo.jpg')} 
         style={{height: 70, width: 70,borderRadius:50,marginLeft:20}}/> Trip !</Text>
        </View>
        <View style={styles.footer}>
        <View style={styles.action}>
        <TextInput 
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => setEmail(email)} />
        </View>
        <View style={styles.action}>
        <TextInput 
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry
              onChangeText={password => setPassword(password)} />
        </View>
        <View style={styles.button}>
            <TouchableOpacity  onPress={()=>userSignUp(email,password)}
              style={styles.signIn}>
              <Text style={styles.textSign}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUp} onPress={()=>{ Navigation.push(props.componentId, {
                component: {
                  name: 'SignIn'
                }
              })}}>
              <Text style={styles.textSignUp}>Already Have An Account? Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#003366'
    },
    header:{
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
    },
    footer:{
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    text_header:{
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    text_footer:{
      color: '#05375a',
      fontSize: 18,
      marginTop: 35
    },
    action:{
      flexDirection: 'row',
      marginTop: 10,
    },
    textInput:{
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a'
    },
    button:{
      alignItems: 'center',
      marginTop: 50,
    },
    signIn:{
      borderWidth: 40,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: '#003366',
      marginTop: 15
    },
    textSign:{
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff'
    },
    textSignUp:{
      color:'black',
      fontWeight:'bold',
      fontSize:15
    },
    signUp:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
      
})

export default SignUp;