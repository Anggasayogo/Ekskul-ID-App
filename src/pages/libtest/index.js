import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import WebView from 'react-native-webview';
import { useSelector } from 'react-redux';

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

    return (
        <>
        <StatusBar backgroundColor="black"/>
        {
            loader && <Spinner visible={true}
                textContent={'Loading...'}
            />
        }
            <WebView 
                source={{ uri: snapurl }}
                ref={webViewRef}
                startInLoadingState={true}
                style={{marginTop: 30}}
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
