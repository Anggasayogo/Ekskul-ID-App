import React, { useState, useRef, memo } from 'react'
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  TextInput,
  Image,
  View,
  Text
} from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import styles from '../Styles/InputTextStyle'
import { apply } from '../../../themes/OsmiProvider'
// import Images from '../Images'

const InputText = (props) => {
  const [focus, setFocus] = useState(false)
  const [isSecure, setSecure] = useState(true)
  const { name, setFieldValue, label, ...restProps } = props

  const anim = useRef(new Animated.Value(0)).current

  const animation = Animated.timing(anim, {
    toValue: focus || props.value !== '' ? 1 : 0,
    duration: 70,
    easing: Easing.inOut(Easing.ease)
  }).start()

  const inputFocus = () => {
    setFocus(true)
    animation
  }

  const inputBlur = () => {
    setFocus(false)
    animation
  }

  const labelStyle = {
    paddingHorizontal: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 4]
    }),
    top: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [14, -9]
    }),
    fontSize: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14]
    }),
    zIndex: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10]
    }),
  }

  return (
    <>
      <View style={styles.input}>
        <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
        <TextInput
          secureTextEntry={isSecure}
          style={[
            styles.inputText,
            focus ? apply('border-primary') : apply('border-gray-default'),
            props.errors && apply('border-red-500 border-2'),
            props.styles
          ]}
          onFocus={inputFocus}
          autoCapitalize="none"
          onBlur={inputBlur}
          onChangeText={value => setFieldValue(name, value)}
          {...restProps}
        />
        <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setSecure(!isSecure)}
        style={styles.eye}>
          {/* <Image source={isSecure ? Images.eye : Images.eyeOff} style={apply('w-24 h-24')} /> */}
        </TouchableOpacity>
        {props.errors !== '' && <Text style={styles.error}>{props.errors}</Text>}
      </View>
    </>
  )
}

// Prop type warnings
InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
}

// Defaults for props
InputText.defaultProps = {
  name: '',
  label: 'Password',
  value: '',
  errors: '',
  setFieldValue: () => alert('Changed!')
}

export default memo(InputText)