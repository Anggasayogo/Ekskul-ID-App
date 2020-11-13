import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Tabitem } from '../../atom';

const BotoomTabNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
                <Tabitem key={index} title={label} active={isFocused} onPress={onPress} onLongPress={onLongPress} />
            );
          })}
        </View>
    )
}

export default BotoomTabNavigator

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: "#262F56",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 10
    }
})
