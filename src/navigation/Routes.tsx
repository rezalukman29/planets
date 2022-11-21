/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Text } from 'react-native';
import { enableScreens } from 'react-native-screens';
import useTheme from '../theme/useTheme';
import StackScreen from './Stack';


enableScreens()



const Routes = () => {


    const theme = useTheme()

    return (
        <>
            <NavigationContainer>
                <StackScreen />
            </NavigationContainer>
        </>
    );
};

export default Routes;


