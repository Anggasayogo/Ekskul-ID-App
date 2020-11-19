import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import { Cards, Carousel, Gap, List } from '../../components'

const Home = ({navigation}) => {
    // banner
    const [baner,setBaner] = useState([]);
    const [banerloader,setBanerLoader] = useState(true)

    // course
    const [course,setCourse] = useState([]);
    const [loadingCourse,setLoadingCourse] = useState(true);

    // category
    const [category,setCategory] = useState([])
    const [loaderCatgory,setLoaderCategory] = useState(true)

    useEffect(()=>{
        const _validasisession = async ()=>{
            const isLogin = await AsyncStorage.getItem('api_token')
            if(!isLogin){
                navigation.replace("Login")
            }
        }
        _validasisession();

        const _getbaner = async () => {
            const api_token = await AsyncStorage.getItem('api_token')
            Axios.get('http://service.ekskul.co.id/api/v1/setings',{
                headers: {"Authorization" : `Bearer ${api_token}`}
            })
            .then(res=>{
                setBaner(res.data.data)
                setBanerLoader(false)
            })
        }
        _getbaner();

        const _getCourseToprate = async ()=>{
            const api_token = await AsyncStorage.getItem('api_token')
            Axios.get('https://service.ekskul.co.id/api/v1/playlist',{
                headers: {"Authorization" : `Bearer ${api_token}`}
            })
            .then(res=>{
                setCourse(res.data.data);
                setLoadingCourse(false)
            })
        }
        _getCourseToprate()

        const _getCageories = async ()=>{
            const api_token = await AsyncStorage.getItem('api_token')
            Axios.get('https://service.ekskul.co.id/api/v1/category',{
                headers: {"Authorization" : `Bearer ${api_token}`}
            })
            .then(res=>{
                setCategory(res.data.data)
                setLoaderCategory(false)
            })
        }
        _getCageories();
    },[])
    return (
        <View style={styles.pages}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={15} />
                    <Text style={{fontSize: 14,fontFamily: 'Nunito-Bold'}}>Hi! Welcome Back</Text>
                    <Gap height={15}/>
                    <View style={styles.wrapslide}>
                        {
                            !banerloader ? 
                            <Swiper autoplay={true} dotColor="white" >
                            {
                                baner.map((e,i)=>{
                                    return (
                                        <Image key={i} source={{uri: `https://service.ekskul.co.id/settings/${e.image_baner}` }} style={styles.imageslide}/>
                                    )
                                })
                            }
                            </Swiper>
                            : <Carousel/>
                        }
                    </View>
                    <Gap height={15}/>
                    <Text style={{fontFamily: 'Nunito-Regular'}}>Top Rate</Text>
                    <Gap height={15}/>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            ! loadingCourse? 
                            <>
                            {
                                course.map((e,i)=>{
                                    const bilangan = e.harga
                                    var	number_string = bilangan.toString(),
	                                sisa 	= number_string.length % 3,
	                                rupiah 	= number_string.substr(0, sisa),
	                                ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
		
                                    if (ribuan) {
	                                    separator = sisa ? '.' : '';
	                                    rupiah += separator + ribuan.join('.');
                                    }
                                    return(
                                        <>
                                        <Cards 
                                            key={i}
                                            onPress={()=>{ navigation.navigate('DetailCourse',{ 'id_playlist' : e.id_playlist }) }} 
                                            title={`${e.playlist_name}`} 
                                            gambar={`https://service.ekskul.co.id/${e.image}`} 
                                            price={rupiah} />
                                            <Gap width={15}/>
                                        </>
                                    )
                                })
                            }
                            </>
                            : 
                            <>
                            <Cards type="placeholder" width={115} />
                            <Gap width={15}/>
                            <Cards type="placeholder" width={115} />
                            <Gap width={15}/>
                            <Cards type="placeholder" width={115} />
                            </>
                            
                        }
                    </ScrollView>
                    <Gap height={20}/>
                    <Text style={{fontFamily: 'Nunito-Regular'}}>Category Course</Text>
                    {
                        !loaderCatgory ?
                        <>
                        {
                            category.map((e,i)=>{
                                return(
                                    <>
                                    <Gap height={15}/>
                                        <List
                                        key={i} 
                                        onPress={()=>{navigation.navigate('Categorycourse')}} 
                                        title={e.category_name} 
                                        count={e.created_at} 
                                        icon={`https://service.ekskul.co.id/${e.icon_category}`} />
                                    <Gap height={15}/>
                                    </>
                                )
                            })
                        }
                        </>
                        :
                        <>
                        <Gap height={20}/>
                        <List type="placeholder"/>
                        <Gap height={20}/>
                        <List type="placeholder"/>
                        <Gap height={20}/>
                        <List type="placeholder"/>
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
