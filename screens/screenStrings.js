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

