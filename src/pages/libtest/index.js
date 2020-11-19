import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

const Libtest = () => {
    return <WebView source={{ uri: 'https://app.sandbox.midtrans.com/snap/v2/vtweb/0209da1e-3f69-4894-8964-c66b6a9b35a4' }} />
}

export default Libtest

const styles = StyleSheet.create({})
