import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { IcBahasa, IcBell, IcEngineer, IcMultimedia, IcMusik, IcSerch } from '../../assets/icon'
import { List } from '../../components'

// styles
import { apply } from '../../themes/OsmiProvider'

const Home = props => {
    const { navigation } = props
    const banner = ["https://suneducationgroup.com/wp-content/uploads/2019/02/FInal-27-Website.jpeg","https://suneducationgroup.com/wp-content/uploads/2019/07/Expo-General.jpeg","https://suneducationgroup.com/wp-content/uploads/2019/11/1280-x-720.jpg","https://suneducationgroup.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-12-at-9.04.12-PM-1.jpeg"]
    const [data,setData] = useState([
        {
            name : 'React Naative App',
            price : 250000,
            count : 100,
        },{
            name : 'Vue Js',
            price : 200000,
            count : 100,
        },{
            name : 'Pintar React Js',
            price : 300000,
            count : 100,
        }
    ])

    const RenderPromo = ({ item, index }) => {
        return (
          <TouchableOpacity key={index} activeOpacity={0.9} onPress={() => navigation.navigate('PromoResult')}>
            <Image source={{ uri : item }} resizeMode="cover" style={apply("h-140 w-full-30 ml-4 mr-3 rounded-5 self-center justify-center items-center bg-dark-200")} />
          </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={apply("flex bg-white")}>
            <ScrollView>
                <View style={apply("row items-center px-4 py-5")}>
                    <View style={apply("flex")}>
                        <Text style={apply("font-medium text-18")}>Hi, Angga Maulana</Text>
                        <Text style={apply("font-regular text-sm")}>Welcomeback!</Text>
                    </View>
                    <Image source={IcBell} style={apply("w-28 h-28 mr-2")}/>
                </View>
                <View style={apply("px-4")}>
                    <TouchableNativeFeedback onPress={()=> alert("sEARCH")} style={apply("bg-gray-200 full self-center rounded-lg p-3 mt-3 row items-center")}>
                        <Image source={IcSerch} style={apply("w-24 h-24")}/>
                        <Text style={apply("text-md font-regular text-gray-default ml-3")}>Cari Course</Text>
                    </TouchableNativeFeedback>
                </View>
                <View style={apply("py-7")}>
                    <SwiperFlatList
                        data={banner}
                        autoplay
                        autoplayDelay={2}
                        autoplayLoop
                        showPagination
                        paginationStyle={apply('pb-0')}
                        paginationDefaultColor={apply('black-soft')}
                        paginationActiveColor={apply('primary')}
                        paginationStyleItem={apply("w-10 h-10 rounded-full mb--5")}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => <RenderPromo item={item}/>}
                    />
                </View>
                <View style={apply("px-4 py-3")}>
                    <View style={apply("row items-center")}>
                        <Text style={apply("font-medium text-16 flex")}>Find by category</Text>
                        <Text style={apply("font-medium text-14 text-primary")}>See all</Text>
                    </View>
                    <View style={apply("row items-center my-3 bg-white py-3 px-3 rounded-lg justify-between")}>
                        <View style={apply("items-center")}>
                            <View style={apply("w-60 h-60 bg-category rounded-full items-center justify-center")}>
                                <Image source={IcBahasa} style={apply("w-60 h-60")}/>
                            </View>
                            <Text style={apply("font-regular mt-1")}>Bahasa</Text>
                        </View>
                        <View style={apply("items-center")}>
                            <View style={apply("w-60 h-60 bg-category rounded-full items-center justify-center")}>
                                <Image source={IcMultimedia} style={apply("w-60 h-60")}/>
                            </View>
                            <Text style={apply("font-regular mt-1")}>Multimedia</Text>
                        </View>
                        <View style={apply("items-center")}>
                            <View style={apply("w-60 h-60 bg-category rounded-full items-center justify-center")}>
                                <Image source={IcMusik} style={apply("w-60 h-60")}/>
                            </View>
                            <Text style={apply("font-regular mt-1")}>Music</Text>
                        </View>
                        <View style={apply("items-center")}>
                            <View style={apply("w-60 h-60 bg-category rounded-full items-center justify-center")}>
                                <Image source={IcEngineer} style={apply("w-60 h-60")}/>
                            </View>
                            <Text style={apply("font-regular mt-1")}>Teknik</Text>
                        </View>
                    </View>
                </View>
                <View style={apply("px-4")}>
                    <View style={apply("row items-center")}>
                        <Text style={apply("font-medium text-16 flex")}>Popular course</Text>
                        <Text style={apply("font-medium text-14 text-primary")}>See all</Text>
                    </View>
                    <View style={apply("row items-center my-3")}>
                        <FlatList
                            data={!data ? [] : data }
                            keyExtractor={(item,index)=> index.toString()}
                            renderItem={({item})=>(
                                <List 
                                    icon={`https://buildwithangga.com/storage/assets/thumbnails/thumbnail_kelas_blender3d.jpg`}
                                    type="play-search" 
                                    title={`${item.name}`}
                                    count={`${item.count}`} 
                                    harga={`Rp ${item?.price}`}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})

// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
// import Swiper from 'react-native-swiper'
// import { useSelector, useDispatch } from 'react-redux'
// import { Cards, Carousel, Gap, List } from '../../components'
// import { getBanerActions } from '../../redux/action/UtilsAction'

// const Home = ({navigation}) => {
//     const stateGlobal = useSelector(state => state);
//     const logins = useSelector(state => state.loginReducer)
//     // banner
//     const [baner,setBaner] = useState([]);
//     const [banerloader,setBanerLoader] = useState(true)

//     // course
//     const [course,setCourse] = useState([]);
//     const [loadingCourse,setLoadingCourse] = useState(true);

//     // category
//     const [category,setCategory] = useState([])
//     const [loaderCatgory,setLoaderCategory] = useState(true)
//     const dispatch = useDispatch()

//     useEffect(()=>{
//         const _validasisession = () =>{
//             const isLogin = logins?.data?.data?.token
//             if(!isLogin){
//                 navigation.replace("Login")
//             }
//         }
//         // _validasisession();

//         // const _getbaner = async () => {
//         //     const api_token = logins?.data?.data?.token
//         //     Axios.get('https://service.ekskul.co.id/api/v1/setings',{
//         //         headers: {"Authorization" : `Bearer ${api_token}`}
//         //     })
//         //     .then(res=>{
//         //         setBaner(res.data.data)
//         //         setBanerLoader(false)
//         //     })
//         // }
//         // _getbaner();
//         dispatch(getBanerActions())

//         const _getCourseToprate = async ()=>{
//             const api_token = logins?.data?.data?.token
//             const id_user = await AsyncStorage.getItem('id_user')
//             Axios.get(`https://service.ekskul.co.id/api/v1/playlist/${id_user}`,{
//                 headers: {"Authorization" : `Bearer ${api_token}`}
//             })
//             .then(res=>{
//                 setCourse(res.data.data);
//                 setLoadingCourse(false)
//             })
//         }
//         _getCourseToprate()

//         const _getCageories = async ()=>{
//             const api_token = logins?.data?.data?.token
//             Axios.get('https://service.ekskul.co.id/api/v1/category',{
//                 headers: {"Authorization" : `Bearer ${api_token}`}
//             })
//             .then(res=>{
//                 setCategory(res.data.data)
//                 setLoaderCategory(false)
//             })
//         }
//         _getCageories();
//     },[])
//     return (
//         <View style={styles.pages}>
//             <View style={styles.container}>
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                     <Gap height={15} />
//                     <Text style={{fontSize: 18,fontFamily: 'Nunito-Bold'}}>Hi {logins?.data?.data?.name} Welcomeback!</Text>
//                     <Gap height={15}/>
//                     <View style={styles.wrapslide}>
//                         {
//                             !banerloader ? 
//                             <Swiper autoplay={false} dotColor="white" >
//                             {
//                                 baner.map((e,i)=>{
//                                     return (
//                                         <Image key={i} source={{uri: `https://service.ekskul.co.id/settings/${e.image_baner}` }} style={styles.imageslide}/>
//                                     )
//                                 })
//                             }
//                             </Swiper>
//                             : <Carousel/>
//                         }
//                     </View>
//                     <Gap height={15}/>
//                     <Text style={{fontFamily: 'Nunito-Regular'}}>Top Rate</Text>
//                     <Gap height={15}/>
//                     <FlatList
//                         data={course}
//                         keyExtractor={(item,index)=> index.toString()}
//                         horizontal={true}
//                         renderItem={({item})=>
//                             <>
//                                 <Cards 
//                                     onPress={()=>{ navigation.navigate('DetailCourse',{ 'id_playlist' : item?.id_playlist }) }} 
//                                     title={`${item.playlist_name}`} 
//                                     gambar={`https://service.ekskul.co.id/${item?.image}`} 
//                                     price={item?.harga} 
//                                 />
//                                 <Gap width={15}/>
//                             </>
//                         }
//                         ListEmptyComponent={()=>
//                             <>
//                                 <Cards type="placeholder" width={115} />
//                                 <Gap width={15}/>
//                                 <Cards type="placeholder" width={115} />
//                                 <Gap width={15}/>
//                                 <Cards type="placeholder" width={115} />
//                             </>
//                         }
//                     />
//                     <Gap height={20}/>
//                     <Text style={{fontFamily: 'Nunito-Regular'}}>Category Course</Text>
//                     <FlatList
//                         data={category}
//                         keyExtractor={(item,index)=> index.toString()}
//                         renderItem={({item})=>
//                             <>
//                                 <Gap height={15}/>
//                                 <List
//                                     onPress={()=>{navigation.navigate('Categorycourse',{'id_category' : item.id_category})}} 
//                                     title={item.category_name} 
//                                     count="available" 
//                                     icon={`https://service.ekskul.co.id/${item.icon_category}`} />
//                                 <Gap height={15}/>
//                             </>
//                         }
//                         ListEmptyComponent={()=>
//                             <>
//                                 <Gap height={20}/>
//                                 <List type="placeholder"/>
//                                 <Gap height={20}/>
//                                 <List type="placeholder"/>
//                                 <Gap height={20}/>
//                                 <List type="placeholder"/>
//                                 <Gap height={20}/>
//                             </>
//                         }
//                     />
//                 </ScrollView>
//             </View>
//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({
//     pages:{
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     container:{
//         flex: 1,
//         padding: 15,
//         borderBottomLeftRadius: 20,
//         borderBottomRightRadius: 20,
//         backgroundColor: 'white'
//     },
//     wrapslide:{
//         height: 100,
//     },
//     imageslide: {width: '100%', height: 93, borderRadius: 5}
// })
