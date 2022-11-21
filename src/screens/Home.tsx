/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Box from '../components/atoms/box';
import Button from '../components/atoms/button';
import Spacer from '../components/atoms/spacer/Spacer';
import { StackParams } from '../navigation/Stack';

import { ThemeInterface } from '../theme/ThemeProvider';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';
import { WIDTH } from '../utils/config';


type Props = NativeStackNavigationProp<StackParams, 'Home'>
export const Home = () => {
  const navigation = useNavigation<Props>();
  const theme = useTheme();
  const s = useThemedStyles(styles);

  return (
    <SafeAreaView style={s.container}>

      <Box>
        <>
          <Button
            title="Planet List"
            onPress={() => navigation.navigate('PlanetsList')}
            isLoading={false}
            type="primary"
          />
          <Spacer l/>
          <Button
            title="Wishlist"
            onPress={() => navigation.navigate('Wishlist')}
            isLoading={false}
            type="outlined"
          />
        </>
      </Box>

    </SafeAreaView>
  );
};


const styles = (theme: ThemeInterface) => StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: WIDTH,
    backgroundColor: theme.colors.BACKGROUND1
  }
});
