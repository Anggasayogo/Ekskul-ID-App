import React, { useEffect, useState, useRef, memo } from 'react'
import PropTypes from 'prop-types';
import {
  TextInput,
  View,
  Text
} from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import { formatMoney } from '../../../Helper/NumberFormat'
import styles from '../Styles/InputTextStyle'
import { apply } from '../../../themes/OsmiProvider'

const InputText = (props) => {
  const [focus, setFocus] = useState(false)
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
    fontSize: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14]
    }),
    zIndex: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10]
    }),
    transform: [
      { translateY: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [14, -9]
        })
      }
    ]
  }

  return (
    <>
      <View style={[styles.input, props.styles]}>
        <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
        <TextInput
          style={[
            styles.inputText,
            focus ? apply('border-primary') : apply('border-gray-default'),
            props.errors && apply('border-red-500 border-2')
          ]}
          onFocus={inputFocus}
          onBlur={inputBlur}
          onChangeText={(newVal) => setFieldValue(name, newVal)}
          {...restProps}
        />
        {props.errors && <Text style={styles.error}>{props.errors}</Text>}
      </View>
    </>
  )
}

export const InputPrice = (props) => {
  const [focus, setFocus] = useState(false)
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
    fontSize: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14]
    }),
    zIndex: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10]
    }),
    transform: [
      { translateY: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [14, -9]
        }),
        translateX: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [14, -24]
        })
      }
    ]
  }

  return (
    <>
      <View style={[
        styles.inputPrice,
        props.styles,
        focus ? apply('border-primary') : apply('border-gray-default'),
        props.errors && apply('border-red-500 border-2')
        ]}>
        <Animated.Text style={[styles.labelPrice, labelStyle]}>{label}</Animated.Text>
        <Text style={apply("font-regular self-center pl-3 text-base border-r border-gray-400 pr-3 mr-1")}>Rp</Text>
        <TextInput
          style={styles.inputTextPrice}
          onFocus={inputFocus}
          onBlur={inputBlur}
          onChangeText={(newVal) => setFieldValue(name, formatMoney(newVal))}
          keyboardType="numeric"
          {...restProps}
        />
      </View>
      {props.errors && <Text style={[styles.error, apply("mb-4 mt-0")]}>{props.errors}</Text>}
    </>
  )
}

export const InputDiscount = (props) => {
  const [focus, setFocus] = useState(false)
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
    fontSize: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14]
    }),
    zIndex: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10]
    }),
    transform: [
      { translateY: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [14, -9]
        })
      }
    ]
  }

  return (
    <>
      <View style={[
        styles.inputPrice,
        props.styles,
        focus ? apply('border-primary') : apply('border-gray-default'),
        props.errors && apply('border-red-500 border-2')
        ]}>
        <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
        <TextInput
          style={styles.inputTextPrice}
          onFocus={inputFocus}
          onBlur={inputBlur}
          onChangeText={(newVal) => setFieldValue(name, formatMoney(newVal))}
          keyboardType="numeric"
          {...restProps}
        />
        <Text style={apply("font-regular self-center pr-3 border-l border-gray-default text-base pl-2 ml-2")}>%</Text>
      </View>
      {props.errors && <Text style={[styles.error, apply("mb-4 mt-0")]}>{props.errors}</Text>}
    </>
  )
}

export const SimpleInput = (props) => {
  const [focus, setFocus] = useState(false)
  const { name, setFieldValue, label, ...restProps } = props

  useEffect(() => {
    props.value !== '' && inputFocus()
  }, [])

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
    fontSize: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14]
    }),
    zIndex: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10]
    }),
    transform: [
      { translateY: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [14, -9]
        })
      }
    ]
  }

  return (
    <View style={[styles.input, apply("flex-0")]}>
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
      <TextInput
        style={[
          styles.inputText,
          focus ? apply('border-primary') : apply('border-gray-default'),
          props.errors && apply('border-red-500 border-2')
        ]}
        onFocus={inputFocus}
        onBlur={inputBlur}
        onChangeText={val => setFieldValue(name, val)}
        {...restProps}
      />
      {props.errors && <Text style={styles.error}>{props.errors}</Text>}
    </View>
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
  label: '',
  value: '',
  errors: null,
  setFieldValue: () => alert('Changed!')
}

export default memo(InputText)
