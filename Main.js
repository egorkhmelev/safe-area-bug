/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const Main = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={[styles.topView, {marginTop: insets.top + 50}]} />
      <SafeAreaView edges={['bottom']}>
        <View style={styles.bottomView} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  topView: {
    height: 100,
    backgroundColor: 'red',
  },
  bottomView: {
    height: 100,
    backgroundColor: 'red',
  },
});

export default Main;
