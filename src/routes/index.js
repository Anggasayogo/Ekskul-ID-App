import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { 
    ActionPlay, 
    Autentic, 
    Beforestream, 
    DetailCourse, 
    Home, 
    Libtest, 
    Livestream, 
    Login, 
    Myplaylist, 
    Profile, 
    Register, 
    Search, 
    Splash } from '../pages';
import { BotoomtabNavigator } from '../components';
import EditProfile from '../pages/editprofile';
import CategoryCourse from '../pages/categorycourse';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = ()=>{
    return(
        <Tab.Navigator tabBar={props => <BotoomtabNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Myplay" component={Myplaylist}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName={Splash}>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="Autentic" component={Autentic} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name="DetailCourse" component={DetailCourse} options={{headerShown: false}} />
            <Stack.Screen name="ActionPlay" component={ActionPlay} options={{headerShown: false}} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />
            <Stack.Screen name="Livestream" component={Livestream} options={{headerShown: false}} />
            <Stack.Screen name="Beforestream" component={Beforestream} options={{headerShown: false}} />
            <Stack.Screen name="Categorycourse" component={CategoryCourse} options={{headerShown: false}} />
            <Stack.Screen name="Libtest" component={Libtest} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})
