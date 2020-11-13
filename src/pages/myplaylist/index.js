import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DuDrone, DuReact } from '../../assets'
import { Gap, List } from '../../components'

const Myplaylist = ({navigation}) => {
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        },5000)
    },[])
    return (
        <View style={styles.pages}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        !loader ?
                        <>
                        <Gap height={20} />
                        <List icon={DuDrone} onPress={()=>{navigation.navigate('ActionPlay')}} type="play-list" title="Fullstack Nuxt Js & Laravel Drone App" count="my-playlist" />
                        <Gap height={25} />
                        <List icon={DuReact} onPress={()=>{navigation.navigate('ActionPlay')}} type="play-list" title="Full stack React Native & Redux Chat App" count="my-playlist" />
                        </>
                        : 
                        <>
                        <Gap height={20} />
                        <List icon={DuDrone} onPress={()=>{navigation.navigate('ActionPlay')}} type="placeholder" title="Fullstack Nuxt Js & Laravel Drone App" count="my-playlist" />
                        <Gap height={25} />
                        <List icon={DuReact} onPress={()=>{navigation.navigate('ActionPlay')}} type="placeholder" title="Full stack React Native & Redux Chat App" count="my-playlist" />
                        </>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Myplaylist

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: '#262F56',
    },
    container:{
        flex: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'white',
        padding: 15
    }
})
