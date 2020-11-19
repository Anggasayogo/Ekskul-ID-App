import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DuDrone, DuReact } from '../../assets'
import { Gap, Inputs, List } from '../../components'

const Search = ({navigation}) => {
    const [loader,setLoader] = useState(true)
    const [course,setCourse] = useState([])
    useEffect(()=>{
        const _getCourseToprate = async ()=>{
            const api_token = await AsyncStorage.getItem('api_token')
            Axios.get('https://service.ekskul.co.id/api/v1/playlist',{
                headers: {"Authorization" : `Bearer ${api_token}`}
            })
            .then(res=>{
                setCourse(res.data.data);
                setLoader(false)
            })
        }
        _getCourseToprate()
    },[])
    return (
        <View style={styles.pages}>
            <View style={styles.wrapper}>
                <Inputs type="search" placeholder="Search course.." />
                <Gap height={10} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        !loader ?
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
                                        <Gap height={20} />
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
                        : 
                        <>
                        <Gap height={20} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        <Gap height={20} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        </>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: '#262F56',
    },
    wrapper:{
        backgroundColor: 'white',
        flex: 1,
        padding: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    }
})
