import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DuDrone, DuFulstackJs, DuReact } from '../../assets'
import { Cards, Gap, Inputs } from '../../components'

const Search = ({navigation}) => {
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        },5000)
    },[])
    return (
        <View style={styles.pages}>
            <View style={styles.wrapper}>
                <Inputs type="search" placeholder="Search course.." />
                <Gap height={30} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        {
                            !loader ?
                            <>
                            <Cards types="search" onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack Nuxt Js & Laravel Dron App" gambar={DuDrone} price="350.000"  />
                            <Cards types="search" onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack  Javascript Mern Monggo" gambar={DuFulstackJs} price="450.000"/>
                            </>
                            : 
                            <>
                            <Cards type="placeholder" width={150} types="search" onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack Nuxt Js & Laravel Dron App" gambar={DuDrone} price="350.000"  />
                            <Cards type="placeholder" width={150} types="search" onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack  Javascript Mern Monggo" gambar={DuFulstackJs} price="450.000"/>
                            </>
                        }
                    </View>
                    <Gap height={10}/>
                    <View style={styles.container}>
                        {
                            !loader ?
                            <>
                            <Cards types="search" onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack React Native & Redux Chat App" gambar={DuReact} price="400.000"  />
                            </>
                            : 
                            <>
                            <Cards type="placeholder" width={150} types="search" onPress={()=>{navigation.navigate('DetailCourse')}} title="Full stack React Native & Redux Chat App" gambar={DuReact} price="350.000"  />
                            </>
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: '#262F56',
    },
    wrapper:{
        backgroundColor: 'white',
        flex: 1,
        padding: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    }
})
