import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DuDrone, DuReact } from '../../assets'
import { Gap, List, Notfound } from '../../components'

const Categorycourse = ({navigation,route}) => {
    const [loader,setLoader] = useState(true)
    const {id_category} = route.params;
    const [course,setCourse] = useState([]);
    const [data,setData] = useState(false)

    useEffect(()=>{
        const _detailsCategoryCourse = async ()=>{
            const api_token = await AsyncStorage.getItem('api_token');
            Axios.get(`https://service.ekskul.co.id/api/v1/playlist/cat/${id_category}`,{
                headers: {"Authorization" : `Bearer ${api_token}`}  
            })
            .then(res=>{
                if(res.data.data.length === 0){
                    setData(false) 
                }else{
                    setData(true)
                    setCourse(res.data.data)
                }
                setLoader(false)
            })
        }
        _detailsCategoryCourse();
    },[])
    return (
        <View style={styles.pages}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        !loader ?
                        <>
                        {
                            <>
                              {
                                data === false ?
                                <>
                                  <Notfound/>
                                </>
                                :
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
                                            return (
                                                <>
                                                <Gap height={20} key={i} />
                                                <List 
                                                icon={`https://service.ekskul.co.id/${e.image}`} 
                                                onPress={()=>{ navigation.navigate('DetailCourse',{ 'id_playlist' : e.id_playlist }) }}
                                                type="play-search" 
                                                title={`${e.playlist_name}`}
                                                count={`${e.category_name}`} 
                                                harga={rupiah}
                                                />
                                                </>
                                            )
                                        })
                                    }
                                </>

                              }
                            </>
                        }
                        </>
                        : 
                        <>
                        <Gap height={20} />
                        <List icon={DuDrone} onPress={()=>{navigation.navigate('DetailCourse')}} type="placeholder" title="Fullstack Nuxt Js & Laravel Drone App" count="my-playlist" />
                        <Gap height={25} />
                        <List icon={DuReact} onPress={()=>{navigation.navigate('DetailCourse')}} type="placeholder" title="Full stack React Native & Redux Chat App" count="my-playlist" />
                        </>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Categorycourse

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: 'white',
    },
    container:{
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    }
})
