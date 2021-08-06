import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import HomeBottomTabNAvigator from './HomeBottomTabNAvigator';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen options={{headerShown: false}} name={'Home screen'} component={HomeBottomTabNAvigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;