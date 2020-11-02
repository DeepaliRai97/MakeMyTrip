import React from 'react';
import Nav from './navigation/Nav';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';


if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}

const App = () => {
 return (
    
  <Nav/>
  
  )
};
export default App;
