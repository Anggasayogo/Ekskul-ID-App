import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Btn, Gap, Inputs } from '../../components'

const Register = () => {
    return (
        <View style={styles.pages}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={70}/>
                <Text style={{fontSize: 14,fontWeight: 'bold',textAlign: 'center'}}>Register</Text>
                <Gap height={40}/>
                <Inputs title="Username" placeholder="input username"/>
                <Gap height={30}/>
                <Inputs title="Email" placeholder="input email"/>
                <Gap height={30}/>
                <Inputs title="Password" placeholder="input password" type="password"/>
                <Gap height={60}/>
                <Btn title="Register" height={43}/>
            </ScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    }
})
