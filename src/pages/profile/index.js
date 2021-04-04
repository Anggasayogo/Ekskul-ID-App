import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { useSelector } from 'react-redux'
import { IcShare, IcEditprofile, IcLogout, IcTicket, IcUser } from '../../assets'
import { Gap, List } from '../../components'

const Profile = ({navigation}) => {
    const logins = useSelector(state => state.loginReducer)
    const [nama,setNama] = useState('');
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        console.log(logins?.data)
        const _getname = async ()=>{
            const name = logins?.data?.data?.name
            setNama(name);
        }
        _getname();
    },[])
    const logout = async ()=>{
        setLoading(true)
        const api_token = logins?.data.api_token
        Axios.get('http://service.ekskul.co.id/api/v1/logout',{ 
            headers: {"Authorization" : `Bearer ${api_token}`
        }})
        .then(res=>{
            setLoading(false)
            navigation.replace('Login');
        })
        .catch(err=>{
            console.log(err)
            setLoading(false)
        })
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('api_token');
        await AsyncStorage.removeItem('id_user');
    }
    return (
        <View style={styles.pages}>
            {
                loading && <Spinner visible={true}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
            }
            <View style={styles.container}>
                <Gap height={50}/>
                <View>
                    <View style={styles.hero}>
                        <Image source={IcUser} style={styles.imagehero}/>
                    </View>
                    <Gap height={20} />
                    <Text style={styles.nama}>{nama}</Text>
                    <Text style={styles.welcome}>Welcome Back !</Text>
                </View>
                <Gap height={80} />
                <List fontSize={14} onPress={()=>{navigation.navigate('EditProfile')}} type="profile" count="edit for change new profile" title="Edit Your Profile" icon={IcEditprofile} />
                <Gap height={25}/>
                <List fontSize={14} type="profile" count="share your profile on sosial media" title="Shre Youre Profile" icon={IcShare} />
                <Gap height={25}/>
                <List fontSize={14} onPress={()=>{navigation.navigate('Beforestream')}} type="profile" count="live online  event sminar for everyone" title="Events" icon={IcTicket} />
                <Gap height={25}/>
                <List fontSize={14} onPress={logout} type="profile" count="logout for destroying your session" title="Logout"
                icon={IcLogout} />
                <Gap height={25} />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: '#262F56',
    },
    nama : {textAlign: 'center', fontSize: 18,fontFamily: 'Nunito-SemiBold'},
    welcome: {textAlign: 'center', fontSize: 12,},
    hero:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 116,
        borderRadius: 60,
        backgroundColor: '#F8B459'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    imagehero:{
        width: 110,
        height: 106,
        borderRadius: 60,
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
})
