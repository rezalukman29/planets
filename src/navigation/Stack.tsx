/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { Home } from '../screens/Home';
import { PlanetsList } from '../screens/PlanetsList';
import { Wishlist } from '../screens/Wishlist';

enableScreens();

export type StackParams = {
    Home: undefined;
    PlanetsList: undefined;
    Wishlist: undefined;
}
const Stack = createNativeStackNavigator<StackParams>();
const StackScreen = ({ navigation, route }: any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PlanetsList" component={PlanetsList} />
            <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
    )
}

export default StackScreen;