import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { IcLogo } from '../../assets'

const Splash = ({navigation}) => {
    const logins = useSelector(state => state.loginReducer)
    
    useEffect(()=>{
        const _validasisession = async ()=>{
            const isLogin = logins?.data?.api_token
            if(!isLogin){
                setTimeout(()=>{
                    navigation.replace("Autentic")
                },7000)
            }else{
                setTimeout(()=>{
                    navigation.replace('MainApp')
                },7000)
            }
        }
        _validasisession();
    },[])
    return (
        <View style={styles.pages}>
            <Image source={IcLogo} style={styles.logo}/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
    },
    logos:{
        width: '100%',
    },
    logo: {width: 200,height: 70}
})
