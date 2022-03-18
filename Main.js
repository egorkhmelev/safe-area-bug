/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Main = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={{marginTop: 50}}>
        <View style={styles.topView} />
      </SafeAreaView>
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
