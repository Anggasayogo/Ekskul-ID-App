import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native'
import { IcSearch } from '../../assets'
import { Gap, Inputs, List } from '../../components'
import { useForm } from '../../utils'
import { apply } from 'osmicsx';
import { useSelector } from 'react-redux'

const Search = ({navigation}) => {
    const logins = useSelector(state => state.loginReducer)
    const [loader,setLoader] = useState(true)
    const [course,setCourse] = useState([])
    const [search,setSearch] = useState([])
    const [submit,setSubmit] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [page,setPage] = useState(6)
    const [maxPage,setMaxPage] = useState(0);

    const [form,setForm] = useForm({
        keyword : '',
    })

    const onSearch = async ()=>{
        setSubmit(true)
        const api_token = logins?.data?.data?.token
        Axios.post('https://service.ekskul.co.id/api/v1/search/playlist',{
            keyword : form.keyword
        },
        {
            headers: {"Authorization" : `Bearer ${api_token}`}
        })
        .then(res=>{
            setSearch(res.data.data)
            setLoader(false)
        })
    }

    useEffect(()=>{
        const _getCourseToprate = async ()=>{
            const api_token = logins?.data?.data?.token
            const id_user = await AsyncStorage.getItem('id_user')
            Axios.get(`https://service.ekskul.co.id/api/v1/playlist/${id_user}?page=${page}`,{
                headers: {"Authorization" : `Bearer ${api_token}`}
            })
            .then(res=>{
                setCourse(res.data.data);
                setLoader(false)
                setMaxPage(res.data.offset);
            })
        }
        _getCourseToprate()
    },[page])


    const CardCourse = useCallback(({item})=>{
        const bilangan = item.harga
        var	number_string = bilangan.toString(),
	    sisa 	= number_string.length % 3,
	    rupiah 	= number_string.substr(0, sisa),
	    ribuan 	= number_string.substr(sisa).match(/\d{3}/g)
        if (ribuan) {
	        separator = sisa ? '.' : '';
	        rupiah += separator + ribuan.join('.');
        }
        return (
             <>
                 <Gap height={20}/>
                 <List 
                 icon={`https://service.ekskul.co.id/${item.image}`} 
                 onPress={()=>{ navigation.navigate('DetailCourse',{ 'id_playlist' : item.id_playlist }) }}
                 type="play-search" 
                 title={`${item.playlist_name}`}
                 count={`${item.category_name}`} 
                 harga={`Rp ${rupiah}`}
                 />
             </>
        )
    },[])

    const RenderSearch = useCallback(({item})=>{
        const bilangan = item.harga
            var	number_string = bilangan.toString(),
            sisa 	= number_string.length % 3,
            rupiah 	= number_string.substr(0, sisa),
            ribuan 	= number_string.substr(sisa).match(/\d{3}/g)    
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
        return (
            <>
                <Gap height={20}/>
                <List 
                icon={`https://service.ekskul.co.id/${item.image}`} 
                onPress={()=>{ navigation.navigate('DetailCourse',{ 'id_playlist' : item.id_playlist }) }}
                type="play-search" 
                title={`${item.playlist_name}`}
                count={`${item.category_name}`} 
                harga={rupiah}
                />
            </>
        )
    },[])

    const isLoadmore = ()=>{
        setPage(
            page + 6
        )
    }

    return (
        <View style={styles.pages}>
            <View style={styles.wrapper}>
                <View style={styles.wraperSearch}>
                    <View style={{flex: 1}}>
                        <Inputs type="search"
                            placeholder="Search course.."
                            value={form.keyword}
                            onChangeText={value=> setForm('keyword',value) } 
                        />
                    </View>
                    <TouchableOpacity onPress={onSearch} style={styles.btnIcon}>
                        <IcSearch/>
                    </TouchableOpacity>
                </View>
                <Gap height={5} />
                {
                    submit === false ?
                    <>
                    {
                        !loader ?
                        <>
                            <FlatList
                                data={course}
                                keyExtractor={(item,index)=> index.toString()}
                                renderItem={({item}) => <CardCourse item={item} /> }

                                initialNumToRender={5}
                                numColumns={1}
                                key={2}
                                refreshControl={
                                  <RefreshControl refreshing={refreshing} />
                                }
                                ListEmptyComponent={() => (
                                  <View style={styles.emptyContainer}>
                                    <Text style={styles.emptyText}>Tidak ada data yang ditampilkan.</Text>
                                  </View>
                                )}
                                ListFooterComponent={() =>
                                    maxPage !== course.length &&
                                    <View style={apply("flex justify-center column items-center")}>
                                        <ActivityIndicator color={apply} size="large" />
                                    </View>
                                }
                                onEndReached={isLoadmore}
                                onEndReachedThreshold={0.1}
                                showsVerticalScrollIndicator={false}
                            />
                        </>
                        : 
                        <>
                        <Gap height={20} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        <Gap height={20} />
                        <List type="placeholder" />
                        </>
                    }
                    </>
                    :
                    <>
                    {
                        !loader ?
                        <>
                            <FlatList
                                data={search}
                                keyExtractor={(item,index)=> index.toString() }
                                renderItem={({item})=> <RenderSearch item={item} /> }
                            />
                        </>
                        : 
                        <>
                        <Gap height={20} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        <Gap height={20} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        <Gap height={25} />
                        <List type="placeholder" />
                        </>
                    }
                    </>

                }
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    pages:{
        flex: 1,
        backgroundColor: 'white',
    },
    wrapper:{
        backgroundColor: 'white',
        flex: 1,
        padding: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    wraperSearch: {flexDirection: 'row',alignItems: 'center'},
    btnIcon: {marginHorizontal: 10},
})
