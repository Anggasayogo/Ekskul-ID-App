import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react'
import FlashMessage from 'react-native-flash-message'
import { StyleSheet } from 'react-native'
import storeConfig from './redux/store'
import { Provider } from 'react-redux'
import Routes from './routes'
import { navigationRef } from './services/NavigationService'
import SentryConfig from './config/Sentry'

const MainApp = (props) => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Routes/>
      </NavigationContainer>
      <FlashMessage position="top" animated={true} floating={true}/>
    </>
  )
}

const { store, persistor } = storeConfig()

const App = ()=>{

  //useEffect(()=>{
    //if(__DEV__) {
      //import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
    //}
    //SentryConfig()
  //},[__DEV__])

  return(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainApp/>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
