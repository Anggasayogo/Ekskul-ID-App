import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import { useSelector, useDispatch } from 'react-redux'
import { Cards, Carousel, Gap, List } from '../../components'

const Home = ({navigation}) => {
    const stateGlobal = useSelector(state => state);
    const logins = useSelector(state => state.loginReducer)
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
        console.tron.log("Loginss",logins)
        const _validasisession = () =>{
            const isLogin = logins?.data?.api_token
            if(!isLogin){
                navigation.replace("Login")
            }
        }
        _validasisession();

        const _getbaner = async () => {
            const api_token = logins?.data?.api_token
            Axios.get('https://service.ekskul.co.id/api/v1/setings',{
                headers: {"Authorization" : `Bearer ${api_token}`}
            })
            .then(res=>{
                setBaner(res.data.data)
                setBanerLoader(false)
            })
        }
        _getbaner();

        const _getCourseToprate = async ()=>{
            const api_token = logins?.data?.api_token
            const id_user = await AsyncStorage.getItem('id_user')
            Axios.get(`https://service.ekskul.co.id/api/v1/playlist/${id_user}`,{
                headers: {"Authorization" : `Bearer ${api_token}`}
            })
            .then(res=>{
                setCourse(res.data.data);
                setLoadingCourse(false)
            })
        }
        _getCourseToprate()

        const _getCageories = async ()=>{
            const api_token = logins?.data?.api_token
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
                    <Text style={{fontSize: 18,fontFamily: 'Nunito-Bold'}}>Hi {logins?.data?.data?.name} Welcomeback!</Text>
                    <Gap height={15}/>
                    <View style={styles.wrapslide}>
                        {
                            !banerloader ? 
                            <Swiper autoplay={false} dotColor="white" >
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
                    <FlatList
                        data={course}
                        keyExtractor={(item,index)=> index.toString()}
                        horizontal={true}
                        renderItem={({item})=>
                            <>
                                <Cards 
                                    onPress={()=>{ navigation.navigate('DetailCourse',{ 'id_playlist' : item?.id_playlist }) }} 
                                    title={`${item.playlist_name}`} 
                                    gambar={`https://service.ekskul.co.id/${item?.image}`} 
                                    price={item?.harga} 
                                />
                                <Gap width={15}/>
                            </>
                        }
                        ListEmptyComponent={()=>
                            <>
                                <Cards type="placeholder" width={115} />
                                <Gap width={15}/>
                                <Cards type="placeholder" width={115} />
                                <Gap width={15}/>
                                <Cards type="placeholder" width={115} />
                            </>
                        }
                    />
                    <Gap height={20}/>
                    <Text style={{fontFamily: 'Nunito-Regular'}}>Category Course</Text>
                    <FlatList
                        data={category}
                        keyExtractor={(item,index)=> index.toString()}
                        renderItem={({item})=>
                            <>
                                <Gap height={15}/>
                                <List
                                    onPress={()=>{navigation.navigate('Categorycourse',{'id_category' : item.id_category})}} 
                                    title={item.category_name} 
                                    count="available" 
                                    icon={`https://service.ekskul.co.id/${item.icon_category}`} />
                                <Gap height={15}/>
                            </>
                        }
                        ListEmptyComponent={()=>
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
                    />
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
