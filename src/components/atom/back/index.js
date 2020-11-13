import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BackWhite, IcBack } from '../../../assets'

const Back = ({onPress,type}) => {
    if(type === 'back'){
        return <TouchableOpacity onPress={onPress} style={styles.wrapper}>
            <BackWhite/>
            <Text style={{flex: 1, textAlign: 'center', color: 'white',fontFamily: 'Nunito-Regular'}}>Kembali</Text>
        </TouchableOpacity>
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <IcBack/>
        </TouchableOpacity>
    )
}

export default Back

const styles = StyleSheet.create({
    container:{
        width: 40,
        height: 42,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    wrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15
    }
})
