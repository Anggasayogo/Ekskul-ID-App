import React from 'react'
import { Image, StyleSheet, Text,View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcSend, IcShopingCart } from '../../../assets'

const Btn = ({width,height,title,fontSize,fontWeight,onPress,type,icons}) => {
    if(type === 'btn-buy'){
        return <TouchableOpacity style={styles.btnbuy(width,height)} onPress={onPress}>
            <Text style={styles.titleshop}>{title}</Text>
            <View style={styles.cart}>
                <IcShopingCart/>
            </View>
        </TouchableOpacity>
    }
    if(type === 'btn-send'){
        return <TouchableOpacity style={styles.btnbuy(width,height)} onPress={onPress}>
            <Text style={styles.titleshop}>{title}</Text>
            <View style={styles.cart}>
                <IcSend/>
            </View>
        </TouchableOpacity>
    }
    if(type === 'btn-icon'){
       return <TouchableOpacity style={styles.btnic(width,height)} onPress={onPress}>
            <Image source={icons} style={styles.ic} />
        </TouchableOpacity>
    }
    return (
        <TouchableOpacity style={styles.btn(width,height)} onPress={onPress}>
            <Text style={styles.title(fontSize,fontWeight)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Btn

const styles = StyleSheet.create({
    btn : (width,height)=>({
        height: height,
        width: width,
        backgroundColor: '#F8B459',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    titleshop: {textAlign: 'center',flex: 1,paddingTop: 10, fontSize: 13, fontWeight: 'bold'},
    btnic : (width,height)=>({
        height: height,
        width: width,
        backgroundColor: '#262F56',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    btnbuy : (width,height)=>({
        height: height,
        width: width,
        backgroundColor: '#F8B459',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }),
    title: (fontSize,fontWeight)=>({
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontFamily: 'Nunito-Regular'
    }),
    ic:{
        width: 41,
        height: 38
    },
    cart: { width: 43, height: 43, backgroundColor: '#262F56',borderRadius: 10,justifyContent: 'center',alignItems: 'center'},
})
