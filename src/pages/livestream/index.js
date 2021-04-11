import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import YouTube from 'react-native-youtube'
import { FullScren, Play, Pause, Sudahditonton} from '../../assets';
import { Back, Btn, Gap, Inputs } from '../../components';

const Livestream = ({navigation}) => {
  const [play,setPlay] = useState(false);
  const [fullsc,setFullsc] = useState(false);
  const [videoids,setVideoIds] = useState([]);
  const [playing,setPlaying] = useState('pxwk-TyS5xs');
  const [active,setActive] = useState(0)
  const [live,setLive] = useState(false);

  useEffect(()=>{
    const CalVideo = ()=>{
        const video = [
            {
              "id" : 1,
              "videoId" : "8ROgaHfLRq0",
              "title" : "INTRODUCTION - Membuat Sistem Login Lengkap dengan CODEIGNITER 3"
            },
            {
              "id" : 2,
              "videoId" : "cZKLecON8tA",
              "title" : "PERSIAPAN - Membuat Sistem Login Lengkap dengan CODEIGNITER 3"
            },
        ];
        setVideoIds(video);
      }
      
      CalVideo()
  },[])

  const playingVideo = (videoId,index) =>{
      setActive(index)
      setPlaying(videoId)
  } 

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
    <View style={styles.pages}>
        <View style={{backgroundColor: '#262F56',borderBottomLeftRadius: 25,borderBottomRightRadius: 25,marginBottom: 5}}>
            <Back onPress={()=>{navigation.goBack()}} type="back" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <YouTube
                videoId={playing} // The YouTube video ID
                play={play} // control playback of video with true/false
                fullscreen={fullsc} // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                apiKey="AIzaSyA8L7_GY20jdHE8YXtAgHyb4btnXPp4dN4"
                style={{ alignSelf: 'stretch', height: 280 }}
                controls={2}
            />
            <View style={{flex: 1, padding: 15}}>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity style={styles.btnLive}>
                        <Text style={{color: 'white'}}>Live</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.control}>
                    <TouchableOpacity onPress={palying} style={styles.btn}>
                        { play ? <Pause/> : <Play/> }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={contolScrren} style={styles.btn}>
                        <FullScren/>
                    </TouchableOpacity>
                </View>
                <Gap height={20} />
                <View>
                    <Inputs title="Question" placeholder="submit your question..." height={50} />
                    <Gap height={20} />
                    <Btn title="Send Message" height={44} type="btn-send" />
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Livestream

const styles = StyleSheet.create({
    btnLive:{ width: 50,height: 20,backgroundColor: 'red',justifyContent: 'center', alignItems: 'center',borderRadius: 3},
    title : {flex: 1,marginLeft: 10},
    pages: {flex: 1, backgroundColor: 'white'},
    judul: (active,index)=>({
      color : active === index ? 'white' : 'black'
    }),
    btn : {
        marginHorizontal: 10,
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nexplay: (active,index)=>({
        backgroundColor: active === index ? '#262F56' : '#F8B459',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    }),
    control: {flexDirection: 'row',justifyContent: 'center',marginTop: 20},
    
})
