import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DuDrone, IcLabel, IcCheck } from '../../assets'
import { Back, Btn, Gap } from '../../components'

const DetailCourse = ({navigation}) => {
    return (
        <View style={styles.pages}>
            <ImageBackground source={DuDrone} style={styles.heroes}>
                <Gap height={15}/>
                <View style={styles.topback}>
                    <Back onPress={()=>{navigation.goBack()}}/>
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={15}/>
                    <View style={styles.title}>
                        <IcLabel/>
                        <View style={styles.judul}>
                            <Text style={styles.realjudul}>Full stack Nuxt Js & Laravel Dron App</Text>
                        </View>
                    </View>
                    <Gap height={40}/>
                    <View>
                        <Text style={styles.about}>About This Course ?</Text>
                        <Gap height={15} />
                        <Text style={styles.aboutContent}> pemrograman untuk membangun API yang dikonsumsi 
oleh Front-End seperti Vue, React, Angular, dan lainnya. 
Pada kelas ini, kita akan mempelajari kedua bahasa tersebut 
dalam membangun website Crowdfunding 
(mengumpulkan dana untuk Startup).</Text>
                    </View>
                    <Gap height={40} />
                    <View>
                        <Text style={styles.about}>What will you learn ?</Text>
                        <Gap height={15} />
                        <View style={styles.silabus}>
                            <IcCheck/>
                            <Text style={styles.titlesilabus}>Membuat Responsive Website Design</Text>
                        </View>
                        <View style={styles.silabus}>
                            <IcCheck/>
                            <Text style={styles.titlesilabus}>Membuat Component pada NuxtJS</Text>
                        </View>
                        <View style={styles.silabus}>
                            <IcCheck/>
                            <Text style={styles.titlesilabus}>Deployment Aplikasi NuxtJS ke Server</Text>
                        </View>
                    </View>
                    <Gap height={20} />
                    <Btn title="Buy Course" type="btn-buy" height={43} />
                    <Gap height={20} />
                </ScrollView>
            </View>
        </View>
    )
}

export default DetailCourse

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: 'white'
    },
    heroes:{
        width: '100%',
        height: 250
    },
    container:{
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -20,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    silabus:{
        flexDirection: 'row',
        marginVertical: 5
    },
    topback:{
        marginLeft: 15
    },
    title:{
        flexDirection: 'row',
    },
    judul:{
        flex: 1,
        maxWidth: 250
    },
    realjudul:{
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        paddingLeft: 10
    },
    about:{
        fontSize: 14,
        fontWeight: '900',
        fontFamily: 'Nunito-Regular'
    },
    aboutContent:{
        fontSize: 13,
        fontFamily: 'Nunito-Light'
    },
    titlesilabus:{
        fontFamily: 'Nunito-Light',
        fontSize: 13,
    }
})
