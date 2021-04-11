import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ImAuth } from '../../assets/images'
import { Btn, Gap } from '../../components'

const Autentic = ({navigation}) => {
    return (
        <View style={styles.pages}>
            <Image source={ImAuth} style={styles.hero} />
            <Gap height={50}/>
            <Btn 
                width={300} 
                height={45} 
                title="Login" 
                fontSize={18} 
                fontWeight="normal" 
                onPress={()=>{navigation.navigate('Login')}}
            />
            <Gap height={20}/>
            <Btn 
                width={300} 
                height={45} 
                title="Register" 
                fontSize={18} 
                fontWeight="normal" 
                onPress={()=>{navigation.navigate('Register')}}
            />
            <Gap height={20}/>
        </View>
    )
}

export default Autentic

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    container:{
        flexDirection: 'row'
    },
    hero:{
        width: '100%',
        height: 302,
    },
    icGoogle:{width: 46,height: 43}
})
