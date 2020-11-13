import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import { Cards, Carousel, Gap, List } from '../../components'
import {
    DuDrone, 
    DuFulstackJs, 
    DumyBanner, 
    DuReact, 
    ImBanerSatu, 
    ImBanerDua, 
    IcPrograming, 
    IcBusines, 
    IcMusic
} from '../../assets';

const Home = ({navigation}) => {
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        },5000)
    },[])
    return (
        <View style={styles.pages}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={40} />
                    <Text style={{fontSize: 14,fontFamily: 'Nunito-Bold'}}>Hi! Welcome Back</Text>
                    <Gap height={20}/>
                    <View style={styles.wrapslide}>
                        {
                            !loader ? 
                            <Swiper autoplay={true} dotColor="white" >
                                <Image source={ImBanerSatu} style={styles.imageslide}/>
                                <Image source={ImBanerDua} style={styles.imageslide}/>
                                <Image source={DumyBanner} style={styles.imageslide}/>
                            </Swiper>
                            : <Carousel/>
                        }
                    </View>
                    <Gap height={20}/>
                    <Text style={{fontFamily: 'Nunito-Regular'}}>Top Rate</Text>
                    <Gap height={20}/>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            !loader ? 
                            <>
                            <Cards onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack Nuxt Js & Laravel Dron App" gambar={DuDrone} price="350.000" />
                            <Gap width={15}/>
                            <Cards onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack React Native & Redux Chat App" gambar={DuReact} price="400.000" />
                            <Gap width={15}/>
                            <Cards onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack  Javascript Mern Monggo" gambar={DuFulstackJs} price="450.000" /> 
                            </>
                            : 
                            <>
                            <Cards type="placeholder" width={115} onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack Nuxt Js & Laravel Dron App" gambar={DuDrone} price="350.000" />
                            <Gap width={15}/>
                            <Cards type="placeholder" width={115} onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack React Native & Redux Chat App" gambar={DuReact} price="400.000" />
                            <Gap width={15}/>
                            <Cards type="placeholder" width={115} onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack  Javascript Mern Monggo" gambar={DuFulstackJs} price="450.000" />
                            </>
                            
                        }
                    </ScrollView>
                    <Gap height={20}/>
                    <Text style={{fontFamily: 'Nunito-Regular'}}>Category Course</Text>
                    {
                        !loader ?
                        <>
                        <Gap height={20}/>
                        <List onPress={()=>{navigation.navigate('Categorycourse')}} title="Programing" count="17 course" icon={IcPrograming} />
                        <Gap height={20}/>
                        <List onPress={()=>{navigation.navigate('Categorycourse')}} title="Busines & Marketing" count="18 course" icon={IcBusines} />
                        <Gap height={20}/>
                        <List onPress={()=>{navigation.navigate('Categorycourse')}} title="Music" count="10 course" icon={IcMusic} />
                        <Gap height={20}/>
                        </>
                        :
                        <>
                        <Gap height={20}/>
                        <List type="placeholder" title="Programing" count="17 course" icon={IcPrograming} />
                        <Gap height={20}/>
                        <List type="placeholder" title="Busines & Marketing" count="18 course" icon={IcBusines} />
                        <Gap height={20}/>
                        <List type="placeholder" title="Music" count="10 course" icon={IcMusic} />
                        <Gap height={20}/>
                        </>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: '#262F56',
    },
    container:{
        flex: 1,
        padding: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white'
    },
    wrapslide:{
        height: 100,
    },
    imageslide: {width: '100%', height: 93, borderRadius: 5}
})
