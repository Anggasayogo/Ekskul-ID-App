import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { IcCheck, IcLabel } from '../../assets'
import { Back, Btn, Gap } from '../../components'

const DetailCourse = ({navigation,route}) => {
    const logins = useSelector(state => state.loginReducer)
    const {id_playlist} = route.params;
    const [detail,setDetail] = useState('');
    const [idi,setIdi] = useState('');

    useEffect(()=>{
       const _getDetailsCourse = async ()=>{
            const api_token = logins?.data?.api_token
            const id_user = logins?.data?.data?.id_user
            const email = logins?.data?.email
           Axios.get(`https://service.ekskul.co.id/api/v1/playlists/${id_playlist}`,{
            headers: {"Authorization" : `Bearer ${api_token}`}
           })
           .then(res=>{
               setDetail(res.data.data)
               setIdi(id_user)
           })
       }
       _getDetailsCourse();
    },[])
    return (
        <>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.pages}>
            <ImageBackground source={{ uri : `https://service.ekskul.co.id/${detail.image}`}} style={styles.heroes}>
                <Gap height={15}/>
                <View style={styles.topback}>
                    <Back onPress={()=>{navigation.goBack()}}/>
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={15}/>
                    <View style={styles.title}>
                        <IcLabel/>
                        <View style={styles.judul}>
                            <Text style={styles.realjudul}>{detail.playlist_name}</Text>
                        </View>
                    </View>
                    <Gap height={40}/>
                    <View>
                        <Text style={styles.about}>About This Course ?</Text>
                        <Gap height={15} />
                        <Text style={styles.aboutContent}>{detail.about_playlist}</Text>
                    </View>
                    <Gap height={40} />
                    <View>
                        <Text style={styles.about}>What will you learn ?</Text>
                        <Gap height={15} />
                        <View style={styles.silabus}>
                            <IcCheck/>
                            <Text style={styles.titlesilabus}>{detail.silabus1}</Text>
                        </View>
                        <View style={styles.silabus}>
                            <IcCheck/>
                            <Text style={styles.titlesilabus}>{detail.silabus2}</Text>
                        </View>
                        <View style={styles.silabus}>
                            <IcCheck/>
                            <Text style={styles.titlesilabus}>{detail.silabus3}</Text>
                        </View>
                        <View style={styles.silabus}>
                            <IcCheck/>
                            <Text style={styles.titlesilabus}>{detail.silabus4}</Text>
                        </View>
                    </View>
                    <Gap height={20} />
                    <Btn title="Buy Course" type="btn-buy" height={43} onPress={()=>(navigation.navigate('Libtest',{
                        'id_playlist' : detail.id_playlist,
                        'id' : idi
                    }))} />
                    <Gap height={20} />
                </ScrollView>
            </View>
        </View>
        </>
    )
}

export default DetailCourse

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: 'white'
    },
    heroes:{
        width: '100%',
        height: 250
    },
    container:{
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -20,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    silabus:{
        flexDirection: 'row',
        marginVertical: 5
    },
    topback:{
        marginLeft: 15,
        paddingTop: 15
    },
    title:{
        flexDirection: 'row',
    },
    judul:{
        flex: 1,
        maxWidth: 250
    },
    realjudul:{
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        paddingLeft: 10
    },
    about:{
        fontSize: 14,
        fontWeight: '900',
        fontFamily: 'Nunito-Regular'
    },
    aboutContent:{
        fontSize: 13,
        fontFamily: 'Nunito-Light'
    },
    titlesilabus:{
        fontFamily: 'Nunito-Light',
        fontSize: 13,
    }
})
