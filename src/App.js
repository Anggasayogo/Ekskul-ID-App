import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import Routes from './routes'

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
      <FlashMessage position="top"/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
