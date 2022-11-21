/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';

import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Box from '../components/atoms/box';
import Button from '../components/atoms/button';
import Spacer from '../components/atoms/spacer/Spacer';
import Text from '../components/atoms/text';
import PlanetCard from '../components/molecules/card/PlanetCard';
import TopBackNavigation from '../components/molecules/header/TopBackNavigation';
import { StackParams } from '../navigation/Stack';
import { getPlanets, setWishlist } from '../store/planet/planet.actions';

import { ThemeInterface } from '../theme/ThemeProvider';
import useTheme from '../theme/useTheme';
import useThemedStyles from '../theme/useThemedStyles';
import { WIDTH } from '../utils/config';
import { useAppDispatch } from '../hooks/hooks';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../store';
import CustomShimmer from '../components/atoms/shimmer/CustomShimmer';


type Props = NativeStackNavigationProp<StackParams, 'Wishlist'>
export const Wishlist = () => {
  const navigation = useNavigation<Props>();
  const theme = useTheme();
  const s = useThemedStyles(styles);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const { wishlist } = useSelector(
    (state: ReduxState) => state.planet,
    shallowEqual
  );



  const onWishlist = (item: any, isAdded: boolean) => dispatch(setWishlist(item, isAdded))

  return (
    <SafeAreaView style={s.container}>
      <TopBackNavigation
        title="Wishlist"
        onBack={() => navigation.goBack()}
      />

      {isLoading && <CustomShimmer/>}

      {Array.isArray(wishlist) && wishlist.length > 0 && (
        <FlatList
          style={{ paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          data={wishlist}
          renderItem={({ item, index }: any) => (
            <PlanetCard
              key={index}
              index={index}
              onSelect={() => { }}
              onWishlist={onWishlist}
              item={item}
              selected={Boolean(wishlist.find((el: any) => el.name === item.name))}
            />
          )}

          keyExtractor={(item: any) => item.id}
        />
      )}

    </SafeAreaView>
  );
};


const styles = (theme: ThemeInterface) => StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    backgroundColor: theme.colors.BACKGROUND1,
  }
});
