import React, {Component,useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView ,Image} from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
const { Navigation } = require('react-native-navigation');
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IntroVideo =(props) => {
  let videoPlayer;
  const [currentTime,setCurrentTime] = useState(0);
  const [duration,setDuration] = useState(0);
  const [isFullScreen,setFullScreen] = useState(false);
  const [isLoading,setLoading]=useState(true);
  const [paused,setPaused]=useState(false);
  const [playerState,setPlayerState]=useState(PLAYER_STATES.PLAYING);
  const [screenType,setScreenType]=useState('contain')
  
 
 const onSeek = (seek) => {
    videoPlayer.seek(seek);
  };

 const  onPaused = (playerState) => {
    setPaused(!paused) ,
    setPlayerState(playerState)
    
  };

 const  onReplay = () => {
    setPlayerState( PLAYER_STATES.PLAYING );
    videoPlayer.seek(0);
  };

 const onProgress = (data) => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime( data.currentTime );
    }
  };
  
 const onLoad = (data) => {setDuration(data.duration),setLoading(false)}
  
 const onLoadStart = (data) => setLoading( true );
  
 const onEnd = () => setPlayerState(PLAYER_STATES.ENDED );
  
 const onError = () => alert('Oh! ', error);
  
 const onFullScreen = () => {
    if (screenType == 'contain')
      setScreenType( 'cover' );
    else setScreenType('contain' );
  };

const onSeeking = (currentTime) => setCurrentTime(currentTime );

  
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
        //onBuffer={onBuffer}                
          onError={onError}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={paused}
          ref={(videoPlayers) => (videoPlayer = videoPlayers)}
          resizeMode={screenType}
          onFullScreen={isFullScreen}
          source={require('../assets/video/Video1.mp4')} 
          style={styles.mediaPlayer}
          volume={10}
        />
        <MediaControls
          duration={duration}
          isLoading={isLoading}
          mainColor="blue"
          onFullScreen={onFullScreen}
          onPaused={onPaused}
          onReplay={onReplay}
          onSeek={onSeek}
          onSeeking={onSeeking}
          playerState={playerState}
          progress={currentTime}
        />
        <View style={styles.skip}>
        <TouchableOpacity onPress={() => Navigation.push(props.componentId, {
                        component: {
                                     name: 'SignIn'
                                   }
                     })}>
        <Text style={styles.skipText}>Skip <FontAwesome name="step-forward"
              size ={20}
              color="blue"/></Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.bottomText}>
        <Image source={require('../assets/images/logo.jpg')}
            style={{height: 70, width: 70,borderRadius:50,marginLeft:20}}/>
            <Text style={styles.title}>Title:{' '}<Text style={styles.titleText}>It's All About Travel</Text>
            </Text>
            </View>
            <Text style={styles.description}>
              Description:{' '}
              <Text style={styles.titleText}>
                Nurtured from the seed of a single great idea - to empower the traveller -
                MakeMyTrip is a pioneer in India’s online travel industry. 
                Founded in the year 2000 by Deep Kalra, 
                MakeMyTrip came to life to empower the Indian traveller with instant bookings and comprehensive choices. 
                The company initiated its journey serving the US-India travel market offering a range of best-value products and services powered by technology and round-the-clock customer support.
                After consolidating its position in the market as a brand recognised for its reliability and transparency, MakeMyTrip.
              </Text>
              
             </Text>
             <View style={styles.roam}>
             <Text style={styles.roamText} >Dil Toh Roaming Hai !</Text>
             </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    marginTop:10
  },
  itemSeparator:{  
    height: 1,  
    width: "100%",  
    backgroundColor: "#000",  
  },
  btn:{
    backgroundColor:'blue',
    flex:1,
    height:100,
    backgroundColor:'#8080ff',
    alignItems:'center',
    justifyContent:'center',
  },
  btnText:{
    fontSize:22
  },
  title:{
    color:"#800080",
    fontWeight:'bold',
    marginLeft:30,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    fontSize:15,
    marginBottom:20,
    backgroundColor:'#737CA1',
    padding:10,
    marginRight:90
  },
  titleText:{
    color:'black',
    marginRight:20
  },
  bottomText:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-between'
  },
  description:{
    color:"#800080",
    fontWeight:'bold',
    
  },
  skip:{
    alignItems:'flex-end',
    marginTop:250,
    color:'blue',
  
  },
  skipText:{
    color:'blue',
    fontSize:20,
    fontWeight:'bold',
    marginRight:10
  },
  roam:{
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'bold',
    fontSize:24
  },
  roamText:{
    marginTop:20,
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20,
    color:"#800080"
  }
});
export default IntroVideo;


