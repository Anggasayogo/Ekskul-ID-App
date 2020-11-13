import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import YouTube from 'react-native-youtube'

const App = () => {
  const [play,setPlay] = useState(false);
  const [fullsc,setFullsc] = useState(false);

  const palying = ()=>{
    if(play === false){
      setPlay(true)
    }else{
      setPlay(false)
    }
  }

  const contolScrren = ()=>{
    if(fullsc === false){
      setFullsc(true)
    }else{
      setFullsc(false)
    }
  }
  return (
    <View>
      <YouTube
        videoId="KVZ-P-ZI6W4" // The YouTube video ID
        play={play} // control playback of video with true/false
        fullscreen={fullsc} // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        apiKey="AIzaSyA8L7_GY20jdHE8YXtAgHyb4btnXPp4dN4"
        style={{ alignSelf: 'stretch', height: 300 }}
        controls={2}
      />
      <View style={{flexDirection: 'row',justifyContent: 'center',marginTop: 50}}>
        <TouchableOpacity style={styles.btn}>
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={palying} style={styles.btn}>
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={contolScrren} style={styles.btn}>
          <Text>FullScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Previous</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  btn : {marginHorizontal: 10, width: 70,height: 30, backgroundColor: 'red'}
})
