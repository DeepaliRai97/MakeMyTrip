import React from 'react';
import LocalizedStrings from 'react-native-localization';
//import LocalizedStrings from 'react-native-localization';
import hindi from '../data/hi';
import english from '../data/en';

const strings = new LocalizedStrings({
    "hi":hindi,
    "en":english
})

export default strings;

/*const strings = new LocalizedStrings({
    "hi":{
        first:"क्या हाल है",
        second:'आपका स्वास्थ्य कैसा है?',
        setting:'स्थापना',
        notification:"अधिसूचना",
        rate:'हमें रेटिंग दें',
        shortlist:'मेरी शॉर्टलिस्ट',
        redeem:'कूपन रिडीम कराएं',
        quiz:'प्रश्नोत्तरी'
    },
    "en":{
        first:"How Are You?",
        second:"I am good",
        setting:"Settings",
        notification:"Notification",
        rate:"Rate Us",
        shortlist:'My Shortlists',
        redeem:'Redeem Coupon',
        quiz:'Quiz Zone'
    }
});*/
