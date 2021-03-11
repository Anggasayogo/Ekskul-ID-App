import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { IcUser, IcEditprofile } from '../../assets'
import { Btn, Gap, Inputs } from '../../components'
import { apply } from 'osmicsx'

const EditProfile = ({navigation}) => {
    // const [ref,setRef] = useState(false)
    return (
        <View style={styles.pages}>
            <TouchableOpacity style={apply("absolute pl-16 pt-16 tems-center")}>
                <Image source={IcEditprofile} style={{width: 24, height: 24, borderRadius: 9999, backgroundColor: 'red', margin: 10}} />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Gap height={50}/>
                <View>
                    <View style={styles.hero}>
                        <Image source={IcUser} style={styles.imagehero}/>
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
        backgroundColor: '#F8B459',
        position: 'relative'
    },
    container:{
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imagehero:{
        width: 110,
        height: 106,
        borderRadius: 60,
    }
})
