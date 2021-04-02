import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { DuDrone, DuReact } from '../../assets'
import { Gap, List, Notfound } from '../../components'

const Categorycourse = ({navigation,route}) => {
    const logins = useSelector(state => state.loginReducer)
    const [loader,setLoader] = useState(true)
    const {id_category} = route.params;
    const [course,setCourse] = useState([]);
    const [data,setData] = useState(false)

    useEffect(()=>{
        const _detailsCategoryCourse = async ()=>{
            const api_token = logins?.data?.api_token
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
                            data === false ? (<Notfound/>) : (
                              <FlatList
                                  data={course}
                                  keyExtractor={(_,index)=> index.toString()}
                                  renderItem={({item})=>(
                                      <>
                                          <Gap height={20}/>
                                          <List 
                                          icon={`https://service.ekskul.co.id/${item?.image}`} 
                                          onPress={()=>{ navigation.navigate('DetailCourse',{ 'id_playlist' : item.id_playlist }) }}
                                          type="play-search" 
                                          title={`${item?.playlist_name}`}
                                          count={`${item?.category_name}`} 
                                          harga={item?.harga}
                                          />
                                      </>
                                  )}
                                />
                            )
                        : (<>
                        <Gap height={20} />
                        <List icon={DuDrone} onPress={()=>{navigation.navigate('DetailCourse')}} type="placeholder" title="Fullstack Nuxt Js & Laravel Drone App" count="my-playlist" />
                        <Gap height={25} />
                        <List icon={DuReact} onPress={()=>{navigation.navigate('DetailCourse')}} type="placeholder" title="Full stack React Native & Redux Chat App" count="my-playlist" />
                        </>)
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
