import React,{Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

export default class App extends Component{
  render(){ 
    return(
    <View style={styles.container}>
    <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        onBuffer={this.onBuffer}                
        onError={this.videoError}             
        style={styles.backgroundVideo}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        fullscreen={true}
       />
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
  	flex:1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});