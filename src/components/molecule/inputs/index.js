import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Gap } from '../../atom'
import {IcSearch} from '../../../assets';
 
const Inputs = ({placeholder,title,type,height}) => {
    if(type === 'search'){
        return <View style={styles.wrapper}>
            <TextInput placeholder={placeholder} style={styles.input}/>
            <IcSearch style={styles.icon} />
        </View>
    }

    if(type === 'password'){
        return <View>
            <Text style={styles.label}>{title}</Text>
            <Gap height={10}/>
            <TextInput placeholder={placeholder} style={styles.inputan(height)} secureTextEntry={true}/>
        </View>
    }
    return (
        <View>
            <Text style={styles.label}>{title}</Text>
            <Gap height={10}/>
            <TextInput placeholder={placeholder} style={styles.inputan(height)}/>
        </View>
    )
}

export default Inputs

const styles = StyleSheet.create({
    inputan: (height)=>({
        borderColor: '#E9E9E9',
        borderWidth: 1,
        height: height ? height : 45,
        padding: 10,
        borderRadius: 10
    }),
    input:{
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderBottomWidth: 3,
        height: 45,
        padding: 10,
        borderRadius: 30
    },
    label:{
        fontFamily: 'Nunito-Regular',
        fontSize: 13,
        paddingLeft: 2
    },
    wrapper: {
        position: 'relative',
    },
    icon:{
        position: 'absolute',
        marginTop: 15,
        left: '90%'
    }
})
