import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { IcLogo } from '../../assets'
import { Btn, Gap, Inputs } from '../../components'

const Login = ({navigation}) => {
    return (
        <View style={styles.pages}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={50}/>
                <Image source={IcLogo} style={{width: 200,height: 70}}/>
                <Gap height={50}/>
                <Gap height={40}/>
                <Inputs placeholder="input email" title="Email"/>
                <Gap height={30}/>
                <Inputs placeholder="input password" title="Password" type="password"/>
                <Gap height={40}/>
                <Btn height={43} title="Login" onPress={()=>{navigation.navigate('MainApp')}}/>
                <Gap height={40}/>
                <Text style={{fontFamily: 'Nunito-Regular'}}>
                    If you no have account ? please
                </Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                    <Text style={{color: "#F8B459", fontFamily: 'Nunito-Regular'}}>Register Here</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    icGoogle:{width: 46,height: 43}
})
