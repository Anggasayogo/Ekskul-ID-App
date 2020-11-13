import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { DuSpace } from '../../assets'
import { Gap } from '../../components'

const Beforestream = ({navigation}) => {
    const [date, setDate] = useState(new Date());

 //Replaces componentDidMount and componentWillUnmount
    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );

        return function cleanup() {
            clearInterval(timerID);
        };
    },[]);

   function tick() {
    setDate(new Date());
   }

    return (
        <View style={styles.pages}>
            <Image source={DuSpace} style={styles.image}/>
            <Gap height={20}/>
            <Text>Now {date.toLocaleTimeString()}</Text>
            <Text>Live Akan dimulai Pada : </Text>
            <Text>17:00 Wib</Text>
            <Gap height={20}/>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Livestream')}}>
                <Text style={styles.title}>Go Live</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Beforestream

const styles = StyleSheet.create({
    pages:{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 15,
    },
    image:{
        width: '100%',
        height: 200
    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    btn:{
        width: 100,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    }
})
