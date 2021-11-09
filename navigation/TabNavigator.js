import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        labeled = {false}
        style = {styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'Create Post') {
                        iconName = focused 
                        ? 'create' 
                        : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'green',
                inactiveTintColor: 'lightgreen',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Create Post" component={CreatePost} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    bottomTabStyle:{
        borderRadius:20,
        color:"blue"
    }
})

export default BottomTabNavigator