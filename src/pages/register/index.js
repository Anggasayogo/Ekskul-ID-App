import Axios from 'axios'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { ScrollView } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'
import { Btn, Gap, Inputs } from '../../components'
import { useForm } from '../../utils'

const Register = ({navigation}) => {
    const [form,setForm] = useForm({
        username : '',
        email : '',
        password : '',
    });

    const [loading,setLoading] = useState(false);
    const handleSubmit = () => {
        setLoading(true)
        Axios.post('http://service.ekskul.co.id/api/register',
        {
            username : form.username,
            email : form.email,
            password : form.password,
            id_role : 2,
        })
        .then(res=>{
            showMessage({
                message : "Registration succesfuly please verify your email.",
                type : 'info'
            })
            setLoading(false)
            navigation.navigate('Login')
        })
        .catch(err=>{
            showMessage({
                message : 'username,email atau password salah!',
                type : 'danger'
            });
            setLoading(false)
        })
    }
    return (
        <View style={styles.pages}>
            {
                loading && <Spinner visible={true}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
            }
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={70}/>
                <Text style={styles.title}>Register</Text>
                <Gap height={40}/>
                <Inputs title="Username" 
                    placeholder="input username"
                    value={form.username}
                    onChangeText={value=>setForm('username',value)}
                />
                <Gap height={30}/>
                <Inputs title="Email" 
                    placeholder="input email"
                    value={form.email}
                    onChangeText={value=>setForm('email',value)}
                />
                <Gap height={30}/>
                <Inputs title="Password" 
                    placeholder="input password" 
                    type="password"
                    value={form.password}
                    onChangeText={value=>setForm('password',value)}
                />
                <Gap height={60}/>
                <Btn title="Register" height={43} onPress={handleSubmit} />
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
    },
    title : {fontSize: 14,fontWeight: 'bold',textAlign: 'center'},
    spinnerTextStyle: {
        color: '#FFF'
    },
})
