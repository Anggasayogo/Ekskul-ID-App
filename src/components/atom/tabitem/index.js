import React from 'react'
import { StyleSheet, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HomeAct, InHome, InPlay, InProfile, InSearch, PlayAct, ProfileAct, SearchAct } from '../../../assets'

const Tabitem = ({title,active,onPress,onLongPress}) => {
    const Icon = ()=>{

        if(title === 'Home'){
            return active ? <HomeAct/> : <InHome/>
        }
        if(title === 'Search'){
            return active ? <SearchAct/> : <InSearch/>
        }
        if(title === 'Myplay'){
            return active ? <PlayAct/> : <InPlay/>
        }
        if(title === 'Profile'){
            return active ? <ProfileAct/> : <InProfile/>
        }

    }

    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container} >
            <Icon/>
            <Text style={styles.titles(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Tabitem

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    titles: (active)=>({
        color: active ? "#F8B459" : "#B2B5C6",
        fontSize: 11,
        fontFamily: 'Nunito-Regular'
    }),
})
