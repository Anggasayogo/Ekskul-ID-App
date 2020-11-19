import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IcSearch } from '../../../assets';
import { colors } from '../../../utils';
import { Gap } from '../../atom';
 
const Inputs = ({placeholder,title,type,height,onChangeText,value}) => {

    const [border,setBorder] = useState(colors.border)
    const onFocusForm = ()=>{
        setBorder(colors.text.secondary)
    }

    const onBlurForm = ()=>{
        setBorder(colors.border)
    }

    if(type === 'search'){
        return <View style={styles.wrapper}>
            <TextInput onFocus={onFocusForm}
                value={value}
                onChangeText={onChangeText} 
                onBlur={onBlurForm} 
                placeholder={placeholder} 
                style={styles.input(border)}
            />
            <IcSearch style={styles.icon} />
        </View>
    }

    if(type === 'password'){
        return <View>
            <Text style={styles.label}>{title}</Text>
            <Gap height={10}/>
            <TextInput onFocus={onFocusForm}
                value={value}
                onChangeText={onChangeText} 
                onBlur={onBlurForm} 
                placeholder={placeholder} 
                style={styles.inputan(height,border)} 
                secureTextEntry={true}
            />
        </View>
    }
    return (
        <View>
            <Text style={styles.label}>{title}</Text>
            <Gap height={10}/>
            <TextInput onFocus={onFocusForm}
                value={value}
                onChangeText={onChangeText} 
                onBlur={onBlurForm} 
                placeholder={placeholder} 
                style={styles.inputan(height,border)}
            />
        </View>
    )
}

export default Inputs

const styles = StyleSheet.create({
    inputan: (height,border)=>({
        borderColor: border,
        borderWidth: 1,
        height: height ? height : 45,
        padding: 10,
        borderRadius: 10
    }),
    input: (border)=>({
        borderWidth: 1,
        borderColor: border,
        borderBottomWidth: 3,
        height: 45,
        padding: 10,
        borderRadius: 30
    }),
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
