import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator()

const HomeBottomTabNAvigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#fff',
            }}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000',
                },
                headerShown: false,
            }}>
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name={'home'} size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Search'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name={'search1'} size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Upload'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <Image
                            source={plusIcon}
                            style={{ height: 35, resizeMode: 'contain' }}
                        />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name={'Inbox'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name={'message-minus-outline'}
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={'person-outline'} size={25} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeBottomTabNAvigator
