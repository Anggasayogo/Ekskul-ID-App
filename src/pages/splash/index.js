import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { IcLogo } from '../../assets'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Autentic')
        },3000)
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
