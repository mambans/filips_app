import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyDrawer from './pages/routes/DrawerNavigation';
import Colors from './variables/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './Auth/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <NavigationContainer>
            <MyDrawer />
            <StatusBar style='auto' />
          </NavigationContainer>
        </ScrollView>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
  },
});
