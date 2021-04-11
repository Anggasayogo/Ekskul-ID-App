import React, { useCallback } from 'react'
import { 
    KeyboardAvoidingView, 
    TouchableOpacity,
    SafeAreaView,
    ScrollView, 
    StatusBar, 
    Image, 
    Text, 
    View,
    ActivityIndicator,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IcFacebook, IcGoogle, IcLogo } from '../../assets'
import { InputText, InputPassword } from '../../components'
import { loginActions } from '../../redux/action/loginAction'
import { Formik } from 'formik'
import * as Yup from 'yup'

// styles
import styles from './loginStyles'
import { apply } from '../../themes/OsmiProvider'

// Schema
const Schema = Yup.object().shape({
    email: Yup.string().required("Email Wajib Diisi").email('Format email tidak sama'),
    password: Yup.string().required('Wajib diisi').min(6, 'Minimal 6 karakter'),
})
  

const Login = props => {
    const logins = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()
    const handleSubmit = (value) =>{
      const formdata = new FormData()
      formdata.append("email", value?.email)
      formdata.append("password",value?.password)
      dispatch(loginActions(formdata))
    }

    const renderForm = formProps =>{
        const { setFieldValue, errors, values } = formProps
        const setValue = useCallback(setFieldValue, [])
        const onSubmit = useCallback((e) => {formProps.handleSubmit(e)}, [])
    
        return(
          <KeyboardAvoidingView style={styles.keyBoard}>
            <InputText
              name="email"
              label="Masukan Email"
              errors={errors.email}
              value={values.email}
              setFieldValue={setValue}
              returnKeyType="next"
            />
            <InputPassword
              label="Password"
              name="password"
              value={values.password}
              errors={errors.password}
              setFieldValue={setValue}
              returnKeyType="next"
            />
            <TouchableOpacity disabled={logins?.loading ? true : false} style={styles.button} onPress={onSubmit}>
              {
                logins?.loading ? (<ActivityIndicator size="small" color="black"/>) : (<Text style={styles.label}>Login</Text>)
              }
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )
      }
    
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <ScrollView>
            <View style={apply("p-4")}>
              <Image source={IcLogo} style={{width: 175,height: 40, marginVertical: 20}}/>
              {/* <Text style={styles.childTitle}>Selalmat datang di <Text style={apply("font-medium")}>Ekskul</Text> Rasakan belajar dengan materi yang terstruktur dan mudah dipahami</Text> */}
            </View>
            <Formik
              onSubmit={handleSubmit}
              validationSchema={Schema}
              initialValues={{
                email: '',
                password: '',
              }}>
                {formProps => renderForm(formProps)}
            </Formik>
            <View style={styles.middle}>
              <View style={styles.line} />
              <Text style={styles.or}>Atau</Text>
            </View>
            <View style={apply("px-1")}>
              <TouchableOpacity style={styles.btnSosmed} activeOpacity={0.9}>
                <Image source={IcGoogle} style={styles.icons}/>
                <Text style={styles.loginWith}>Daftar Dengan Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSosmed} activeOpacity={0.9}>
                <Image source={IcFacebook} style={styles.icons}/>
                <Text style={styles.loginWith}>Daftar Dengan Google</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.noHaveAccount}>Belum Punya Akun ? <Text style={apply("font-medium")} onPress={()=> props.navigation.navigate('Register') }>Register</Text></Text>
            <Text style={styles.privacy}>Dengan masuk atau mendaftar, berarti kamu menyutujui <Text style={apply("font-medium")}>Syarat Ketentuan</Text> dan <Text style={apply("font-medium")}>Kebijakan Privasi</Text></Text>
          </ScrollView>
        </SafeAreaView>
    )
}

export default Login;

