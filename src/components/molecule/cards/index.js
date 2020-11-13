import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IcRate } from '../../../assets';
import { Gap } from '../../atom';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Cards = ({onPress,gambar,title,price,type,types,width}) => {
    if(type === 'placeholder'){
        return(
       <SkeletonPlaceholder>
        <View style={{alignItems: "center" }}>
          <View style={styles.heroimage(types)} />
          <View style={{ marginTop: 10 }}>
            <View style={{ width: width, height: 20, borderRadius: 4 }} />
            <View
              style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
        )
    }

    return (
        <TouchableOpacity style={styles.card(types)} onPress={onPress}>
            <Image source={gambar} style={styles.heroimage(types)} />
            <View style={{flexDirection: 'row', maxWidth: 114}}>
                <IcRate/>
                <IcRate/>
                <IcRate/>
                <IcRate/>
            </View>
            <Gap height={5}/>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{title}</Text>
                <Gap height={5}/>
                <Text style={styles.price}>Rp {price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Cards

const styles = StyleSheet.create({
    title: {fontSize: 11,fontFamily: 'Nunito-SemiBold'},
    card: (types)=>({
        borderWidth: 1,
        borderColor: "0 4 4 rgba(0, 0, 0, 0.15)",
        borderBottomWidth: 3,
        borderRadius: 5,
        height: types == 'search' ? 160 : 165,
        width: types == 'search' ? 150 : 114,
        backgroundColor: 'white',
        maxWidth:  types == 'search' ? 150 : 114,
    }),
    heroimage:(types)=>({width: types == 'search' ? 150 : 115 ,height: 73, borderRadius: 2}),
    wrapper: {paddingHorizontal: 5},
    price : {fontSize: 8}

})
