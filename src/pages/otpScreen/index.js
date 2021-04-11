import React, { useRef, useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Text,
  Image,
} from 'react-native'
import { verifyOtpActions } from '../../redux/action/verifyOtpAction'
import OtpInputs, { OtpInputsRef } from 'react-native-otp-inputs'
import { useDispatch, useSelector } from 'react-redux'

// Styles
import styles from './otpStyles'
import { apply } from '../../themes/OsmiProvider'

const OtpScreen = props => {
  const { mycredential,doSendOtp, route } = props
  const dispatch = useDispatch()

  const prevScreen = 'prevScreen'
  const [timer, setTimer] = useState({ minutes: '00', seconds: '00' })
  const [showTimer, setShowTimer] = useState(true)
  const [resend, setResend] = useState(false)
  const otpRef = useRef(null)

  const startTimer = () => {
    let timer = 300, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      if (--timer < 0) {
        setResend(true)
        setShowTimer(false)
        clearInterval(startTimer)
      }
      setTimer({ ...showTimer, minutes, seconds })
    }, 1000);
  }

  useEffect(() => {
    startTimer()
    otpRef.current.focus()

    return () => {
      setShowTimer(false)
      clearInterval(startTimer)
    }
  }, [])

  const checkCode = async code => {
    if (code.length === 5) {
      const doSendOtp = new FormData()
        doSendOtp.append("code",code)
        dispatch(verifyOtpActions(doSendOtp))
    }
  }
    

  return (
    <>
      <StatusBar translucent={true} backgroundColor='transparent' barStyle="white-content" />
      <SafeAreaView style={styles.bg}>
        <View style={apply("py-10")}/>
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.title}>Verifikasi OTP</Text>
            <Text style={styles.subtitle}>Masukan kode OTP yang kami kirimkan melalui email</Text>
          </View>

          <KeyboardAvoidingView style={apply('h-50')} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <OtpInputs
              ref={otpRef}
              handleChange={code => checkCode(code)}
              inputStyles={styles.otpStyles}
              inputContainerStyles={styles.otpContainerStyle}
              keyboardType='phone-pad'
              numberOfInputs={5}
            />
          </KeyboardAvoidingView>

          {showTimer ? <Text style={styles.timer}>{timer.minutes + ":" + timer.seconds}</Text> : <Text style={styles.resend}>Resend Otp</Text>}
        </View>
      </SafeAreaView>
    </>
  )
}

export default OtpScreen
