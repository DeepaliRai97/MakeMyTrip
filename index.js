/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import {BlogContext} from './screens/BlogContext';
//import './data/Icon' ;
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";



AppRegistry.registerComponent(appName, () => App);



// index.tsx
/*import { Navigation } from 'react-native-navigation';
import { CounterContextProvider } from './screens/CounterContext';
import { App } from './App';

Navigation.registerComponent(
  'App',
  () => (props) => (
    <CounterContextProvider>
      <App {...props} />
    </CounterContextProvider>
  ),
  () => App
);*/