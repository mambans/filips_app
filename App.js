import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FrontPage from './components';
import Colors from './variables/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <FrontPage />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
