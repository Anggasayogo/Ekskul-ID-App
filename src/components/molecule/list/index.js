import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcRate, IcRight } from '../../../assets';
import { Gap } from '../../atom';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { apply } from '../../../themes/OsmiProvider';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { formatMoney } from '../../../Helper/NumberFormat';

const List = ({icon,title,count,onPress,type,fontSize,width,harga}) => {
    if(type === 'placeholder'){
        return(
            <SkeletonPlaceholder>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ width: 50, height: 50, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                    <View style={{ width: 120, height: 15, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 80, height: 15, borderRadius: 4 }}/>
                    </View>
                </View>
            </SkeletonPlaceholder>
        )
    }
    if(type === 'placeholder-play'){
        return(
            <SkeletonPlaceholder>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ width: 30, height: 30, borderRadius: 12 }} />
                <View style={{ marginLeft: 20 }}>
                    <View style={{ width: 200, height: 15, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 100, height: 15, borderRadius: 4 }}/>
                    </View>
                </View>
            </SkeletonPlaceholder>
        )
    }

    if(type === 'play-list'){
        return <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.heroes}>
                <Image source={icon} style={styles.heroes}/>
            </View>
            <View style={styles.wraper}>
                <Gap height={5}/>
                <Text style={{fontSize: 14,fontFamily: 'Nunito-Regular'}}>{title}</Text>
                <Gap height={5}/>
                <Text style={{fontSize: 10}}>{count}</Text>
            </View>
            <IcRight/>
        </TouchableOpacity>
    }
    if(type === 'play-search'){
        return <TouchableNativeFeedback onPress={onPress} style={apply("justify-between row items-center bg-white shadow py-1")}>
            <View style={styles.heroes}>
                <Image source={{ uri : icon}} style={styles.heroes}/>
            </View>
            <View style={styles.wraper}>
                <Gap height={5}/>
                <Text style={{fontSize: 12,fontFamily: 'Nunito-Bold'}}>{title}</Text>
                <Gap height={4}/>
                <Text style={{fontSize: 11}}>{formatMoney(harga)}</Text>
                <Gap height={5}/>
                <Text style={{fontSize: 10}}>{count} Video</Text>
                <View style={{flexDirection: 'row',alignItems: 'center',marginLeft: -5}}>
                    <IcRate/>
                    <IcRate/>
                    <IcRate/>
                    <IcRate/>
                </View>
            </View>
            <IcRight/>
        </TouchableNativeFeedback>
    }

    if(type === 'profile'){
        return <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.hero(type)}>
            <Image source={icon} style={{height: 24,width: 24}}/>
        </View>
        <View style={styles.wraper}>
            <Gap height={5}/>
            <Text style={styles.titles(fontSize)}>{title}</Text>
            <Gap height={5}/>
            <Text style={{fontSize: 9}}>{count}</Text>
        </View>
        <IcRight/>
    </TouchableOpacity>
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.hero(type)}>
                <Image source={{ uri : icon }} style={{height: 24,width: 24}}/>
            </View>
            <View style={styles.wraper}>
                <Gap height={5}/>
                <Text style={styles.titles(fontSize)}>{title}</Text>
                <Gap height={5}/>
                <Text style={{fontSize: 9}}>{count}</Text>
            </View>
            <IcRight/>
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    titles : (fontSize)=>({fontSize: fontSize ? fontSize : 14, fontFamily: 'Nunito-Regular'}),
    wraper:{
        paddingHorizontal: 10,
        flex: 1,
    },
    container:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    hero:(type)=>({
        width: 40,
        height: 38,
        backgroundColor: type === 'profile' ? null : '#E3E7FF',
        borderRadius: 60/2,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    heroes :{
        width: 115,
        height: 73,
        maxWidth: 115,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
})
