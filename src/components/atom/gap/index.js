import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gap = ({width,height}) => {
    return (
        <View style={styles.wg(width,height)}>
        </View>
    )
}

export default Gap

const styles = StyleSheet.create({
    wg : (width,height)=>(
        {
            width : width,
            height : height,
        }
    )
})
