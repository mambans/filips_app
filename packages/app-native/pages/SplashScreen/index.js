import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../../variables/Colors';
import { LinearProgress } from 'react-native-elements';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        Loading...
      </Text>
      <LinearProgress color={'orange'} />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: Colors.accent1,
    textAlign: 'center',
  },
});
