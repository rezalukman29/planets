import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import { HEIGHT } from '../../../utils/config';




export function Loading({loading}: any) {


  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <ActivityIndicator color={'#2d65a4'} size="large"/>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position:'absolute',
    left: 0,
    right: 0,
    top: HEIGHT / 2,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
   
    padding: 40,
    borderRadius: 8,
  },
  text: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '500',
  }
});
