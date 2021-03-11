import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import WebView from 'react-native-webview';
import { useSelector } from 'react-redux';
import Back from '../../components/atom/back';

const Libtest = ({route,navigation}) => {
    const logins = useSelector(state => state.loginReducer)
    const {id_playlist} = route.params;
    const {id} = route.params;
    const [snapurl,setSnapUrl] = useState('');
    const [loader,setLoader] = useState(false);
    const webViewRef = useRef(null);

    const goback = () => {
        webViewRef.current.goBack();
      };

    useEffect(()=>{
        const _getsnapUrl = async ()=>{
            setLoader(true)
            const api_token = logins?.data?.api_token
            Axios.post('https://service.ekskul.co.id/api/v1/create/order',{
                id_user : id,
                id_playlist : id_playlist
            },
            {
                headers: {"Authorization" : `Bearer ${api_token}`}
            })
            .then(res=>{
                setSnapUrl(res.data.snap_url)
                setLoader(false)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        _getsnapUrl()
    },[])
    const onloadigs = () =>{
    return(
            <ActivityIndicator
                color="blue"
                size="large"
                style={{justifyContent: 'center',alignItems: 'center',flex: 1}}
            />
        )
    }

    const hanldeErr = ()=>{
        navigation.goBack();
    }
    return (
        <>
         {
            loader && <Spinner visible={true}
                textContent={'Loading...'}
            />
        }
            <WebView 
                source={{ uri: snapurl }}
                ref={webViewRef}
                startInLoadingState={true}
                renderLoading={onloadigs}
            />
        </>
    )
}

export default Libtest

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
})
