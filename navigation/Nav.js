const { Navigation } = require('react-native-navigation');
const React = require('react');
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AsyncStorage from '@react-native-community/async-storage';
import IntroVideo from '../screens/IntroVideo';
import SettingScreen from '../screens/SettingScreen';
import { RNNDrawer, SideMenuView } from "react-native-navigation-drawer-extension";
import Notification from '../screens/Notification';
import MyTrip from '../screens/MyTrip';
import Offers from '../screens/Offers';
import {LocalizationProvider} from '../context/LocalizationContext'
import CounterScreen from '../screens/CounterScreen'


HomeScreen.options = {
    topBar: {
      visible:false
    }
  }
MyTrip.options = {
  topBar: {
    visible:false
  },
}
Offers.options = {
  topBar: {
    visible:false
  },
}
SignIn.options = {
    topBar: {
      visible:false
    }
  };
  SignUp.options = {
    topBar: {
     visible:false
    }
  };
  IntroVideo.options = {
    topBar: {
      title: {
        text: 'IntroVideo',
        color: 'white'
      },
      background: {
        color: '#4d089a'
      }
    }
  };
  
Navigation.registerComponent('SignIn', () => SignIn);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('IntroVideo',()=>IntroVideo);
Navigation.registerComponent('Settings',()=>SettingScreen);
//Navigation.registerComponent('Content',()=>ContentScreen);
Navigation.registerComponent('MyTrip', () => MyTrip);
Navigation.registerComponent('Offers', () => Offers);
Navigation.registerComponent('Notification', () => Notification);
Navigation.registerComponent('BlogContext', () => BlogContext);
Navigation.registerComponent('Counter', () => CounterScreen);
//Navigation.registerComponent('Bottom', () => BottomTabs);
Navigation.registerComponent("Profile", () => RNNDrawer.create(ProfileScreen));

/*Navigation.registerComponent(
  'Offers',
  () => (props) => (
    <LocalizationProvider>
      <Offers {...props} />
    </LocalizationProvider>
  ),
  () => Offers
);*/
Navigation.events().registerAppLaunchedListener(async() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'IntroVideo'
              }
            }
          ]
        },
      },
    
      
      
    });
  });



  