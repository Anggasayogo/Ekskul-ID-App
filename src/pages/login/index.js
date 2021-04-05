import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image, 
    Text, 
    View
} from 'react-native'
import { showMessage } from 'react-native-flash-message'
import Spinner from 'react-native-loading-spinner-overlay'
import { useDispatch, useSelector } from 'react-redux'
import { IcLogo } from '../../assets'
import { Btn, Gap, Inputs, InputText, InputPassword } from '../../components'
import { loginActions } from '../../redux/action/loginAction'
import { useForm } from '../../utils'

const Login = ({navigation}) => {
    const logins = useSelector(state => state.loginReducer)
    const { loading } = logins
    const dispatch = useDispatch()
    const [form,setForm] = useForm({
        email : '',
        password : '',
    })

    const handleSubmit = ()=>{
        if(form.email == ''){
            showMessage({
                message : 'email/password tidak boeh kosong!',
                type : 'warning'
            });
        }else{
            if(form.password == ''){
                showMessage({
                    message : 'email/password tidak boeh kosong!',
                    type : 'warning'
                });
            }else{
                const formdata = new FormData()
                formdata.append("email",form?.email)
                formdata.append("password",form?.password)
                dispatch(loginActions(formdata))
            }

        }

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
                <Gap height={50}/>
                <Image source={IcLogo} style={styles.hero}/>
                <Gap height={50}/>
                <Gap height={40}/>
                <InputText 
                    name="email"
                    label="Masukan Email"
                    value={form.email}
                    onChangeText={(value)=> setForm('email',value)}
                    returnKeyType="next"
                />
                <Gap height={30}/>
                <InputPassword
                    name="Password"
                    label="Masukan Password"
                    onChangeText={(value)=>setForm('password',value)}
                    value={form.password}
                />
                <Gap height={40}/>
                <Btn height={43} title="Login" onPress={handleSubmit}/>
                <Gap height={40}/>
                <Text style={{fontFamily: 'Nunito-Regular'}}>
                    If you no have account ? please
                </Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
                    <Text style={styles.registext}>Register Here</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    icGoogle:{width: 46,height: 43},
    registext: {color: "#F8B459", fontFamily: 'Nunito-Regular'},
    hero: {width: 200,height: 70},
    spinnerTextStyle: {
        color: '#FFF'
    },
})

