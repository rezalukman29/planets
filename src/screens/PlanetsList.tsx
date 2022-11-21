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
import { Loading } from '../components/atoms/loading/loading';


type Props = NativeStackNavigationProp<StackParams, 'PlanetsList'>
export const PlanetsList = () => {
  const navigation = useNavigation<Props>();
  const theme = useTheme();
  const s = useThemedStyles(styles);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isLoadingMore, setLoadingMore] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const [data, setData] = React.useState<Array<any>>([]);
  const dispatch = useDispatch();

  const { wishlist } = useSelector(
    (state: ReduxState) => state.planet,
    shallowEqual
  );

  React.useEffect(() => {
    fetchPlanets(page, false)

  }, [])

  const fetchPlanets = async (num: number, fetchMore: boolean) => {
    try {

      fetchMore ? setLoadingMore(true) : setLoading(true)
      let response: any = await getPlanets(num);
      setData(data.length > 0 ? [...data, ...response] : response)
      fetchMore ? setLoadingMore(false) : setLoading(false)
      return;
    } catch (error) {

    };
  }

  const fetchMore = async () => {
    setPage(page + 1);
    fetchPlanets(page + 1, true);

  }

  const onWishlist = (item: any, isAdded: boolean) => dispatch(setWishlist(item, isAdded))
  const renderFooter = () => (
    <View style={{ height: 40, width: '100%', backgroundColor: theme?.colors.BACKGROUND, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
      {isLoadingMore && <>
        <ActivityIndicator color={theme?.colors.PRIMARY} style={{ marginRight: 4 }} />
        <Text variant="title3" color="primary">Load More Data</Text>
      </>}
    </View>
  )

  return (
    <SafeAreaView style={s.container}>
      <TopBackNavigation
        title="Planets List"
        onBack={() => navigation.goBack()}
      />

      {isLoading && <CustomShimmer />}
      {isLoadingMore && <Loading />}

      {Array.isArray(data) && data.length > 0 && (
        <FlatList
          style={{ paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          data={data}
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
          numColumns={1}
          initialNumToRender={10}
          windowSize={5}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          removeClippedSubviews={false}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMore}
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
