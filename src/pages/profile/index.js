import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { UserProfile, IcShare, IcEditprofile, IcLogout, IcTicket } from '../../assets'
import { Gap, List } from '../../components'

const Profile = ({navigation}) => {
    return (
        <View style={styles.pages}>
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
                <Gap height={80} />
                <List fontSize={14} onPress={()=>{navigation.navigate('EditProfile')}} type="profile" count="edit for change new profile" title="Edit Your Profile" icon={IcEditprofile} />
                <Gap height={25}/>
                <List fontSize={14} type="profile" count="share your profile on sosial media" title="Shre Youre Profile" icon={IcShare} />
                <Gap height={25}/>
                <List fontSize={14} onPress={()=>{navigation.navigate('Beforestream')}} type="profile" count="live online  event sminar for everyone" title="Events" icon={IcTicket} />
                <Gap height={25}/>
                <List fontSize={14} type="profile" count="logout for destroying your session" title="Logout"
                icon={IcLogout} />
                <Gap height={25} />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: '#262F56',
    },
    nama : {textAlign: 'center', fontSize: 18,fontFamily: 'Nunito-SemiBold'},
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
        flex: 1,
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    imagehero:{
        width: 110,
        height: 106,
        borderRadius: 60,
    }
})
