import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { IcLogo } from '../../assets'

const Splash = ({navigation}) => {
    useEffect(()=>{
        const _validasisession = async ()=>{
            const isLogin = await AsyncStorage.getItem('api_token')
            if(!isLogin){
                navigation.replace("Autentic")
            }else{
                navigation.replace('MainApp')
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
