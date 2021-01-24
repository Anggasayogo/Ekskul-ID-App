import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {DuNotfound} from '../../../assets';

const Notfound = () => {
    return (
        <View style={styles.container}>
            <Image source={DuNotfound} style={styles.icon} />
        </View>
    )
}

export default Notfound

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        height: 200,
        width: 200
    }
})
