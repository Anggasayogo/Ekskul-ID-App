import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { UserProfile } from '../../assets'
import { Btn, Gap, Inputs } from '../../components'

const EditProfile = ({navigation}) => {
    return (
        <View style={styles.pages}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Gap height={50}/>
                <View>
                    <View style={styles.hero}>
                        <Image source={UserProfile} style={styles.imagehero}/>
                    </View>
                    <Gap height={20} />
                    <Text style={styles.nama}>Angga Maulana</Text>
                    <Text style={styles.welcome}>Welcome Back !</Text>
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'white',padding: 15}}>
                <Gap height={30} />
                <Inputs title="Username" />
                <Gap height={20} /> 
                <Inputs title="Email" />
                <Gap height={20} /> 
                <Inputs title="Password" type="password" />
                <Gap height={20} /> 
                <Btn title="Update" height={45} />
            </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: 'white',
    },
    nama : {textAlign: 'center', fontSize: 18,},
    welcome: {textAlign: 'center', fontSize: 12,},
    hero:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 116,
        borderRadius: 60,
        backgroundColor: '#F8B459'
    },
    container:{
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
    },
    imagehero:{
        width: 110,
        height: 106,
        borderRadius: 60,
    }
})
