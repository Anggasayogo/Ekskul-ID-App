import Axios from 'axios'
import React, { useCallback, useState } from 'react'
import { 
  KeyboardAvoidingView, 
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView, 
  StatusBar, 
  Image, 
  Text, 
  View,
} from 'react-native'

import { registerActions } from '../../redux/action/registerAction'
import { InputPassword, InputText } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { IcFacebook, IcGoogle } from '../../assets'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Styles
import styles from './registerStyle'
import { apply } from '../../themes/OsmiProvider'

// Schema
const Schema = Yup.object().shape({
    username: Yup.string().required("Username Wajib Diisi").min(2,"Minimum Character"),
    email: Yup.string().required("Email Wajib Diisi").email('Format email tidak sama'),
    password: Yup.string().required('Wajib diisi').oneOf([Yup.ref('confirm')], "Password tidak sama").min(6, 'Minimal 6 karakter'),
    confirm: Yup.string().required('Wajib diisi').oneOf([Yup.ref('password')], "Password tidak sama").min(6, 'Minimal 6 karakter')
})

const Register = props => {
    const register = useSelector(state => state.registerReducer)
    const dispatch = useDispatch()

    const handleSubmit = (value) => {
        const dataToSend = new FormData()
        dataToSend.append("name",value?.username)
        dataToSend.append("email",value?.email)
        dataToSend.append("password",value?.password)
        dataToSend.append("password_confirmation",value?.password)
      dispatch(registerActions(dataToSend))
    }
    
    const renderForm = formProps =>{
      const { setFieldValue, errors, values } = formProps
      const setValue = useCallback(setFieldValue, [])
      const onSubmit = useCallback((e) => {formProps.handleSubmit(e)}, [])

      return(
        <KeyboardAvoidingView style={styles.keyBoard}>
          <InputText
            name="username"
            label="Masukan Username"
            errors={errors.username}
            value={values.username}
            setFieldValue={setValue}
            returnKeyType="next"
          />
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
          <InputPassword
            label="Konfirmasi Password"
            name="confirm"
            value={values.confirm}
            errors={errors.confirm}
            setFieldValue={setValue}
            returnKeyType="next"
          />
          <TouchableOpacity  disabled={register?.register?.fetching ? true : false} style={styles.button} onPress={onSubmit}>
            {
              register?.register?.fetching ? (<ActivityIndicator size="small" color="black"/>) : (<Text style={styles.label}>Register</Text>)
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
              <Text style={styles.title}>Selamat Datang Di Ekskul.co.id</Text>
              <Text style={styles.childTitle}>Selalmat datang di <Text style={apply("font-medium")}>Ekskul</Text> Rasakan belajar dengan materi yang terstruktur dan mudah dipahami</Text>
            </View>
            <Formik
              onSubmit={handleSubmit}
              validationSchema={Schema}
              initialValues={{
                username: '',
                email: '',
                password: '',
                confirm: '',
              }}>
                {formProps => renderForm(formProps)}
            </Formik>
            <View style={styles.middle}>
              <View style={styles.line} />
              <Text style={styles.or}>Atau</Text>
            </View>
            <View style={apply("row")}>
              <TouchableOpacity style={styles.btnSosmed} activeOpacity={0.9}>
                <Image source={IcGoogle} style={styles.icons}/>
                <Text style={styles.loginWithUs}>Daftar Dengan Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSosmed} activeOpacity={0.9}>
                <Image source={IcFacebook} style={styles.icons}/>
                <Text style={styles.loginWithUs}>Daftar Dengan Facebook</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.haveAccount}>Sudah Punya Akun ? <Text style={apply("font-medium")} onPress={()=> props.navigation.navigate('Login')}>Login</Text></Text>
            <Text style={styles.menyetujui}>Dengan masuk atau mendaftar, berarti kamu menyutujui <Text style={apply("font-medium")}>Syarat Ketentuan</Text> dan <Text style={apply("font-medium")}>Kebijakan Privasi</Text></Text>
          </ScrollView>
        </SafeAreaView>
    )
}

export default Register
